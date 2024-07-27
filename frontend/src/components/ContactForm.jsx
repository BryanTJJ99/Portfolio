import { motion } from 'framer-motion';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function ContactPage() {
  return (
    <div className="border-2 border-black rounded-lg p-5 inline-block w-full">
      <p className='text-left text-xl mb-5'>
        If you happen to stop by the quaint Pittsburgh, feel free to reach out for a coffeechat.
      </p>
      <h3 className='text-left font-bold'>Email Address</h3>
      <h3 className='text-left text-xl mb-5'>bryan.tanjiajun@gmail.com</h3>

      <div className="flex items-center mb-3">
        <motion.div
          className='flex items-center border-b-2 border-transparent cursor-pointer'
          whileHover={{ borderColor: "#4A5568" }}
          transition={{ duration: 0.3 }}
          onClick={() => window.open('https://www.linkedin.com/in/bryan-tan-jj/', '_blank')}
        >
          <FaLinkedin size={20} />
          <h3 className="ml-2 text-xl">LinkedIn</h3>
        </motion.div>
      </div>

      <div className="flex items-center mb-3">
        <motion.div
          className='flex items-center border-b-2 border-transparent cursor-pointer'
          whileHover={{ borderColor: "#4A5568" }}
          transition={{ duration: 0.3 }}
          onClick={() => window.open('https://www.instagram.com/broooyannn/', '_blank')}
        >
          <FaInstagram size={20} />
          <h3 className="ml-2 text-xl">Instagram</h3>
        </motion.div>
      </div>

      <div className="flex items-center mb-3">
        <motion.div
          className='flex items-center border-b-2 border-transparent cursor-pointer'
          whileHover={{ borderColor: "#4A5568" }}
          transition={{ duration: 0.3 }}
          onClick={() => window.open('https://github.com/BryanTJJ99', '_blank')}
        >
          <FaGithub size={20} />
          <h3 className="ml-2 text-xl">GitHub</h3>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactPage;
