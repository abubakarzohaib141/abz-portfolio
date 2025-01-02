"use client";

import { GithubIcon, LinkedinIcon,  FacebookIcon } from "lucide-react";
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 text-center">
       
 <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SocialIcon href="https://github.com/abubakarzohaib141" icon={<GithubIcon />} label="GitHub" />
          <SocialIcon href="https://linkedin.com/in/abubakar-software-wala" icon={<LinkedinIcon />} label="LinkedIn" />
          <SocialIcon href="https://www.facebook.com/profile.php?id=100095211904951" icon={<FacebookIcon />} label="Email" />
        </motion.div>
        <p className="mt-4 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Abu Bakar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
const SocialIcon = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-blue-600 transition-colors duration-300"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      aria-label={label}
    >
      {icon}
    </motion.a>
  )
export default Footer;
