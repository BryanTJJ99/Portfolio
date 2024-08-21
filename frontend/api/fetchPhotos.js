import { Storage } from '@google-cloud/storage';

export default async function handler(req, res) {
  try {
    const gcsCredentials = Buffer.from(process.env.GCS_CREDENTIALS_BASE64, 'base64').toString('utf-8');
    const parsedCredentials = JSON.parse(gcsCredentials);

    const storage = new Storage({
      projectId: process.env.GCS_PROJECT_ID,
      credentials: parsedCredentials,
    });

    const bucketName = process.env.GCS_BUCKET_NAME;
    const { albumId } = req.query;

    // Log albumId and prefix to verify they are correct
    console.log('Album ID:', albumId);
    const prefix = `Website/${albumId}/`;
    console.log('Prefix:', prefix);

    const [files] = await storage.bucket(bucketName).getFiles({ prefix });
    
    console.log('Files found:', files); // Log the files found

    if (files.length === 0) {
      res.status(200).json([]);  // Return an empty array if no photos are found
      return;
    }

    const photosData = await Promise.all(files.map(async (file) => {
      const [signedUrl] = await file.getSignedUrl({
        action: 'read',
        expires: '03-09-2500',
      });
      return {
        id: file.id,
        src: signedUrl,
        title: file.name,
      };
    }));

    console.log('Photos Data:', photosData);  // Log the photos data to ensure it's an array
    res.status(200).json(photosData);  // Return the array directly
  } catch (error) {
    console.error('Error fetching photos from Google Cloud Storage:', error);
    res.status(500).json({ error: 'Error fetching photos from Google Cloud Storage.', details: error.message });
  }
}
