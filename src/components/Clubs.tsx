'use client';

import { motion } from 'framer-motion';
import { FaUsers, FaCalendarAlt, FaTrophy, FaCode, FaMedal } from 'react-icons/fa';
import { Club } from '@/types';

interface ClubsProps {
  clubs: Club[];
}

export default function Clubs({ clubs }: ClubsProps) {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="clubs" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Club Leadership & Activities
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My leadership roles and contributions to various clubs and organizations, fostering community and driving innovation.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {clubs.map((club, index) => (
              <motion.div
                key={club.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                    <FaUsers className="text-indigo-600 dark:text-indigo-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {club.name}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                      {club.organization}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                      {club.role}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <FaCalendarAlt className="text-indigo-600 dark:text-indigo-400" />
                      <span>{club.startDate} - {club.endDate || 'Present'}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {club.description}
                </p>

                {club.achievements && club.achievements.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FaTrophy className="text-yellow-500 text-sm" />
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                        Key Achievements
                      </h4>
                    </div>
                    <ul className="space-y-1">
                      {club.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-xs text-gray-600 dark:text-gray-300 flex items-start gap-2">
                          <FaMedal className="text-indigo-500 text-xs mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {club.technologies && club.technologies.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FaCode className="text-indigo-500 text-sm" />
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                        Technologies
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {club.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Current position indicator */}
                {(club.endDate?.toLowerCase().includes('present') || 
                  club.endDate?.toLowerCase().includes('current') || 
                  !club.endDate) && (
                  <div className="flex items-center gap-2 text-xs mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      Currently active
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
