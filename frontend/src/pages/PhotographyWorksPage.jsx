import PhotoAlbumCard from '@/components/PhotoAlbumCard';
import { Dropbox } from 'dropbox';
import React, { useEffect, useState } from 'react';

const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

function PhotographyWorksPage() {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dbx = new Dropbox({ accessToken: ACCESS_TOKEN });
    
    async function fetchAlbums() {
      try {
        const albumFolders = ['Seattle', 'Canada', 'Cleveland', 'DC', 'Ohiopyle', 'Pittsburgh'];

        const albumsData = await Promise.all(albumFolders.map(async (folder) => {
          console.log(`Checking folder path: /Website/${folder}`);

          const response = await dbx.filesListFolder({ path: `/Website/${folder}` });
          
          if (response.result.entries.length === 0) {
            console.warn(`Folder ${folder} is empty.`);
            return null;
          }

          const firstFile = response.result.entries[0];
          
          const linkResponse = await dbx.filesGetTemporaryLink({ path: firstFile.path_lower });
          
          return {
            title: folder,
            imgSrc: linkResponse.result.link,
            link: `/photography-works/${folder.toLowerCase()}`,
            photoNum: response.result.entries.length,
          };
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

        // Trigger the fade-in effect after images are loaded
        setTimeout(() => setIsVisible(true), 100);
      } catch (error) {
        console.error('Error fetching Dropbox data:', error);
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
