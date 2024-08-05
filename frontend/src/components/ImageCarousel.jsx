import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';

const ImageCarousel = ({ photos, currentIndex, setCurrentIndex }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const updateHash = (index) => {
    navigate(`${location.pathname}#${index + 1}`);
  };

  const handleNext = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % photos.length;
        updateHash(newIndex);
        return newIndex;
      });
    }
  }, [isTransitioning, photos.length]);

  const handlePrev = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex - 1 + photos.length) % photos.length;
        updateHash(newIndex);
        return newIndex;
      });
    }
  }, [isTransitioning, photos.length]);

  const handleAnimationComplete = () => {
    setIsTransitioning(false);
  };

  return (
    <>
      <div
        className="relative w-full mt-8 flex items-center justify-center"
        onClick={(e) => (e.clientX < window.innerWidth / 2 ? handlePrev() : handleNext())}
        onMouseMove={(e) => {
          e.target.classList.toggle('cursor-left', e.clientX < window.innerWidth / 2);
          e.target.classList.toggle('cursor-right', e.clientX >= window.innerWidth / 2);
        }}
      >
        <div className="relative w-full max-w-[80%] h-[500px] sm:max-w-[60%] sm:h-[400px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait" onExitComplete={handleAnimationComplete}>
            <motion.img
              key={currentIndex}
              src={photos[currentIndex].src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-full max-h-full object-contain" // Ensure image is fully visible within the container
            />
          </AnimatePresence>
        </div>
      </div>
      <div className="bottom-8 text-white text-center bg-black bg-opacity-50 py-2 px-4 mt-8 rounded">
        {photos[currentIndex].title}
      </div>
    </>
  );
};

ImageCarousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
};

export default ImageCarousel;
