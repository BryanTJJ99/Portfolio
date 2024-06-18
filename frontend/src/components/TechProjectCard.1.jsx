import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

// import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
export function TechProjectCard({ imgSrc, title, projectLink, description, techStack }) {

    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <div>
            <div>
                <div onClick={toggleModal} className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                    <img
                        src={imgSrc}
                        className="h-full w-full object-cover object-center" />
                </div>
                <p className="mt-8 text-base text-gray-500">
                    {title}
                </p>
            </div>

            <Transition appear show={isModalOpen}>
                <Dialog as="div" className="relative z-10 focus:outline-none" onClose={toggleModal}>

                    {/* Darkens the background as modal appears */}
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

                    {/* Modal */}
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <DialogPanel className="w-full max-w-4xl rounded-xl bg-white p-6 backdrop-blur-2xl">
                                    <DialogTitle as="h3" className="text-base/7 font-medium">
                                        Description
                                    </DialogTitle>
                                    <p className="mt-2 text-sm/6">
                                        {description}
                                    </p>

                                    <DialogTitle as="h3" className="text-base/7 font-medium">
                                        {/* {techStack.length > 1 ? "Tech Stack" : "Tech Stacks"} */}
                                    </DialogTitle>

                                    <p className="mt-2 text-sm/6">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, iusto nulla. Corporis modi hic at inventore officia, consectetur minus veniam facilis quam soluta! Necessitatibus, eius debitis! Minima similique ab laudantium!
                                    </p>





                                    <div className="mt-4">
                                        <Button
                                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                            onClick={projectLink}
                                        >
                                            Visit Project Page
                                        </Button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
}
TechProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    projectLink: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
};
