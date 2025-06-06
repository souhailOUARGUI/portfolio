'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaStar } from 'react-icons/fa';
import type { Education } from '@/types';

interface EducationProps {
  education: Education[];
}

export default function Education({ education }: EducationProps) {
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

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My academic journey and the foundation of my technical knowledge.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-800 hidden md:block"></div>

            <div className="space-y-12">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-gray-800 hidden md:block"></div>

                  <div className="md:ml-20">
                    <motion.div
                      className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex items-center gap-3 mb-2 md:mb-0">
                          <FaGraduationCap className="text-indigo-600 dark:text-indigo-400 text-xl" />
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {edu.degree} in {edu.field}
                          </h3>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <FaCalendarAlt className="text-indigo-600 dark:text-indigo-400" />
                          <span>{edu.startDate} - {edu.endDate}</span>
                        </div>
                      </div>

                      <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                        {edu.institution}
                      </h4>

                      {edu.gpa && (
                        <div className="flex items-center gap-2 mb-4">
                          <FaStar className="text-yellow-500" />
                          <span className="text-gray-700 dark:text-gray-300">
                            GPA: <span className="font-semibold">{edu.gpa}</span>
                          </span>
                        </div>
                      )}

                      {edu.description && (
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {edu.description}
                        </p>
                      )}

                      {/* Progress indicator for current education */}
                      {edu.endDate.toLowerCase().includes('present') || 
                       edu.endDate.toLowerCase().includes('current') || 
                       parseInt(edu.endDate) > new Date().getFullYear() && (
                        <div className="mt-4">
                          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                            <span>Progress</span>
                            <span>In Progress</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div
                              className="bg-indigo-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: '75%' }}
                              transition={{ duration: 1, delay: 0.5 }}
                            ></motion.div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional achievements or certifications section */}
          {/* <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Academic Achievements
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaGraduationCap className="text-2xl text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Dean's List</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Multiple semesters of academic excellence
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaStar className="text-2xl text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Honor Society</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Member of Computer Science Honor Society
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCalendarAlt className="text-2xl text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Expected Graduation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    On track for timely completion
                  </p>
                </div>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
