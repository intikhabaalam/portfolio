import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-blue-400">MERN</span>
            <span className="text-green-400">Fresher</span>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#home" className="text-gray-400 hover:text-white text-sm">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white text-sm">About</a>
            <a href="#skills" className="text-gray-400 hover:text-white text-sm">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-white text-sm">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white text-sm">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://github.com/intikhabaalam" target="_blank" className="text-gray-400 hover:text-white">
              <FiGithub size={18} />
            </a>
            <a href="https://linkedin.com/in/intikhab-aalam-138863248" target="_blank" className="text-gray-400 hover:text-blue-400">
              <FiLinkedin size={18} />
            </a>
            <a href="mailto:intikhabrehmani@gmail.com" className="text-gray-400 hover:text-red-400">
              <FiMail size={18} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6">
          © {currentYear} Intikhab Aalam. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;