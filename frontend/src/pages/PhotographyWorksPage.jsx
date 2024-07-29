import React, { useState, useEffect } from 'react';
import PhotoAlbumCard from '@/components/PhotoAlbumCard';
import photographyData from '@/data/photography.json';

function PhotographyWorksPage() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const albumsWithFirstImage = photographyData.photoAlbums.map(album => {
      const albumDetails = photographyData.albumDetails[album.id];
      const firstPhoto = albumDetails && albumDetails.photos.length > 0 ? albumDetails.photos[0].src : '';
      const photoNum = albumDetails ? albumDetails.photos.length : 0;
      return { ...album, imgSrc: firstPhoto, photoNum };
    });
    setAlbums(albumsWithFirstImage);
  }, []);

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
