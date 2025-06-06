'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import type { Experience } from '@/types';

interface ExperienceProps {
  experiences: Experience[];
}

export default function Experience({ experiences }: ExperienceProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'internship':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'full-time':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'part-time':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'contract':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getTypeLabel = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ');
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey and the hands-on experience I&apos;ve gained in the industry.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-800 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-gray-900 hidden md:block"></div>

                  <div className="md:ml-20">
                    <motion.div
                      className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex items-center gap-3 mb-2 md:mb-0">
                          <FaBriefcase className="text-indigo-600 dark:text-indigo-400 text-xl" />
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {exp.position}
                            </h3>
                            <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                              {exp.company}
                            </h4>
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <FaCalendarAlt className="text-indigo-600 dark:text-indigo-400" />
                            <span>{exp.startDate} - {exp.endDate}</span>
                          </div>
                          
                          <span className={`px-3 py-1 rounded-full text-xs font-medium self-start ${getTypeColor(exp.type)}`}>
                            {getTypeLabel(exp.type)}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                            Technologies Used:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Current position indicator */}
                        {(exp.endDate.toLowerCase().includes('present') || 
                          exp.endDate.toLowerCase().includes('current')) && (
                          <div className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-green-600 dark:text-green-400 font-medium">
                              Currently working here
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to action for more opportunities */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Looking for New Opportunities
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                I&apos;m always interested in new challenges and opportunities to grow.
                If you have an exciting project or position, I&apos;d love to hear from you!
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
