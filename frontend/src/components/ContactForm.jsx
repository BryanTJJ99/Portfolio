import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function ContactPage() {
  return (
    <div className="border-2 border-black rounded-lg p-5 inline-block w-full">
        <p className='text-left text-xl mb-5'>If you happen to stop by the quaint Pittsburgh, feel free to reach out for a coffeechat.</p>
        <h3 className='text-left font-bold'>Email Address</h3>
        <h3 className='text-left text-xl mb-5'>bryan.tanjiajun@gmail.com</h3>
        <div className="flex items-center mb-3">
            <FaLinkedin size={20} />
            <h3 className="ml-2 text-xl">Linkedin</h3>
        </div>
        <div className="flex items-center mb-3">
            <FaInstagram size={20} />
            <h3 className="ml-2 text-xl">Instagram</h3>
        </div>
        <div className="flex items-center mb-3">
            <FaGithub size={20} />
            <h3 className="ml-2 text-xl">Github</h3>
        </div>

    </div>
  );
}

export default ContactPage;
