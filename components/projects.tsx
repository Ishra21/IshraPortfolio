"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveLink: string
  githubLink: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Property Pulse",
    description:
      "reated Property Pulse, a full-stack real estate web app with a RESTful API built using Node.js and Express.Used React for the frontend and styled the application with Tailwind CSS for a clean, modern UI.The platform allows users to explore, list, and manage properties with seamless interaction between client and server.",
    image: "https://i.ibb.co/Xr8QWMVM/Screenshot-2025-04-23-174711.png",
    tags: ["Node.js", "React", "Tailwind CSS", "JavaScript"],
    liveLink: "https://property-pulse-green.vercel.app/",
    githubLink: "https://github.com/Ishra21/property_pulse",
  },
  {
    id: 2,
    title: "Smoothie Bar",
    description:
      "Developed a Smoothie Bar web app using React, Redux, and Tailwind CSS with a fully integrated backend JSON API. Implemented dynamic cart functionality with item add/delete, auto price calculation based on delivery distance, and customizable add-ons.Focused on delivering a smooth and responsive user experience with modern UI/UX principles.",
    image: "https://i.ibb.co/v4xypfXR/Screenshot-2025-04-23-173828.png",
    tags: ["React", "Redux", "Tailwind CSS", "Node.js"],
    liveLink: "https://smoothiees.vercel.app/",
    githubLink: "https://github.com/Ishra21/smoothies",
  },
  {
    id: 3,
    title: "GitHub User Search",
    description:
      "Developed a GitHub User Search App using HTML, CSS, JavaScript, and GitHub API to fetch and display user profiles dynamically.Implemented real-time search, responsive UI, and error handling for a seamless user experience.Optimized API requests, UI interactivity, and deployment for efficient performance and accessibility.",
    image: "https://i.ibb.co/6RYsv7pD/Screenshot-2025-04-23-174001.png",
    tags: ["React", "Redux", "Tailwind CSS"],
    liveLink: "https://git-hub-user-search-tool.vercel.app/",
    githubLink: "https://github.com/Ishra21/GitHubUserSearch",
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const { theme } = useTheme()
  const isDark = theme !== "light"

  return (
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
      >
        My Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className={`text-center ${isDark ? "text-purple-200/80" : "text-purple-700/80"} max-w-2xl mx-auto mb-12`}
      >
        Here are some of my recent projects. Each one represents a unique challenge and learning experience.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <Card
              className={`overflow-hidden h-full ${isDark ? "bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50" : "bg-white border border-purple-100 hover:border-purple-300"} transition-all duration-300`}
            >
              <div className="relative overflow-hidden h-48">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0.5 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredProject === project.id ? 1.1 : 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-purple-900"}`}>
                  {project.title}
                </h3>
                <p className={`${isDark ? "text-purple-200/70" : "text-purple-700/80"} mb-4`}>{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-1 rounded-full ${isDark ? "bg-purple-900/30 text-purple-200 border border-purple-500/20" : "bg-purple-100 text-purple-700 border border-purple-200"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${isDark ? "border-purple-500/50 text-purple-200 hover:bg-purple-500/20" : "border-purple-400 text-purple-700 hover:bg-purple-100"}`}
                    asChild
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${isDark ? "border-purple-500/50 text-purple-200 hover:bg-purple-500/20" : "border-purple-400 text-purple-700 hover:bg-purple-100"}`}
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
