import { Storage } from '@google-cloud/storage';

export default async function handler(req, res) {
  const storage = new Storage({
    projectId: process.env.GCS_PROJECT_ID,
    keyFilename: process.env.GCS_KEY_FILE,
  });
  const bucketName = process.env.GCS_BUCKET_NAME;

  try {
    const { folder } = req.query;

    const [files] = await storage.bucket(bucketName).getFiles({ prefix: `Website/${folder}/` });

    if (files.length === 0) {
      res.status(200).json({ message: `Folder ${folder} is empty.` });
      return;
    }

    const firstFile = files[0];
    const [signedUrl] = await firstFile.getSignedUrl({
      action: 'read',
      expires: '03-09-2500',
    });

    res.status(200).json({
      title: folder,
      imgSrc: signedUrl,
      photoNum: files.length,
    });
  } catch (error) {
    console.error('Error fetching Google Cloud Storage data:', error);
    res.status(500).json({ error: 'Error fetching Google Cloud Storage data.', details: error.message });
  }
}
