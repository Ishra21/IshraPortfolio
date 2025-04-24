"use client"

import { motion } from "framer-motion"
import { FaReact, FaJs, FaHtml5, FaNodeJs, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiExpress, SiPostman } from "react-icons/si";
import { useTheme } from "next-themes"

export default function TechStack() {
  const { theme } = useTheme()
  const isDark = theme !== "light"

  const iconSize = 50
  const iconVariants = {
    initial: { scale: 0, rotate: -180, opacity: 0 },
    animate: (i: number) => ({
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1 * i,
      },
    }),
    hover: {
      scale: 1.2,
      rotate: 15,
      transition: { duration: 0.3 },
    },
  }

  const technologies = [
    { icon: FaReact, color: "#61DAFB", name: "React" },
    { icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
    { icon: FaHtml5, color: "#E34F26", name: "HTML5" },
    { icon: FaCss3Alt, color: "#264de4", name: "CSS3" },
    { icon: FaNodeJs, color: "#339933", name: "Node.js" },
    { icon: SiExpress, color: "#000000", name: "Express" },
    { icon: SiRedux, color: "#764ABC", name: "Redux" },
    { icon: SiTailwindcss, color: "#38BDF8", name: "Tailwind CSS" },
    { icon: FaBootstrap, color: "#7952B3", name: "Bootstrap" },
    { icon: SiPostman, color: "#FF6C37", name: "REST API" }, // Represented by Postman
  ];

  return (
    <div className={`py-16 container mx-auto px-4 ${isDark ? "" : "bg-white"}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
      >
        Tech Stack
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-8 md:gap-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center"
            variants={iconVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="relative">
              <tech.icon size={iconSize} color={tech.color} className="relative z-10" />
              <motion.div
                className={`absolute inset-0 rounded-full ${isDark ? "bg-white/10" : "bg-white/80"} backdrop-blur-md z-0`}
                animate={{
                  boxShadow: [
                    `0 0 20px 2px ${tech.color}33`,
                    `0 0 30px 5px ${tech.color}66`,
                    `0 0 20px 2px ${tech.color}33`,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                style={{ width: iconSize, height: iconSize }}
              />
            </div>
            <motion.p
              className={`mt-3 ${isDark ? "text-purple-200" : "text-purple-700"} font-medium`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              {tech.name}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
