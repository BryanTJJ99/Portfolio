import React, { useEffect, useState } from 'react';
import PhotoAlbumCard from '@/components/PhotoAlbumCard';

function PhotographyWorksPage() {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const albumFolders = ['Pittsburgh', 'Seattle', 'Canada', 'Cleveland', 'DC', 'Ohiopyle'];

        const albumsData = await Promise.all(albumFolders.map(async (folder) => {
          const response = await fetch(`/api/fetchAlbums?folder=${folder}`);
          console.log('Response for folder:', folder, response);
          if (!response.ok) {
            console.error(`Error fetching album data: ${response.statusText}`);
            return null;
          }

          try {
            const data = await response.json();
            return {
              title: data.title,
              imgSrc: data.imgSrc,
              link: `/photography-works/${folder.toLowerCase()}`,
              photoNum: data.photoNum,
            };
          } catch (jsonError) {
            console.error(`Failed to parse JSON for folder ${folder}:`, jsonError);
            return null;
          }
        }));

        const validAlbums = albumsData.filter(album => album !== null);

        await Promise.all(validAlbums.map(album => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = album.imgSrc;
            img.onload = () => {
              console.log(`Image loaded successfully for ${album.title}`);
              resolve();
            };
            img.onerror = (error) => {
              console.error(`Failed to load image for ${album.title}:`, error);
              reject();
            };
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
      {isLoading && (
        <div className="transition-opacity duration-500 opacity-100">
          Loading albums...
        </div>
      )}
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
