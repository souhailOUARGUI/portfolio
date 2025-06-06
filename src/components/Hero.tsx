'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import { PersonalInfo } from '@/types';

interface HeroProps {
  personalInfo: PersonalInfo;
}

export default function Hero({ personalInfo }: HeroProps) {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    website: FaGlobe
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          {personalInfo.profileImage && (
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg relative">
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personalInfo.name)}&size=128&background=6366f1&color=ffffff`;
                }}
              />
            </div>
          )}
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 mb-6 font-medium"
        >
          {personalInfo.title}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-600 dark:text-gray-300"
        >
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-indigo-600 dark:text-indigo-400" />
            <a href={`mailto:${personalInfo.email}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              {personalInfo.email}
            </a>
          </div>
          {personalInfo.phone && (
            <div className="flex items-center gap-2">
              <FaPhone className="text-indigo-600 dark:text-indigo-400" />
              <a href={`tel:${personalInfo.phone}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {personalInfo.phone}
              </a>
            </div>
          )}
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400" />
            <span>{personalInfo.location}</span>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          {Object.entries(personalInfo.socialLinks).map(([platform, url]) => {
            if (!url) return null;
            const IconComponent = socialIcons[platform as keyof typeof socialIcons];
            if (!IconComponent) return null;

            return (
              <motion.a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconComponent />
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12"
        >
          <motion.button
            onClick={() => {
              const aboutSection = document.getElementById('about');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Me
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
