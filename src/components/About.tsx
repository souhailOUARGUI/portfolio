'use client';

import { motion } from 'framer-motion';
import { PersonalInfo } from '@/types';

interface AboutProps {
  personalInfo: PersonalInfo;
}

export default function About({ personalInfo }: AboutProps) {
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
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {personalInfo.bio}
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm passionate about creating efficient, scalable, and user-friendly applications. 
                  My journey in software engineering has equipped me with a strong foundation in 
                  various programming languages and frameworks, and I'm always eager to learn 
                  new technologies and tackle challenging problems.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me contributing to open source projects, 
                  participating in hackathons, or mentoring fellow students. I believe in the 
                  power of technology to make a positive impact on the world.
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-lg">
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">Problem Leader</span>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-lg">
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">Prolem Solver</span>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-lg">
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">Artist(Musician)</span>
                  </div>
                  {/* <div className="bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-lg">
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">Creative Thinker</span>
                  </div> */}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Quick Facts
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Location</span>
                    <span className="font-medium text-gray-900 dark:text-white">{personalInfo.location}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Current Role</span>
                    <span className="font-medium text-gray-900 dark:text-white">{personalInfo.title}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Email</span>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  
                  {personalInfo.phone && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">Phone</span>
                      <a 
                        href={`tel:${personalInfo.phone}`}
                        className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  )}
                </div>

                <div className="mt-8">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
