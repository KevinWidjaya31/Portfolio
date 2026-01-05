import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "./Skills.css"

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Vite",
  "Node.js",
  "Firebase",
  "Git",
  "Figma",
]

const certificates = [
  {
    title: "Frontend Web Development",
    issuer: "Dicoding",
    year: "2023",
  },
  {
    title: "React Developer",
    issuer: "Coursera",
    year: "2024",
  },
  {
    title: "UI/UX Design",
    issuer: "Google",
    year: "2024",
  },
]

export function Skills() {
  const [activeTab, setActiveTab] = useState("tech")
  motion

  return (
    <section id="skills" className="skills">
      <h2 className="section-title center">Skills</h2>

      {/* TOGGLE BUTTON */}
      <div className="skills-toggle">
        <button
          className={activeTab === "tech" ? "active" : ""}
          onClick={() => setActiveTab("tech")}>
          Tech Stack
        </button>
        <button
          className={activeTab === "cert" ? "active" : ""}
          onClick={() => setActiveTab("cert")}>
          Certificates
        </button>
      </div>

      {/* CONTENT */}
      <div className="skills-content">
        <AnimatePresence mode="wait">
          {activeTab === "tech" && (
            <motion.div
              key="tech"
              className="skills-box"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}>
              <div className="tech-grid">
                {techStack.map((tech, index) => (
                  <span key={index} className="tech-item">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "cert" && (
            <motion.div
              key="cert"
              className="skills-box"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}>
              <div className="certificate-list">
                {certificates.map((cert, index) => (
                  <div key={index} className="certificate-card">
                    <h4>{cert.title}</h4>
                    <p>{cert.issuer}</p>
                    <span>{cert.year}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
