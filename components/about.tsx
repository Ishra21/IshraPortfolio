"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Code, Palette, Globe, Lightbulb } from "lucide-react"
import { useTheme } from "next-themes"

interface SkillCard {
  icon: React.ElementType
  title: string
  description: string
}

export default function About() {
  const { theme } = useTheme()
  const isDark = theme !== "light"

  const skills: SkillCard[] = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive and performant web applications using modern frameworks and technologies.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with a focus on user experience.",
    },
    {
      icon: Globe,
      title: "Full Stack",
      description: "Developing end-to-end solutions from database design to front-end implementation.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analytical approach to solving complex technical challenges and optimizing solutions.",
    },
  ]

  return (
    <div className={`py-20 ${isDark ? "bg-black" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <p className={`text-center text-lg ${isDark ? "text-purple-200/80" : "text-purple-900/80"}`}>
            I'm a passionate Mern Stack Developer with expertise in building modern web applications. With a strong
            foundation in both front-end and back-end technologies, I create seamless digital experiences that solve
            real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl ${isDark ? "bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50" : "bg-white shadow-lg border border-purple-100 hover:border-purple-300"} transition-all duration-300`}
            >
              <div
                className={`w-12 h-12 rounded-lg ${isDark ? "bg-purple-900/30" : "bg-purple-100"} flex items-center justify-center mb-4`}
              >
                <skill.icon className={`h-6 w-6 ${isDark ? "text-purple-300" : "text-purple-600"}`} />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-purple-900"}`}>{skill.title}</h3>
              <p className={`${isDark ? "text-purple-200/70" : "text-purple-700/80"}`}>{skill.description}</p>
            </motion.div>
          ))}
        </div>
{/* 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className={`mt-16 p-8 rounded-xl ${isDark ? "bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20" : "bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100"}`}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-purple-900"}`}>My Journey</h3>
            <p className={`mb-4 ${isDark ? "text-purple-200/80" : "text-purple-700"}`}>
              I started my journey in software development over 5 years ago, driven by a curiosity to understand how
              digital products are built. Since then, I've worked on a variety of projects ranging from e-commerce
              platforms to data visualization tools.
            </p>
            <p className={`${isDark ? "text-purple-200/80" : "text-purple-700"}`}>
              My approach combines technical expertise with creative problem-solving. I believe in writing clean,
              maintainable code and creating intuitive user experiences. When I'm not coding, you can find me exploring
              new technologies, contributing to open-source projects, or mentoring aspiring developers.
            </p>
          </div>
        </motion.div> */}
      </div>
    </div>
  )
}
