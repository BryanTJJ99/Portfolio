import React, { useState } from 'react';

const AccordionItem = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <button
        onClick={toggleAccordion}
        className="w-full text-left p-4 flex justify-between items-center"
      >
        <span className="text-lg font-medium">{project.title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4">
          <TechProjectCard
            imgSrc={project.imgSrc}
            imgSrcModal={project.imgSrcModal}
            title={project.title}
            projectLink={project.projectLink}
            description={project.description}
            icons={project.icons}
          />
        </div>
      )}
    </div>
  );
};

const Accordion = ({ projects }) => {
  return (
    <div className="accordion">
      {projects.map((project) => (
        <AccordionItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Accordion;
