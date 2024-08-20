import { Storage } from '@google-cloud/storage';

export default async function handler(req, res) {
  const storage = new Storage({
    projectId: process.env.GCS_PROJECT_ID,
    keyFilename: process.env.GCS_KEY_FILE,
  });
  const bucketName = process.env.GCS_BUCKET_NAME;

  try {
    const { albumId } = req.query;

    const [files] = await storage.bucket(bucketName).getFiles({ prefix: `Website/${albumId}/` });

    if (files.length === 0) {
      res.status(200).json({ message: `No photos found for album: ${albumId}` });
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

    res.status(200).json(photosData);
  } catch (error) {
    console.error('Error fetching photos from Google Cloud Storage:', error);
    res.status(500).json({ error: 'Error fetching photos from Google Cloud Storage.', details: error.message });
  }
}
