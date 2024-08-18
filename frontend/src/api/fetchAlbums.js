import { Dropbox } from 'dropbox';

export default async function handler(req, res) {
  const dbx = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN });

  try {
    const { folder } = req.query;
    console.log(`Fetching data for folder: ${folder}`);

    const response = await dbx.filesListFolder({ path: `/Website/${folder}` });

    if (response.result.entries.length === 0) {
      console.warn(`Folder ${folder} is empty.`);
      res.status(200).json({ message: `Folder ${folder} is empty.` });
      return;
    }

    const firstFile = response.result.entries[0];
    const linkResponse = await dbx.filesGetTemporaryLink({ path: firstFile.path_lower });

    res.status(200).json({
      title: folder,
      imgSrc: linkResponse.result.link,
      photoNum: response.result.entries.length,
    });
  } catch (error) {
    console.error('Error fetching Dropbox data:', error);
    res.status(500).json({ error: 'Error fetching Dropbox data.', details: error.message });
  }
}
