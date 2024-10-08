import FadeInViewAnimation from '@/animations/FadeInViewAnimation';
import TimeLine from '@/components/TimeLine';
import React from 'react';
import ProfilePhoto from '/ProfilePhoto.jpg';

function BiographyPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Creativity is intelligence having fun</h1>

      <div className="flex flex-col md:flex-row items-center space-x-5 mx-auto p-10" style={{ maxWidth: '800px' }}>
        {/* Add the profile photo */}
        <img src={ProfilePhoto} alt="Profile" className="mb-5 md:mb-0" style={{ width: '325px', borderRadius: '25%' }}/>

        <div className="text-gray-700">
          <p>
          I’m a graduate student in the Accelerated Master’s Program in Carnegie Mellon University (CMU), pursuing a <a href="https://www.heinz.cmu.edu/programs/information-systems-management-master/" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">Master’s in Information Systems Management</a> at the Heinz College of Information Systems and Public Policy. I also serve as the current Masters Student Liaison for the CMU Singapore Students’ Association.
          </p>
          <br />
          <p>
          Additionally, I am a recipient of the IMDA Singapore Digital Scholarship. You can here my latest CV <a href="https://drive.google.com/file/d/1qG0N3213-24Kq6yINRTOTAiRerrM2xOC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">here</a>.
          </p>
          <br />
          <p>
          Outside of work, I am an <a href='/photography-works' rel="noopener noreferrer" className="font-bold hover:underline">amateur street photographer</a> with a passion for capturing the essence of urban life. My approach to visual storytelling is inspired by the works of Humans of New York and the Magnum Photos collective.
          </p>
        </div>
      </div>

      <hr className="my-8 border-gray-300 mx-auto" style={{ maxWidth: '800px' }} />

      <div className="text-left mt-11 mx-auto" style={{ maxWidth: '800px' }}>
  <h1 className="text-xl font-bold mb-5">About Me</h1>
  <p>
    Growing up in Singapore, I was always fascinated by how technology, grounded in first-principles thinking, could solve complex problems. When the COVID-19 pandemic disrupted my university experience, I saw it as an opportunity to hit pause after one semester—not as a setback, but as a chance to explore my passions, embrace new experiences, and gain clarity on my path forward.
  </p>
  <br />
  <p>
    During this break, I volunteered in my grassroots constituency, drafting appeal letters and helping set up an environmental charity. These experiences brought me closer to people, broadening my perspective and helping me see the interconnectedness of past and present. It was during this time that I realized my purpose in tech: to be an enabler, creating value-adding solutions that serve people’s needs.
  </p>
  <br />
  <p>
    With a renewed sense of purpose, I returned to my studies, focusing on how technology could be harnessed for greater societal impact. This journey led me to pursue a Master’s in Information Systems Management at CMU's Heinz College. Along the way, I sought out diverse and enriching experiences through internships across different countries and cultures. Each role deepened my approach to product development, encouraging me to think critically about both the "how" and the "why" behind every innovation.
  </p>
  <br />
  <p>
    Every step of my journey—from pausing my studies to embracing community service, to gaining global experience and having a bit of <b>FUN</b> along the way—has been about finding meaning and purpose in the work I do. I’ve learned that the most rewarding challenges are those that push us to grow, adapt, and enjoy the ride. As I continue to build my career, I’m eager to take on new challenges, collaborate with diverse teams, and create products that make a meaningful impact—while also making sure to have fun along the way.
  </p>
</div>



      <hr className="my-8 border-gray-300 mx-auto" style={{ maxWidth: '800px' }} />

      

      <div className="mx-auto" style={{ maxWidth: '800px' }}>
      <h1 className="text-xl text-left font-bold mb-5">Work experiences</h1>
      <FadeInViewAnimation>
        <TimeLine />
      </FadeInViewAnimation>
      </div>

    </div>
  );
}

export default BiographyPage;
