import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);
const projects = [
  {
    title: 'Food Ordering Website',
    description: 'Food ordering website where users can book tables, order food, and contact restaurants. Admin manages all bookings and orders.',
    tech: [ 'MongoDB', 'React.js','Express.js', 'JavaScript', 'Tailwind CSS', 'Node.js','postMain','Redux'],  // ✅ MERN Stack
   features: [
    '👤 User Features:',
    '  • Table booking & reservation',
    '  • Order food for delivery/pickup',
    '  • Pre-order for table',
    '  • Contact restaurant directly',
    '  • View booking & order history',
    '  • Track order status',
    '',
    '👑 Admin Features:',
    '  • Manage all table bookings',
    '  • Manage food orders',
    '  • Update booking/order status',
    '  • Restaurant menu management',
    '  • Customer details management',
    '',
    '🔐 Additional:',
    '  • User authentication',
    '  • Payment integration (Razorpay)',
    '  • Booking confirmation',
    '  • Table availability calendar'
    ],
    github: 'https://github.com/intikhabaalam/food-app',
    live: 'https://mr-hotel.onrender.com/',
    image: '/mr-hotel image.png'
  },
  {
    title: 'EduVerse',
    description: 'College campus platform where students can buy/sell old items, and admins can create & manage college events.',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'MongoDB', 'Express.js', 'Node.js','postMain','Redux'],  // ✅ MERN Stack
     features: [
      '👤 User Features:',
      '  • Buy & sell old items (books, electronics, stationery)',
      '  • Product listing with images & price',
      '  • Chat with buyers/sellers',
      '  • User reviews & ratings',
      '',
      '👑 Admin Features:',
      '  • Create & manage college events',
      '  • Event calendar with reminders',
      '  • Student announcements',
      '  • User management & verification',
      '',
      '🔐 Authentication:',
      '  • Student registration (college email verification)',
      '  • Secure login with JWT',
      '  • Role-based access (Admin/Student)'
    ],
    github: 'https://github.com/intikhabaalam/eduverse',
    live: 'https://eduverse-1-xfw3.onrender.com/',
    image: '/eduverse image.png'
  },
  {
    title: 'AI Helper',
    description: 'AI-powered assistant that helps with various tasks using OpenAI API.',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'OpenAI API'],  // ✅ Frontend + API
    features: [
      'Chat interface',
      'Code generation',
      'Text summarization',
      'Content writing',
      'Language translation',
      'Multi-turn conversations'
    ],
    github: 'https://github.com/intikhabaalam/ai-helper',
    live: 'https://ai-helper-dusky.vercel.app/',
    image: '/ai-helper image.png'
  },
  {
    title: 'Kal Tak News',
    description: 'Real-time news aggregator with category filtering and personalized news feed.',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'News API'],  // ✅ Frontend + API
    features: [
      'Breaking news',
      'Category filters',
      'Search functionality',
      'Bookmark articles',
      'Share options',
      'Dark/light mode'
    ],
    github: 'https://github.com/intikhabaalam/kal-tak',
    live: 'https://kal-tak-ehc2.vercel.app/',
    image: '/kal-tak image.png'
  },
  {
    title: 'Pokemon Game',
    description: 'Interactive Pokemon card game where users can battle with different Pokemon.',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Pokemon API', 'Framer Motion'],  // ✅ Frontend + API
    features: [
      'Pokemon cards',
      'Battle system',
      'Score tracking',
      'Animations',
      'Sound effects',
      'Mobile responsive'
    ],
    github: 'https://github.com/intikhabaalam/poke-game',
    live: 'https://poke-game-dun.vercel.app/',
    image: '/poke image.png'
  }
];

  return (
    <section id="projects" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          My <span className="text-blue-400">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-400 mb-12"
        >
          Here are some of my MERN stack projects
        </motion.p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} className="px-2 py-1 text-xs bg-gray-700 rounded">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-gray-700 rounded">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FiGithub /> Code
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FiExternalLink /> Demo
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="ml-auto text-blue-400 hover:text-blue-300"
                  >
                    Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-blue-400">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white text-xl"
                >
                  ✕
                </button>
              </div>

              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <p className="text-gray-300 mb-4">{selectedProject.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {selectedProject.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <a 
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
                >
                  <FiGithub /> View Code
                </a>
                <a 
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition-colors"
                >
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;