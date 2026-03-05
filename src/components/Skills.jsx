import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPostman,
  SiRedux,
  SiJson,
  SiNpm
} from 'react-icons/si';

// VS Code alag se
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    {
      name: 'MERN Stack',
      icon: '⚡',
      color: 'text-green-400',
      borderColor: 'border-green-500/30',
      bgColor: 'bg-green-500/5',
      skills: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Express.js', icon: SiExpress },
        { name: 'React', icon: SiReact },
        { name: 'Node.js', icon: SiNodedotjs },
      ]
    },
    {
      name: 'Frontend',
      icon: '🎨',
      color: 'text-blue-400',
      borderColor: 'border-blue-500/30',
      bgColor: 'bg-blue-500/5',
      skills: [
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'HTML5', icon: SiHtml5 },
        { name: 'CSS', isText: true },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Redux', icon: SiRedux },
      ]
    },
    {
      name: 'Tools',
      icon: '🔧',
      color: 'text-orange-400',
      borderColor: 'border-orange-500/30',
      bgColor: 'bg-orange-500/5',
      skills: [
        { name: 'VS Code', icon: VscVscode },
        { name: 'Git', icon: SiGit },
        { name: 'GitHub', icon: SiGithub },
        { name: 'Postman', icon: SiPostman },
        { name: 'NPM', icon: SiNpm },
        { name: 'JSON', icon: SiJson },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies I work with as a MERN Stack Developer
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: catIndex * 0.15 }}
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className={`text-2xl font-semibold ${category.color}`}>
                  {category.name}
                </h3>
                <div className="flex-1 h-px bg-gray-800"></div>
              </div>

              {/* Skills Cards - Classic Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.2 + (catIndex * 0.1) + (index * 0.03) }}
                    whileHover={{ y: -3 }}
                    className={`${category.bgColor} border ${category.borderColor} rounded-xl p-5 hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Icon */}
                      <div className="mb-3">
                        {skill.isText ? (
                          <div className={`text-2xl font-bold ${category.color} w-12 h-12 rounded-xl bg-gray-800/50 flex items-center justify-center border ${category.borderColor}`}>
                            CSS
                          </div>
                        ) : (
                          <skill.icon className={`text-3xl ${category.color}`} />
                        )}
                      </div>
                      
                      {/* Skill Name */}
                      <h4 className="font-medium text-white">{skill.name}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;