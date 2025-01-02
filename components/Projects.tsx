'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Code, Palette, Server, MessageSquare, Cpu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Project {
  title: string
  description: string
  imageUrl: string
  githubUrl: string
  liveUrl: string
  category: 'frontend' | 'agent' | 'chatbot'
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "An e-commerce solution with Next.js, ShadCN , Stripe , and Tailwind Css.",
    imageUrl: "/commerce.png",
    githubUrl: "https://github.com/abubakarzohaib141",
    liveUrl: "https://abz-commerce.vercel.app",
    category: "frontend"
  },
  {
    title: "Portfolio-Website",
    description: "A Portfolio-Website build with Next.js , ShadCn , Gemini 2.0 API K.",
    imageUrl: "/portfolio.png",
    githubUrl: "https://github.com/abubakarzohaib141/abz-portfolio",
    liveUrl: "https://abubakar10.vercel.app",
    category: "frontend"
  },
  {
    title: "My Assistant",
    description: "A chatbot using ChatGpt Zapier.",
    imageUrl: "/chatbot.png",
    githubUrl: "https://github.com/abubakarzohaib141",
    liveUrl: "abubakarzohaib141",
    category: "chatbot"
  },
  {
    title: "Browser Agent",
    description: "An intelligent agent that scrap car data and give it to the user.",
    imageUrl: "/browsing.png",
    githubUrl: "https://github.com/abubakar-zohaib1415/Agentic-Projects/blob/main/02_Browsing_Ai_Agent.ipynb",
    liveUrl: "https://github.com/abubakar-zohaib1415/Agentic-Projects/blob/main/02_Browsing_Ai_Agent.ipynb",
    category: "agent"
  },
  {
    title: "Customer Support Agent",
    description: "A custom Agent for e-commerce customer inquiries using LangGraph , Gemini-1.5-Flash.",
    imageUrl: "/support.png",
    githubUrl: "https://github.com/abubakarzohaib141/Clothe/blob/main/clothe_app.ipynb",
    liveUrl: "https://github.com/abubakarzohaib141/Clothe/blob/main/clothe_app.ipynb",
    category: "agent"
  },
]

const categoryIcons = {
  frontend: Palette,
  backend: Server,
  fullstack: Code,
  agent: Cpu,
  chatbot: MessageSquare
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'agent' | 'chatbot'>('all')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = projects.filter(project => filter === 'all' || project.category === filter)

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-12 text-gray-800"
        >
          My Projects
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {['all', 'frontend',  'agent', 'chatbot'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = categoryIcons[project.category]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                  <div className="relative">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center">
                        <Github className="w-5 h-5 mr-2" />
                        GitHub
                      </Link>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 transition-colors duration-300 flex items-center">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

