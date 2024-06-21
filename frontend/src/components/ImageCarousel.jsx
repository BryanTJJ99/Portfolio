import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';

const ImageCarousel = ({ photos, currentIndex, setCurrentIndex }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const updateHash = (index) => {
    navigate(`${location.pathname}#${index + 1}`);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % photos.length;
      updateHash(newIndex);
      return newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + photos.length) % photos.length;
      updateHash(newIndex);
      return newIndex;
    });
  };

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center"
      onClick={(e) => (e.clientX < window.innerWidth / 2 ? handlePrev() : handleNext())}
      onMouseMove={(e) => {
        e.target.classList.toggle('cursor-left', e.clientX < window.innerWidth / 2);
        e.target.classList.toggle('cursor-right', e.clientX >= window.innerWidth / 2);
      }}
    >
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={photos[currentIndex].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute w-auto max-w-full max-h-full"
        />
      </AnimatePresence>
      <div className="absolute bottom-8 text-white text-center bg-black bg-opacity-50 py-2 px-4 rounded">
        {photos[currentIndex].title}
      </div>
    </div>
  );
};

ImageCarousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
};

export default ImageCarousel;
