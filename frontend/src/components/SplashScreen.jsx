import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiVite, SiTailwindcss, SiVercel, SiGooglecloud } from 'react-icons/si';

function SplashScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <h1 className="text-3xl font-bold">Loading...</h1>
      <div className="mt-4 mb-4 text-lg text-gray-600">
        Built using:
      </div>
      <div className="mt-2 flex space-x-6">
        <div className="flex flex-col items-center">
          <FaReact className="text-blue-500 h-6 w-6" />
          <span className="mt-2 text-sm text-gray-600">React</span>
        </div>
        <div className="flex flex-col items-center">
          <SiVite className="text-purple-500 h-6 w-6" />
          <span className="mt-2 text-sm text-gray-600">Vite</span>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss className="text-teal-500 h-6 w-6" />
          <span className="mt-2 text-sm text-gray-600">Tailwind CSS</span>
        </div>
        <div className="flex flex-col items-center">
          <SiVercel className="text-black h-6 w-6" />
          <span className="mt-2 text-sm text-gray-600">Vercel</span>
        </div>
        {/* <div className="flex flex-col items-center">
          <SiGooglecloud className="text-blue-400 h-6 w-6" />
          <span className="mt-2 text-sm text-gray-600">Google Cloud</span>
        </div> */}
      </div>
    </div>
  );
}

export default SplashScreen;
