'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaCalendarAlt, FaMedal, FaHandsHelping } from 'react-icons/fa';
import { Award, Activity } from '@/types';

interface AwardsActivitiesProps {
  awards: Award[];
  activities: Activity[];
}

export default function AwardsActivities({ awards, activities }: AwardsActivitiesProps) {
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
    <section id="awards-activities" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Awards & Activities
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Recognition for my achievements and involvement in extracurricular activities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Awards Section */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <FaTrophy className="text-2xl text-yellow-500" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Awards & Recognition
                </h3>
              </div>

              <div className="space-y-6">
                {awards.map((award, index) => (
                  <motion.div
                    key={award.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaMedal className="text-yellow-600 dark:text-yellow-400 text-xl" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            {award.title}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <FaCalendarAlt className="text-indigo-600 dark:text-indigo-400" />
                            <span>{award.date}</span>
                          </div>
                        </div>
                        
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                          {award.organization}
                        </p>
                        
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Activities Section */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <FaUsers className="text-2xl text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Extracurricular Activities
                </h3>
              </div>

              <div className="space-y-6">
                {activities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaHandsHelping className="text-indigo-600 dark:text-indigo-400 text-xl" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            {activity.title}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <FaCalendarAlt className="text-indigo-600 dark:text-indigo-400" />
                            <span>{activity.startDate} - {activity.endDate || 'Present'}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                          <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                            {activity.organization}
                          </p>
                          <span className="hidden md:block text-gray-400">•</span>
                          <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-medium">
                            {activity.role}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {activity.description}
                        </p>

                        {/* Current activity indicator */}
                        {(!activity.endDate || 
                          activity.endDate.toLowerCase().includes('present') || 
                          activity.endDate.toLowerCase().includes('current')) && (
                          <div className="flex items-center gap-2 text-sm mt-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-green-600 dark:text-green-400 font-medium">
                              Currently active
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Summary Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Achievement Summary
              </h3>
              
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaTrophy className="text-2xl text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {awards.length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Awards Received
                  </div>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaUsers className="text-2xl text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {activities.length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Active Involvements
                  </div>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaHandsHelping className="text-2xl text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {activities.filter(a => a.role.toLowerCase().includes('volunteer') || 
                                           a.title.toLowerCase().includes('volunteer')).length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Volunteer Roles
                  </div>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaMedal className="text-2xl text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {activities.filter(a => a.role.toLowerCase().includes('president') || a.role.toLowerCase().includes('organizer') ||
                                           a.role.toLowerCase().includes('leader')).length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Leadership Positions
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
