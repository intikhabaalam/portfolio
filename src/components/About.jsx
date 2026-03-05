import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGamepad, FaPenFancy, FaPlane, FaQuoteRight, FaGraduationCap, FaAward } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Hobbies/Interests
  const interests = [
    { icon: FaGamepad, text: 'Playing Games', color: 'text-purple-400' },
    { icon: FaPenFancy, text: 'Writing Tech Blogs', color: 'text-blue-400' },
    { icon: FaPlane, text: 'Traveling and Exploring New Places', color: 'text-green-400' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Know <span className="gradient-text">Who I'M</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center"> {/* items-start se items-center kiya */}
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Introduction */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                Hi, I'm <span className="text-blue-400">Intikhab Aalam</span>
              </h3>
              <p className="text-xl text-gray-300">
                <span className="text-purple-400">MERN Full Stack Developer</span> | React & Node.js
              </p>
              <p className="text-gray-400 mt-2">
                I build modern, fast, and responsive web applications 🚀
              </p>
            </div>

            {/* Education - B.Tech 2025 */}
            <div className="bg-gray-800/50 p-5 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-start gap-3">
                <FaGraduationCap className="text-2xl text-purple-400 mt-1" />
                <div>
                  <p className="text-gray-300">
                    <span className="text-purple-400 font-semibold">🎓 B.Tech Computer Science Engineering</span>
                  </p>
                  <p className="text-gray-400">
                    <span className="text-green-400">Oriental University, Indore</span> • Passout 2025
                  </p>
                </div>
              </div>
            </div>

            {/* E-Skill Web Certification - MERN Stack */}
            <div className="bg-gray-800/50 p-5 rounded-lg border-l-4 border-green-500">
              <div className="flex items-start gap-3">
                <FaAward className="text-2xl text-green-400 mt-1" />
                <div>
                  <p className="text-gray-300">
                    <span className="text-green-400 font-semibold">🏆 E-Skill Web Certification</span>
                  </p>
                  <p className="text-white font-medium">MERN Full Stack Development</p>
                  <p className="text-gray-400">Full Stack Web Development</p>
                </div>
              </div>
            </div>

            {/* Fresher Status Badge */}
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
              <span className="text-blue-400 font-medium">✨ Open to Work • Fresher</span>
            </div>

            {/* Interests/Hobbies */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-200">
                Outside of coding, I love:
              </h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-800/30 rounded-full border border-gray-700"
                  >
                    <item.icon className={`text-sm ${item.color}`} />
                    <span className="text-sm text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-6 p-5 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg"
            >
              <FaQuoteRight className="float-right text-2xl text-gray-700" />
              <p className="text-gray-300 italic">
                "Strive to build things that make a difference!"
              </p>
              <p className="text-right text-blue-400 mt-1 text-sm">— Intikhab Aalam</p>
            </motion.div>
          </motion.div>

          {/* Right Column - Big Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center items-center"
          >
            <div className="w- max-w-2xl"> {/* max-w-md se badhakar max-w-2xl kiya */}
              <img
                src="https://soumyajit.vercel.app/static/media/about.aee0f771fbfc1e7b8fa8.png"
                alt="Intikhab Aalam"
                className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 scale-110" // scale-110 add kiya
              />
            </div>
          </motion.div>
        </div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-10 text-center"
        >
          <span className="text-gray-400">📍 Based in Indore, India 🇮🇳</span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;