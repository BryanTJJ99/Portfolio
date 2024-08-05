import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-sm py-4 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex space-x-4">
          {/* <a href="#" className="text-gray-700">Instagram</a>
          <a href="#" className="text-gray-700">Linkedin</a>
          <a href="#" className="text-gray-700">Email</a> */}
        </div>
        <div className="text-gray-500">
          &copy; 2024 Bryan Tan
        </div>
      </div>
    </footer>
  );
};

export default Footer;
