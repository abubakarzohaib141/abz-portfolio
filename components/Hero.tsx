'use client'

import { motion } from 'framer-motion'
import { ArrowRight, GithubIcon, FacebookIcon, LinkedinIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"

const Hero= () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-200 opacity-20"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-2xl sm:text-2xl lg:text-6xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I&apos;m <span className="text-gradient">Abu Bakar</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A passionate 🤖 Ai Agent Developer
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button className="bg-blue-500 hover:bg-blue-400 text-white">
            View My Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="border-2 border-blue-600 text-blue-950 hover:bg-blue-600 hover:text-white">
            Hire Me
          </Button>
        </motion.div>
        
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
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L60,85.3C120,75,240,53,360,58.7C480,64,600,96,720,101.3C840,107,960,85,1080,74.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
}

const SocialIcon = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    aria-label={label}
  >
    {icon}
  </motion.a>
)

export default Hero

