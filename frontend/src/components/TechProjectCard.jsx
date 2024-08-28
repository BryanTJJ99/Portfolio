import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import PropTypes from 'prop-types';
import { Suspense, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

// Mapping of icon libraries
const iconMapping = {
  ...FaIcons,
  ...SiIcons
};

// Function to get icon component from mapping
const getIconComponent = (iconName) => {
  return iconMapping[iconName] || null;
};

// Function to strip the library prefix from the icon name
const getIconDisplayName = (iconName) => {
  const prefixRegex = /^(Fa|Si)/;
  return iconName.replace(prefixRegex, '');
};

function TechProjectCard({ imgSrc, imgSrcModal, title, projectLink, description, icons }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleButtonClick = () => {
    if (projectLink) {
      window.open(projectLink, '_blank');
    }
  };

  return (
    <div className="relative hover:cursor-pointer transition-transform duration-300 hover:scale-105">
      <div onClick={toggleModal} className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
        <img src={imgSrc} className="w-full h-full object-cover object-center" />
        <p className="mt-2 text-base text-gray-500">
          {title}
        </p>
      </div>

      <Transition appear show={isModalOpen}>
        <Dialog as="div" className="fixed inset-0 z-50 focus:outline-none" onClose={toggleModal}>
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </TransitionChild>

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform scale-95"
              enterTo="opacity-100 transform scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform scale-100"
              leaveTo="opacity-0 transform scale-95"
            >
              <DialogPanel className="w-full max-w-lg rounded-xl bg-white p-6 overflow-auto">
                <DialogTitle as="h1" className="text-base font-medium">
                  Description
                </DialogTitle>
                <p className="my-2">
                  {description}
                  <img src={imgSrcModal} className="w-full max-w-full h-auto mx-auto my-4" /> {/* Responsive image */}
                </p>

                <DialogTitle as="h1" className="text-base font-medium mt-6">
                  Tech Stack
                </DialogTitle>

                <div className="mt-4 flex gap-4 flex-wrap">
                  {icons.map(iconName => {
                    const IconComponent = getIconComponent(iconName);
                    return IconComponent ? (
                      <div key={iconName} className="flex flex-col items-center">
                        <Suspense fallback={<div>Loading...</div>} key={iconName}>
                          <IconComponent className="text-xl" />
                        </Suspense>
                        <span className="mt-2 text-sm">{getIconDisplayName(iconName)}</span>
                      </div>
                    ) : null;
                  })}
                </div>

                {projectLink && (
                  <div className="mt-4">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600"
                      onClick={handleButtonClick}
                    >
                      Visit Project Page
                    </Button>
                  </div>
                )}
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

TechProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgSrcModal: PropTypes.string,
  title: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  description: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TechProjectCard;
