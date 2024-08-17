import PhotoAlbumCard from '@/components/PhotoAlbumCard';
import { Dropbox } from 'dropbox';
import React, { useEffect, useState } from 'react';

const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

function PhotographyWorksPage() {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dbx = new Dropbox({ accessToken: ACCESS_TOKEN });
    
    async function fetchAlbums() {
      try {
        const albumFolders = ['Seattle', 'Canada', 'Cleveland', 'DC', 'Ohiopyle', 'Pittsburgh']; // Add your album folders here

        const albumsData = await Promise.all(albumFolders.map(async (folder) => {
          console.log(`Checking folder path: /Website/${folder}`); // Log the folder path

          const response = await dbx.filesListFolder({ path: `/Website/${folder}` });
          
          if (response.result.entries.length === 0) {
            console.warn(`Folder ${folder} is empty.`);
            return null;
          }

          const firstFile = response.result.entries[0];
          
          // Get the temporary link for the first file
          const linkResponse = await dbx.filesGetTemporaryLink({ path: firstFile.path_lower });
          
          return {
            title: folder,
            imgSrc: linkResponse.result.link,
            link: `/photography-works/${folder.toLowerCase()}`,
            photoNum: response.result.entries.length,
          };
        }));

        setAlbums(albumsData.filter(album => album !== null));
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching Dropbox data:', error);
        setIsLoading(false); // Ensure loading is set to false even on error
      }
    }

    fetchAlbums();
  }, []);

  if (isLoading) {
    return <div>Loading albums...</div>; // Optionally, replace this with a more sophisticated loading spinner or component
  }

  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
}

export default PhotographyWorksPage;
