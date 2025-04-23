"use client"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import { ChevronDown, Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react"
import { useTheme } from "next-themes"

export default function Hero() {
  const { theme } = useTheme()
  const isDark = theme !== "light"

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Background gradient */}
      <div
        className={`absolute inset-0 ${isDark ? "bg-gradient-to-br from-black via-purple-950/20 to-black" : "bg-gradient-to-br from-white via-purple-50/20 to-white"}`}
      ></div>

      {/* Content */}
      <div className="container relative z-10 px-4 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-2"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400`}>
              Hi, I'm{" "}
            </span>
          </h1>
        </motion.div>

       <div className="text-3xl md:text-5xl font-bold min-h-[60px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
  <TypeAnimation
    sequence={[
      "Ishra Khanam", 2000,
      "", 500,
      "Ishra Khanam", 2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="mb-6 text-xl md:text-2xl font-medium min-h-[40px]"
>
  <span className={isDark ? "text-purple-200" : "text-purple-700"}>
    <TypeAnimation
      sequence={[
        "Software Engineer", 2000,
        "MERN Stack Developer", 2000,
        "UI/UX Designer", 2000,
        "Full Stack Developer", 2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  </span>
</motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <a
            href="https://github.com/Ishra21"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full ${isDark ? "bg-purple-900/30 hover:bg-purple-800/50" : "bg-purple-100 hover:bg-purple-200"} transition-colors duration-300`}
          >
            <Github className={`h-6 w-6 ${isDark ? "text-purple-200" : "text-purple-700"}`} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ishra-khanam/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full ${isDark ? "bg-purple-900/30 hover:bg-purple-800/50" : "bg-purple-100 hover:bg-purple-200"} transition-colors duration-300`}
          >
            <Linkedin className={`h-6 w-6 ${isDark ? "text-purple-200" : "text-purple-700"}`} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:ishra6107@gmail.com"
            className={`p-3 rounded-full ${isDark ? "bg-purple-900/30 hover:bg-purple-800/50" : "bg-purple-100 hover:bg-purple-200"} transition-colors duration-300`}
          >
            <Mail className={`h-6 w-6 ${isDark ? "text-purple-200" : "text-purple-700"}`} />
            <span className="sr-only">Email</span>
          </a>
          {/* <a
            href="https://drive.google.com/file/d/1lIO36njM_nM3zwfvEyuwEds-TtR0UMlE/view?usp=drive_link"
            download
            className={`p-3 rounded-full ${isDark ? "bg-purple-900/30 hover:bg-purple-800/50" : "bg-purple-100 hover:bg-purple-200"} transition-colors duration-300`}
          >
            <Download className={`h-6 w-6 ${isDark ? "text-purple-200" : "text-purple-700"}`} />
            <span className="sr-only">Download Resume</span>
          </a> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            onClick={scrollToContent}
            className={`${isDark ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"} text-white px-6 py-6 rounded-full font-medium text-lg group`}
          >
            View My Projects
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
          </Button>

          <Button
            onClick={scrollToContent}
            variant="outline"
            className={`px-6 py-6 rounded-full font-medium text-lg ${isDark ? "border-purple-500/50 text-purple-200 hover:bg-purple-500/20" : "border-purple-500 text-purple-700 hover:bg-purple-100"} group`}
          >
            Get In Touch
            <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          className={`w-6 h-10 rounded-full border-2 ${isDark ? "border-purple-400" : "border-purple-500"} flex justify-center p-1`}
        >
          <motion.div className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-purple-400" : "bg-purple-500"}`} />
        </motion.div>
      </motion.div>
    </div>
  )
}
