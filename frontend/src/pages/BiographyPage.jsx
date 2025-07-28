import FadeInViewAnimation from '@/animations/FadeInViewAnimation';
import TimeLine from '@/components/TimeLine';
import React from 'react';
import ProfilePhoto from '/ProfilePhoto.jpg';

function BiographyPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Curiosity in Motion</h1>

      <div className="flex flex-col md:flex-row items-center space-x-5 mx-auto p-10" style={{ maxWidth: '800px' }}>
        <img src={ProfilePhoto} alt="Profile" className="mb-5 md:mb-0" style={{ width: '325px', borderRadius: '25%' }} />

        <div className="text-gray-700">
          <p>
            I’m currently in the Accelerated Master’s Program at Carnegie Mellon University (CMU), where I’m pursuing a <a href="https://www.heinz.cmu.edu/programs/information-systems-management-master/" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">Master’s in Information Systems Management</a> at Heinz College. I also serve as the Masters Student Liaison for the CMU Singapore Students’ Association.
          </p>
          <br />
          <p>
            Outside the classroom, I find joy in <a href="/photography-works" rel="noopener noreferrer" className="font-bold hover:underline">street photography</a>, capturing unfiltered, human moments in urban spaces. My visual storytelling is inspired by the likes of Humans of New York and Magnum Photos, grounded in the belief that every frame holds a story worth telling.
          </p>
        </div>
      </div>

      <hr className="my-8 border-gray-300 mx-auto" style={{ maxWidth: '800px' }} />

      <div className="text-left mt-11 mx-auto" style={{ maxWidth: '800px' }}>
        <h1 className="text-xl font-bold mb-5">About Me</h1>
        <p>
          In Bartle’s taxonomy of player types—a framework from the world of video games—I’m undoubtedly an Explorer. I’m driven by curiosity and the thrill of discovery, whether it’s diving into technical systems, unpacking human behavior, or mapping out new ideas.
        </p>
        <br />
        <p>
          I grew up in Singapore, always drawn to how technology could be used to solve real-world problems. When the pandemic disrupted my studies, I took a step back for a semester, not as a retreat, but as a chance to pause, reflect, and reset. That time off turned into one of the most formative chapters of my life.
        </p>
        <br />
        <p>
          I volunteered in my local community, helping draft appeal letters, assisting in environmental initiatives, and supported the founding of a charity. These moments grounded me in empathy and reminded me of the very human stories behind every system we build.
        </p>
        <br />
        <p>
          Returning to school with renewed purpose, I began focusing on how thoughtful design, systems thinking, and technology could come together to drive positive change. That journey led me to CMU, where I’ve since pursued interdisciplinary opportunities, internships across different countries, work that spans research and engineering, and collaborations with people far outside my own perspective.
        </p>
        <br />
        <p>
          As a human-centered engineer trained on both technical foundations and the art of storytelling, I aim to bridge logic with empathy. I don’t just build solutions, I strive to build experiences that invite users into intuitive, meaningful journeys.
        </p>
        <br />
        <p>
          Every step along the way, from taking a pause, to saying yes to the unexpected, to traveling and learning alongside diverse teams, has shaped how I approach the world. I’m excited for what’s next, and I hope to continue exploring new problems, new people, and new ways of creating value.
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
