import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import ImageCarousel from '@/components/ImageCarousel';
import photographyData from '@/data/photography.json';

function AlbumPage() {
  const { albumId } = useParams();
  const navigate = useNavigate();
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { ref: carouselRef, inView: carouselInView } = useInView({ threshold: 0.5 });
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.5 });
  const { ref: gridRef, inView: gridInView } = useInView({ threshold: 0.1 });
  const { ref: descriptionRef, inView: descriptionInView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    const patterns = [
      albumId.charAt(0).toUpperCase() + albumId.slice(1).toLowerCase(),
      albumId.toUpperCase(),
      albumId.toLowerCase(),
    ];

    let albumInfo = null;

    for (const pattern of patterns) {
      if (photographyData.albums[pattern]) {
        albumInfo = photographyData.albums[pattern];
        break;
      }
    }

    if (albumInfo) {
      setAlbum(albumInfo);
    } else {
      console.error(`No album information found for ID: ${albumId}`);
    }
  }, [albumId]);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await fetch(`/api/fetchPhotos?albumId=${albumId}`);
        const photosData = await response.json();

        if (photosData.error) {
          console.error(photosData.error);
          return;
        }

        setPhotos(photosData);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    }

    fetchPhotos();
  }, [albumId]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const index = parseInt(hash.replace('#', '')) - 1;
      if (!isNaN(index) && photos.length > 0 && index >= 0 && index < photos.length) {
        setCurrentIndex(index);
      }
    }
  }, [window.location.hash, photos]);

  const handleThumbnailClick = (index) => {
    navigate(`#${index + 1}`);
    setCurrentIndex(index);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!album || photos.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        ref={carouselRef}
        className={`flex flex-col items-center transition-opacity duration-500 ${carouselInView ? 'opacity-100' : 'opacity-30'}`}
      >
        <ImageCarousel photos={photos} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        <hr className="w-11/12 border-gray-800 mt-10" />
      </div>

      <p
        ref={titleRef}
        className={`items-start text-left font-bold mt-10 px-6 transition-opacity duration-500 ${titleInView ? 'opacity-100' : 'opacity-30'}`}
      >
        {album.title}
      </p>

      <div
        ref={gridRef}
        className={`flex flex-col items-center transition-opacity duration-500 ${gridInView ? 'opacity-100' : 'opacity-30'}`}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="relative w-full"
            >
              {/* Aspect Ratio Box */}
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className={`object-cover w-full h-full cursor-pointer transition-all duration-500 ${
                    index === currentIndex ? 'ring-2 ring-black' : 'ring-0'
                  } hover:opacity-50`}
                  onClick={() => handleThumbnailClick(index)}
                />
              </div>
            </div>
          ))}
        </div>
        <hr className="w-11/12 border-gray-800 m-5 mt-10" />
      </div>

      <div
        ref={descriptionRef}
        className={`text-left mt-5 px-6 transition-opacity duration-500 ${descriptionInView ? 'opacity-100' : 'opacity-30'}`}
      >
        <h1 className='text-xl font-bold'>{album.title}</h1>
        <br />
        <p className='text-lg font-bold'>{album.subHeader}</p>
        <br />
        <p className='opacity-60 text-md mb-20 lg:w-3/5'>{album.description}</p>
      </div>
    </>
  );
}

export default AlbumPage;
