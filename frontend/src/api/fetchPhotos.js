import { Dropbox } from 'dropbox';

export default async function handler(req, res) {
  const dbx = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN });

  try {
    const { albumId } = req.query;
    console.log(`Fetching photos for album: ${albumId}`);

    const response = await dbx.filesListFolder({ path: `/Website/${albumId}` });

    if (response.result.entries.length === 0) {
      console.warn(`No photos found for album: ${albumId}`);
      res.status(200).json({ message: `No photos found for album: ${albumId}` });
      return;
    }

    const photosData = await Promise.all(response.result.entries.map(async (file) => {
      const linkResponse = await dbx.filesGetTemporaryLink({ path: file.path_lower });
      return {
        id: file.id,
        src: linkResponse.result.link,
        title: file.name,
      };
    }));

    res.status(200).json(photosData);
  } catch (error) {
    console.error('Error fetching photos from Dropbox:', error);
    res.status(500).json({ error: 'Error fetching photos from Dropbox.', details: error.message });
  }
}
