import { Storage } from '@google-cloud/storage';

export default async function handler(req, res) {
  try {
    // Cache-control to prevent stale Vercel responses
    res.setHeader('Cache-Control', 'no-store');

    const gcsCredentials = Buffer.from(process.env.GCS_CREDENTIALS_BASE64, 'base64').toString('utf-8');
    const parsedCredentials = JSON.parse(gcsCredentials);

    const storage = new Storage({
      projectId: process.env.GCS_PROJECT_ID,
      credentials: parsedCredentials,
    });

    const bucketName = process.env.GCS_BUCKET_NAME;
    const { folder } = req.query;

    if (!folder) {
      res.status(400).json({ error: 'Missing folder query parameter.' });
      return;
    }

    const [files] = await storage.bucket(bucketName).getFiles({ prefix: `Website/${folder}/` });

    // Only image files
    const imageFiles = files.filter(file => file.name.match(/\.(jpe?g|png|webp|gif)$/i));

    if (imageFiles.length === 0) {
      res.status(404).json({ error: `No images found in folder ${folder}.` });
      return;
    }

    const firstImageFile = imageFiles[0];
    const [signedUrl] = await firstImageFile.getSignedUrl({
      action: 'read',
      expires: '03-09-2500',
    });

    res.status(200).json({
      title: folder,
      imgSrc: signedUrl,
      photoNum: imageFiles.length,
    });
  } catch (error) {
    console.error('Error fetching Google Cloud Storage data:', error);
    res.status(500).json({ error: 'Error fetching Google Cloud Storage data.', details: error.message });
  }
}


// import { Storage } from '@google-cloud/storage';

// export default async function handler(req, res) {
//   try {
//     // Decode the base64-encoded credentials
//     const gcsCredentials = Buffer.from(process.env.GCS_CREDENTIALS_BASE64, 'base64').toString('utf-8');
//     const parsedCredentials = JSON.parse(gcsCredentials);

//     // Initialize the Google Cloud Storage client with the parsed credentials
//     const storage = new Storage({
//       projectId: process.env.GCS_PROJECT_ID,
//       credentials: parsedCredentials,
//     });

//     const bucketName = process.env.GCS_BUCKET_NAME;
//     const { folder } = req.query;

//     // Fetch files from the specified folder
//     const [files] = await storage.bucket(bucketName).getFiles({ prefix: `Website/${folder}/` });

//     if (files.length === 0) {
//       res.status(200).json({ message: `Folder ${folder} is empty.` });
//       return;
//     }

//     const firstFile = files[0];
//     const [signedUrl] = await firstFile.getSignedUrl({
//       action: 'read',
//       expires: '03-09-2500',
//     });

//     res.status(200).json({
//       title: folder,
//       imgSrc: signedUrl,
//       photoNum: files.length,
//     });
//   } catch (error) {
//     console.error('Error fetching Google Cloud Storage data:', error);
//     res.status(500).json({ error: 'Error fetching Google Cloud Storage data.', details: error.message });
//   }
// }
