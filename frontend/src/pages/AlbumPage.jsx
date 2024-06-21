import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ImageCarousel from '@/components/ImageCarousel';

const photos = [
  { id: 1, src: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg', title: 'Untitled I, London, 23.03.2020 - 26.05.2020' },
  { id: 2, src: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg', title: 'Untitled II, London, 23.03.2020 - 26.05.2020' },
  { id: 3, src: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg', title: 'Untitled III, London, 23.03.2020 - 26.05.2020' },
  // Add more photos as needed
];

function AlbumPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const index = parseInt(hash.replace('#', '')) - 1;
      if (!isNaN(index) && index >= 0 && index < photos.length) {
        setCurrentIndex(index);
      }
    }
  }, [location.hash]);

  const handleThumbnailClick = (index) => {
    navigate(`${location.pathname}#${index + 1}`);
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center">
      <ImageCarousel photos={photos} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <div className="flex mt-4 space-x-4">
        {photos.map((photo, index) => (
          <img
            key={photo.id}
            src={photo.src}
            alt={photo.title}
            className={`w-20 h-20 object-cover cursor-pointer ${index === currentIndex ? 'ring-2 ring-black' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default AlbumPage;
