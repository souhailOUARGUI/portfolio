'use client';

import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaGlobe, FaArrowUp } from 'react-icons/fa';
import { PersonalInfo } from '@/types';

interface FooterProps {
  personalInfo: PersonalInfo;
}

export default function Footer({ personalInfo }: FooterProps) {
  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    website: FaGlobe
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {personalInfo.title} passionate about creating innovative solutions 
              and contributing to meaningful projects.
            </p>
            <div className="flex gap-4">
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
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconComponent size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => {
                    const element = document.getElementById(link.href.substring(1));
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-300 hover:text-indigo-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-indigo-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </p>
              {personalInfo.phone && (
                <p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="hover:text-indigo-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </p>
              )}
              <p>{personalInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 text-gray-300 mb-4 md:mb-0">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="text-red-500" />
              </motion.div>
              <span>using Next.js, TypeScript & Tailwind CSS</span>
            </div>

            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Back to top</span>
              <FaArrowUp />
            </motion.button>
          </div>

          <div className="text-center text-gray-400 text-sm mt-4">
            <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
