"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  // Use useCallback to memoize event handlers
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }, [])

  const handleMouseOver = useCallback((e: MouseEvent) => {
    if (
      e.target instanceof HTMLElement &&
      (e.target.tagName === "BUTTON" ||
        e.target.tagName === "A" ||
        e.target.closest("button") ||
        e.target.closest("a") ||
        e.target.classList.contains("hoverable"))
    ) {
      setIsHovering(true)
    } else {
      setIsHovering(false)
    }
  }, [])

  const handleResize = useCallback(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768)
    }
  }, [])

  useEffect(() => {
    // Safety check for browser environment
    if (typeof window === "undefined" || typeof document === "undefined") {
      return
    }

    // Check if it's a mobile device
    handleResize()

    // Only add event listeners if not mobile
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseover", handleMouseOver)
      window.addEventListener("resize", handleResize)
    }

    return () => {
      // Clean up event listeners
      if (typeof window !== "undefined" && typeof document !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseover", handleMouseOver)
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [isMobile, handleMouseMove, handleMouseOver, handleResize])

  // Don't render the cursor on mobile
  if (isMobile || typeof window === "undefined") {
    return null
  }

  return (
    <>
      <motion.div
        className="fixed w-6 h-6 rounded-full bg-purple-500 mix-blend-difference pointer-events-none z-50"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed w-12 h-12 rounded-full border pointer-events-none z-50 opacity-70"
        animate={{
          x: position.x - 24,
          y: position.y - 24,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.8,
        }}
      />
    </>
  )
}

export default CustomCursor
