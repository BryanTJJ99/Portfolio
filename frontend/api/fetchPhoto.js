import { Storage } from '@google-cloud/storage';

export default async function handler(req, res) {
  try {
    // Decode and parse the base64-encoded credentials
    const gcsCredentials = Buffer.from(process.env.GCS_CREDENTIALS_BASE64, 'base64').toString('utf-8');
    const parsedCredentials = JSON.parse(gcsCredentials);

    // Initialize the Google Cloud Storage client with the parsed credentials
    const storage = new Storage({
      projectId: process.env.GCS_PROJECT_ID,
      credentials: parsedCredentials,
    });

    const bucketName = process.env.GCS_BUCKET_NAME;
    const { folder } = req.query;

    // Log albumId and the computed prefix
    console.log('Album ID received in request:', folder);
    const prefix = `Website/${folder}/`;
    console.log('Computed prefix for GCS:', prefix);

    // Fetch files from the specified folder in Google Cloud Storage
    const [files] = await storage.bucket(bucketName).getFiles({ prefix });

    if (!files || files.length === 0) {
      console.error(`No files found for the prefix: ${prefix}`);
      res.status(200).json([]);  // Return an empty array if no files are found
      return;
    }

    console.log('Files retrieved:', files.map(file => file.name));  // Log the names of the files found

    // Generate signed URLs for the files
    const photosData = await Promise.all(files.map(async (file) => {
      const [signedUrl] = await file.getSignedUrl({
        action: 'read',
        expires: '03-09-2500',  // Set a long expiration date
      });
      return {
        id: file.id,
        src: signedUrl,
        title: file.name,
      };
    }));

    console.log('Generated photos data:', photosData);  // Log the photos data array

    res.status(200).json(photosData);  // Return the photos data array

  } catch (error) {
    console.error('Error fetching photos from Google Cloud Storage:', error);
    res.status(500).json({ error: 'Error fetching photos from Google Cloud Storage.', details: error.message });
  }
}
