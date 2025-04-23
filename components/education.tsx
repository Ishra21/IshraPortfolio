"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"
import { useTheme } from "next-themes"

interface Education {
  id: number
  degree: string
  institution: string
  years: string
  description: string
}

const educationData: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Computer Application",
    institution: "Shri Vaishnav Institute of Management & Science ",
    years: "2022 - 2025",
    description:
      "Graduated with honors. Focused on software engineering and web development technologies.",
  },
  {
    id: 2,
    degree: "Mern Stack Developer Intern",
    institution: "Eskills Web",
    years: "July 2025- Present",
    description: "Passionate full-stack developer, building seamless web experiences from front-end to back-end. Crafting innovative solutions to turn ideas into reality",
  }
]

export default function Education() {
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
        Education
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className={`text-center ${isDark ? "text-purple-200/80" : "text-purple-700/80"} max-w-2xl mx-auto mb-12`}
      >
        My academic journey and qualifications that have shaped my professional skills.
      </motion.p>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600 transform md:translate-x-px" />

        {educationData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative mb-12 md:mb-24 ${
              index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
            } md:w-1/2 pl-10 md:pl-0`}
          >
            {/* Timeline dot */}
            <div
              className={`absolute top-0 ${
                index % 2 === 0 ? "md:right-0 -right-3" : "md:left-0 -left-3"
              } w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transform md:translate-x-${index % 2 === 0 ? "" : "-"}3 flex items-center justify-center`}
            >
              <div className="w-3 h-3 rounded-full bg-black" />
            </div>

            {/* Content */}
            <div
              className={`${isDark ? "bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50" : "bg-white border border-purple-100 hover:border-purple-300"} p-6 rounded-xl transition-all duration-300`}
            >
              <div className={`flex items-center mb-2 gap-2 ${isDark ? "text-purple-300" : "text-purple-600"}`}>
                <GraduationCap className="h-5 w-5" />
                <h3 className="text-xl font-bold">{item.degree}</h3>
              </div>

              <h4 className={`text-lg font-semibold ${isDark ? "text-white" : "text-purple-900"} mb-2`}>
                {item.institution}
              </h4>

              <div className={`flex items-center mb-3 ${isDark ? "text-purple-200/70" : "text-purple-700/80"}`}>
                <Calendar className="h-4 w-4 mr-2" />
                <span>{item.years}</span>
              </div>

              <p className={`${isDark ? "text-purple-200/80" : "text-purple-700/80"}`}>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
