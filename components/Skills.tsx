'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { type LucideIcon, Code2, Brain, Bot, Zap, Database, LineChart } from 'lucide-react'

interface Skill {
  name: string
  icon: LucideIcon
  description: string
}

const skills: Skill[] = [
  {
    name: 'AI Agent Development',
    icon: Bot,
    description: 'Creating intelligent agents for complex task automation'
  },
  {
    name: 'Custom GPT Creation',
    icon: Brain,
    description: 'Designing and developing tailored GPT models'
  },
  {
    name: 'LangGraph',
    icon: Code2,
    description: 'Building complex AI applications with graph-based frameworks'
  },
  {
    name: 'Python',
    icon: Code2,
    description: 'Proficient in Python for AI and backend development'
  },
  {
    name: 'Langchain',
    icon: Database,
    description: 'Developing applications with Large Language Models'
  },
  {
    name: 'Streamlit',
    icon: LineChart,
    description: 'Creating interactive web apps for data science and ML'
  },
  {
    name: 'Zapier',
    icon: Zap,
    description: 'Automating workflows between different web applications'
  }
]

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className=" p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
    >
      <div className="bg-blue-200 p-3 rounded-full mb-4">
        <skill.icon className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
      <p className="text-gray-600">{skill.description}</p>
    </motion.div>
  )
}

const SkillsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            As an AI Agent Developer and Custom GPT Creator, I specialize in cutting-edge technologies to build intelligent solutions.
          </p>
        
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default SkillsSection

