import React, { useEffect, useState } from 'react';
import { Dropbox } from 'dropbox';
import PhotoAlbumCard from '@/components/PhotoAlbumCard';

function PhotographyWorksPage() {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    async function fetchAlbums() {
      const dbx = new Dropbox({ accessToken: import.meta.env.VITE_ACCESS_TOKEN });
      const albumFolders = ['Seattle', 'Canada', 'Cleveland', 'DC', 'Ohiopyle', 'Pittsburgh'];

      try {
        const albumsData = await Promise.all(albumFolders.map(async (folder) => {
          try {
            const response = await dbx.filesListFolder({ path: `/Website/${folder}` });

            if (response.result.entries.length === 0) {
              console.warn(`Folder ${folder} is empty.`);
              return null;
            }

            const firstFile = response.result.entries.find((entry) => entry['.tag'] === 'file');
            if (!firstFile) {
              console.warn(`No image files found in folder ${folder}.`);
              return null;
            }

            const linkResponse = await dbx.filesGetTemporaryLink({ path: firstFile.path_lower });

            return {
              title: folder,
              imgSrc: linkResponse.result.link,
              link: `/photography-works/${folder.toLowerCase()}`,
              photoNum: response.result.entries.length,
            };
          } catch (error) {
            console.error(`Error fetching data for folder ${folder}:`, error);
            return null;
          }
        }));

        const validAlbums = albumsData.filter(album => album !== null);

        await Promise.all(validAlbums.map(album => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = album.imgSrc;
            img.onload = resolve;
            img.onerror = reject;
          });
        }));

        setAlbums(validAlbums);
        setIsLoading(false);
        setTimeout(() => setIsVisible(true), 100);
      } catch (error) {
        console.error('Error fetching album data:', error);
        setIsLoading(false);
      }
    }

    fetchAlbums();
  }, []);

  return (
    <div>
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
        Loading albums...
      </div>
      <div className={`mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {albums.map((album, index) => (
          <PhotoAlbumCard
            key={index}
            imgSrc={album.imgSrc}
            title={album.title}
            photoNum={album.photoNum}
            link={album.link}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotographyWorksPage;
