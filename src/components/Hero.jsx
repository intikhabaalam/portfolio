import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const Hero = () => {
  // 🔴 YAHAN APNA RESUME PDF KA LINK LAGAO
  const resumeUrl = 'Intikhab_Aalam_Resume_SinglePage_Paragraphs.pdf';  // ✅ Public folder ka link

  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 text-center">
        {/* Profile Image with Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative w-36 h-36 mx-auto mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-50"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500/30">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/054/122/266/non_2x/a-cheerful-character-sitting-at-a-laptop-representing-productivity-and-creativity-png.png" 
              alt="Intikhab Aalam"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Hi, I'm <span className="text-blue-400">Intikhab Aalam</span>
        </motion.h1>

        {/* Title with Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30 text-blue-400">
            🚀 MERN Full Stack Developer
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 max-w-2xl mx-auto mb-8"
        >
          Passionate about building full-stack web applications with MongoDB, Express.js, React, and Node.js. 
          Looking for my first opportunity in web development.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4 mb-8"
        >
          <a 
            href="https://github.com/intikhabaalam" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl text-gray-400 hover:text-white bg-gray-800 p-3 rounded-full border border-gray-700 hover:border-blue-500 transition-all"
          >
            <FiGithub />
          </a>
          <a 
            href="https://linkedin.com/in/intikhab-aalam-138863248" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl text-gray-400 hover:text-blue-400 bg-gray-800 p-3 rounded-full border border-gray-700 hover:border-blue-500 transition-all"
          >
            <FiLinkedin />
          </a>
          <a 
            href="mailto:intikhabrehmani@gmail.com" 
            className="text-2xl text-gray-400 hover:text-red-400 bg-gray-800 p-3 rounded-full border border-gray-700 hover:border-blue-500 transition-all"
          >
            <FiMail />
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            View Projects
          </a>
          
          {/* 🔴 RESUME BUTTON - AB CLICK KARTE HI PDF KHULEGI */}
          <button
            onClick={handleResumeClick}
            className="px-8 py-3 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-500/10 transition-all flex items-center justify-center gap-2"
          >
            <FiDownload /> Resume
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-5 h-9 border-2 border-gray-600 rounded-full flex justify-center"
          >
            <div className="w-1 h-2 bg-blue-500 rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;