"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
    setIsMobile(window.innerWidth <= 768)

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") !== null ||
        target.closest("a") !== null
      )
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (!isMounted || isMobile) return null

  return (
    <>
      <style jsx global>{`
        body {
          // cursor: none;
        }
        a, button, [role="button"], [type="button"], [type="submit"], [type="reset"] {
          cursor: none;
        }
      `}</style>

<motion.div
  className={`fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-200 ${
    isPointer ? "ring-2 ring-pink-400" : ""
  }`}
  animate={{
    x: position.x - 12,
    y: position.y - 12,
    scale: isClicking ? 0.8 : isPointer ? 1.5 : 1,
    opacity: isVisible ? 1 : 0,
    backgroundColor: "#000000",
  }}
  transition={{
    type: "spring",
    stiffness: 500,
    damping: 28,
    mass: 0.5,
  }}
/>


      <motion.div
        className="fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none z-40 mix-blend-difference"
        animate={{
          x: position.x - 64,
          y: position.y - 64,
          scale: isClicking ? 0.5 : isPointer ? 0.8 : 0.2,
          opacity: isVisible ? 0.15 : 0,
          backgroundColor: "#ffffff",
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 35,
          mass: 1,
        }}
      />
    </>
  )
}
