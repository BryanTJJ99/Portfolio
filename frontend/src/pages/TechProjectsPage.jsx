import React, { useEffect, useState } from 'react';
import MachineLearningInProduction from '/tech-projects/MachineLearningInProduction.png';
import BigData from '/tech-projects/BigData.png';
import BlackGold from '/tech-projects/BlackGold.png';
import OOP from '/tech-projects/OOP.png';
import ESD from '/tech-projects/ESD.png';
import SPM from '/tech-projects/SPM.png';
import GIS from '/tech-projects/GIS.png';
import DBTT from '/tech-projects/DBTT.png';
import BPAS from '/tech-projects/BPAS.png';
import TechProjectCard from '@/components/TechProjectCard';
import projectData from '@/data/tech-projects.json';
import { Accordion, AccordionPanel, AccordionTitle, AccordionContent } from 'flowbite-react';
import useMediaQuery from '@/utils/useMediaQuery'; // Import your custom hook

const TechProjectsPage = () => {
  const [softwareProjects, setSoftwareProjects] = useState([]);
  const [productProjects, setProductProjects] = useState([]);
  const isSmallScreen = useMediaQuery('(max-width: 640px)');

  useEffect(() => {
    const imageMap = {
      '/tech-projects/MachineLearningInProduction.png': MachineLearningInProduction,
      '/tech-projects/BigData.png': BigData,
      '/tech-projects/BlackGold.png': BlackGold,
      '/tech-projects/OOP.png': OOP,
      '/tech-projects/ESD.png': ESD,
      '/tech-projects/SPM.png': SPM,
      '/tech-projects/GIS.png': GIS,
      '/tech-projects/DBTT.png': DBTT,
      '/tech-projects/BPAS.png': BPAS,
    };

    const software = [];
    const product = [];

    projectData.forEach(project => {
      if (imageMap[project.imgSrc]) {
        project.imgSrc = imageMap[project.imgSrc];
        project.imgSrcModal = imageMap[project.imgSrc];
      }
      if (project.category === 'Software & Data Engineering') {
        software.push(project);
      } else if (project.category === 'Innovation & Product Management') {
        product.push(project);
      }
    });

    setSoftwareProjects(software);
    setProductProjects(product);
  }, []);

  const renderProjects = (projects) => (
    projects.map(project => (
      <div key={project.id} className="p-2"> {/* Added padding to the card container */}
        <TechProjectCard
          imgSrc={project.imgSrc}
          imgSrcModal={project.imgSrcModal}
          title={project.title}
          projectLink={project.projectLink}
          description={project.description}
          icons={project.icons}
        />
      </div>
    ))
  );

  const renderAccordions = () => (
    <Accordion>
      <AccordionPanel>
        <AccordionTitle>Software & Data Engineering</AccordionTitle>
        <AccordionContent>
          {renderProjects(softwareProjects)}
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>Innovation & Product Management</AccordionTitle>
        <AccordionContent>
          {renderProjects(productProjects)}
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );

  return (
    <div className='mt-10 p-3'>
      {isSmallScreen ? (
        renderAccordions()
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Software & Data Engineering</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10"> {/* Adjusted gap */}
            {renderProjects(softwareProjects)}
          </div>

          <hr className="my-8 border-gray-300" />

          {productProjects.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mb-4">Innovation & Product Management</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Adjusted gap */}
                {renderProjects(productProjects)}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TechProjectsPage;
