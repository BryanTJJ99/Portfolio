import MachineLearningInProduction from '@/assets/images/tech-projects/MachineLearningInProduction.png';
import TechProjectCard from '@/components/TechProjectCard';
import projectData from '@/data/tech-projects.json';
import React, { useEffect, useState } from 'react';

const TechProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const data = projectData.map(project => {
      if (project.imgSrc === '@/assets/images/tech-projects/MachineLearningInProduction.png') {
        project.imgSrc = MachineLearningInProduction;
        project.imgSrcModal = MachineLearningInProduction;
      }
      return project;
    });
    setProjects(data);
  }, []);

  return (
    <div className='mt-10 p-3'>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <TechProjectCard
            key={project.id}
            imgSrc={project.imgSrc}
            imgSrcModal={project.imgSrcModal}
            title={project.title}
            projectLink={project.projectLink}
            description={project.description}
            icons={project.icons}
          />
        ))}
      </div>
    </div>
  );
};

export default TechProjectsPage;
