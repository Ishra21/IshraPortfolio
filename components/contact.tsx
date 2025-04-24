"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Github, Send, Loader2 , CheckCircle} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { useTheme } from "next-themes"
import { useInView } from "react-intersection-observer"
import { sendEmail } from "@/app/actions"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { theme } = useTheme()
  const isDark = theme !== "light"

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")

  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (formStatus === "loading") return;
  
    setFormStatus("loading");
    setIsSubmitting(true);
  
    try {
      // Convert formData to FormData
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);
      
      const result = await sendEmail(form);
  
      if (result?.success) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        });
  
        setFormData({ name: "", email: "", message: "" });
        setFormStatus("success");
      } else {
        throw new Error("Email failed");
      }
    } catch (error) {
      console.error("Form error:", error);
      toast({
        title: "Error sending message",
        description: "There was a problem. Please try again.",
        variant: "destructive",
      });
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };
  
  const contactInfo = [
    { icon: Mail, text: "ishra6107@gmail.com", href: "mailto:ishra6107@gmail.com" },
    { icon: Phone, text: "+91 9669552957", href: "tel:+919669552957" },
    { icon: Linkedin, text: "Ishra Khanam", href: "https://www.linkedin.com/in/ishra-khanam/" },
    { icon: Github, text: "Ishra", href: "https://github.com/ishra21" },
  ]
  
  return (
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className={`text-center ${isDark ? "text-purple-200/80" : "text-purple-700/80"} max-w-2xl mx-auto mb-12`}
      >
        Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-purple-900"}`}>
            Contact Information
          </h3>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 ${isDark ? "text-purple-200 hover:text-purple-100" : "text-purple-700 hover:text-purple-900"} transition-colors`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <div
                  className={`w-12 h-12 rounded-full ${isDark ? "bg-purple-900/30 border border-purple-500/30" : "bg-purple-100 border border-purple-200"} flex items-center justify-center`}
                >
                  <item.icon className="h-5 w-5" />
                </div>
                <span>{item.text}</span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className={`mt-10 p-6 ${isDark ? "bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20" : "bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100"} rounded-xl`}
          >
            <p className={isDark ? "text-purple-200/90" : "text-purple-700"}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-purple-900"}`}>Send Me a Message</h3>

          <form onSubmit={handleSubmit} ref={formRef}  className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium ${isDark ? "text-purple-200" : "text-purple-700"} mb-1`}
              >
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`${isDark ? "bg-black/40 border-purple-500/30 focus:border-purple-500 text-white" : "bg-white border-purple-200 focus:border-purple-500 text-purple-900"}`}
                placeholder="Name"
                disabled={formStatus !== "idle"}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium ${isDark ? "text-purple-200" : "text-purple-700"} mb-1`}
              >
                Your Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`${isDark ? "bg-black/40 border-purple-500/30 focus:border-purple-500 text-white" : "bg-white border-purple-200 focus:border-purple-500 text-purple-900"}`}
                placeholder="email"
                disabled={formStatus !== "idle"}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium ${isDark ? "text-purple-200" : "text-purple-700"} mb-1`}
              >
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={`${isDark ? "bg-black/40 border-purple-500/30 focus:border-purple-500 text-white" : "bg-white border-purple-200 focus:border-purple-500 text-purple-900"} min-h-[150px]`}
                placeholder="Hello, I'd like to talk about..."
                disabled={formStatus !== "idle"}
              />
            </div>

            {/* <Button
              type="submit"
              disabled={isSubmitting}
              className={`w-full ${isDark ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"} text-white`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </span>
              )}
            </Button> */}

<Button
                type="submit"
                className={`w-full flex items-center justify-center ${
                  formStatus === "success"
                    ? "bg-green-600 hover:bg-green-700"
                    : formStatus === "error"
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-[#016B5F] hover:bg-[#015a50]"
                } transition-colors duration-300`}
                disabled={formStatus !== "idle"}
              >
                {formStatus === "loading" && (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                )}
                {formStatus === "success" && (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    <span>Message Sent!</span>
                  </>
                )}
                {formStatus === "error" && <span>Try Again</span>}
                {formStatus === "idle" && (
                  <>
                    <span>Send Message</span>
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

          </form>
        </motion.div>
      </div>
    </div>
  )
}
