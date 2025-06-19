"use client"

import type React from "react"

import { useRef } from "react"
import { motion } from "framer-motion"
import Hero from "@/components/hero.jsx"
import Projects from "@/components/projects.jsx"
import Education from "@/components/education.jsx"
import Contact from "@/components/contact.jsx"
import CustomCursor from "@/components/custom-cursor.jsx"
import TechStack from "@/components/tech-stack.jsx"
import About from "@/components/about.jsx"
import { Button } from "@/components/ui/button.jsx"
import { useTheme } from "next-themes"
import ThemeToggle from "@/components/theme-toggle.jsx"

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const isDark = theme !== "light"

  const scrollToSection = (ref: { current: HTMLElement | null }) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <main
      className={`relative min-h-screen ${isDark ? "bg-black text-white" : "bg-white text-purple-900"} overflow-x-hidden`}
    >
      <CustomCursor />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${isDark ? "bg-black/80 backdrop-blur-md border-b border-purple-900/30" : "bg-white/80 backdrop-blur-md border-b border-purple-200"}`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Button
              variant="link"
              onClick={() => scrollToSection(aboutRef)}
              className={isDark ? "text-purple-300 hover:text-purple-100" : "text-purple-700 hover:text-purple-900"}
            >
              About
            </Button>
            <Button
              variant="link"
              onClick={() => scrollToSection(projectsRef)}
              className={isDark ? "text-purple-300 hover:text-purple-100" : "text-purple-700 hover:text-purple-900"}
            >
              Projects
            </Button>
            <Button
              variant="link"
              onClick={() => scrollToSection(educationRef)}
              className={isDark ? "text-purple-300 hover:text-purple-100" : "text-purple-700 hover:text-purple-900"}
            >
              Education
            </Button>
            <Button
              variant="link"
              onClick={() => scrollToSection(contactRef)}
              className={isDark ? "text-purple-300 hover:text-purple-100" : "text-purple-700 hover:text-purple-900"}
            >
              Contact
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Portfolio
            </motion.div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className="min-h-screen">
        <Hero />
      </section>

      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>

      <TechStack />

      <motion.div
        ref={projectsRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <Projects />
      </motion.div>

      <motion.div
        ref={educationRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`py-20 ${isDark ? "bg-gradient-to-b from-black to-purple-950/20" : "bg-gradient-to-b from-white to-purple-50"}`}
      >
        <Education />
      </motion.div>

      <motion.div
        ref={contactRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <Contact />
      </motion.div>

      <footer
        className={`${isDark ? "bg-black border-t border-purple-900/30" : "bg-white border-t border-purple-200"} py-8`}
      >
        <div className="container mx-auto px-4 text-center">
          <p className={isDark ? "text-purple-300/60" : "text-purple-700/60"}>
            © {new Date().getFullYear()} | Designed & Developed with ❤️
          </p>
        </div>
      </footer>
    </main>
  )
}
