import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import ImageCarousel from '@/components/ImageCarousel';

const photos = [
  { id: 1, src: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg', title: 'Untitled I, London, 23.03.2020 - 26.05.2020' },
  { id: 2, src: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg', title: 'Untitled II, London, 23.03.2020 - 26.05.2020' },
  { id: 3, src: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg', title: 'Untitled III, London, 23.03.2020 - 26.05.2020' },
  { id: 4, src: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg', title: 'Untitled III, London, 23.03.2020 - 26.05.2020' },
  { id: 5, src: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg', title: 'Untitled III, London, 23.03.2020 - 26.05.2020' },
  // Add more photos as needed
];

const albumTitle = "Dark Line – The Thames Estuary";
const albumSubHeader = "A response to the dark times in society in collaboration with Prix Pictet.";
const albumDescription = "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ";

function AlbumPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const { ref: carouselRef, inView: carouselInView } = useInView({ threshold: 0.5 });
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.5 });
  const { ref: gridRef, inView: gridInView } = useInView({ threshold: 0.5 });
  const { ref: descriptionRef, inView: descriptionInView } = useInView({ threshold: 0.5 });

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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
        {albumTitle}
      </p>

      <div
        ref={gridRef}
        className={`flex flex-col items-center transition-opacity duration-500 ${gridInView ? 'opacity-100' : 'opacity-30'}`}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-6">
          {photos.map((photo, index) => (
            <div key={photo.id} className="relative w-full h-auto">
              <img
                src={photo.src}
                alt={photo.title}
                className={`object-cover cursor-pointer w-full h-full transition-all duration-500 ${index === currentIndex ? 'ring-2 ring-black' : 'ring-0'} hover:opacity-50`}
                onClick={() => handleThumbnailClick(index)}
              />
            </div>
          ))}
        </div>
        <hr className="w-11/12 border-gray-800 m-5 mt-10" />
      </div>

      <div
        ref={descriptionRef}
        className={`text-left mt-5 px-6 transition-opacity duration-500 ${descriptionInView ? 'opacity-100' : 'opacity-30'}`}
      >
        <h1 className='text-xl font-bold'>{albumTitle}</h1>
        <br />
        <p className='text-lg font-bold'>{albumSubHeader}</p>
        <br />
        <p className='opacity-60 text-md mb-20'>{albumDescription}</p>
      </div>
    </>
  );
}

export default AlbumPage;
