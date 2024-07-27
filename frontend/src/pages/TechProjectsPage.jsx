import MachineLearningInproduction from '@/assets/images/tech-projects/MachineLearningInProduction.png';
import TechProjectCard from '@/components/TechProjectCard';
import React from 'react';

function TechProjectsPage() {
  return (
    <div className='mt-10 p-3'>
      
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TechProjectCard
          imgSrc={MachineLearningInproduction}
          imgSrcModal={MachineLearningInproduction}
          title="Machine Learning in Production (CMU 17-445)"
          projectLink="https://github.com/cmu-seai/group-project-s24-caped-crusaders"
          description="End-to-end development of machine learning applications, including production testing, deployment pipelines, and robust data infrastructure for model learning and serving."
          icons={['SiApachekafka', 'FaDocker', 'FaFlask', 'SiGrafana', 'SiApacheairflow']}
        />


        <TechProjectCard
          imgSrc="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
          title="The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1220 standard gumballs, or any
          combination of on-the-go treats that your heart desires. Yes, we did the math."
          projectLink=""
          description="lorem ipsum"
          icons={['FaLinkedin', 'FaInstagram', 'FaGithub']}
        />

        <TechProjectCard
          imgSrc="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
          title="The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1220 standard gumballs, or any
          combination of on-the-go treats that your heart desires. Yes, we did the math."
          projectLink=""
          description="lorem ipsum"
          icons={['FaLinkedin', 'FaInstagram', 'FaGithub']}
        />


        <TechProjectCard
          imgSrc="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
          title="The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1220 standard gumballs, or any
          combination of on-the-go treats that your heart desires. Yes, we did the math."
          projectLink=""
          description="lorem ipsum"
          icons={['FaLinkedin', 'FaInstagram', 'FaGithub']}
        />


        <TechProjectCard
          imgSrc="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
          title="The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1220 standard gumballs, or any
          combination of on-the-go treats that your heart desires. Yes, we did the math."
          projectLink=""
          description="lorem ipsum"
          icons={['FaLinkedin', 'FaInstagram', 'FaGithub']}
        />




      </div>

    </div>
  );
}

export default TechProjectsPage;
