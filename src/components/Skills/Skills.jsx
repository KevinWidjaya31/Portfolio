import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SiJavascript, SiNodedotjs, SiGithub, SiFigma } from "react-icons/si"
import { DiVisualstudio } from "react-icons/di"
import { FaReact, FaCode } from "react-icons/fa"

import "./Skills.css"

const tools = [
  {
    name: "Visual Studio Code",
    description: "Code Editor",
    icon: <DiVisualstudio />,
    color: "#007acc",
  },
  {
    name: "React",
    description: "Framework",
    icon: <FaReact />,
    color: "#61dafb",
  },
  {
    name: "JavaScript",
    description: "Language",
    icon: <SiJavascript />,
    color: "#f7df1e",
  },
  {
    name: "Node JS",
    description: "JavaScript Runtime",
    icon: <SiNodedotjs />,
    color: "#3c873a",
  },
  {
    name: "GitHub",
    description: "Repository",
    icon: <SiGithub />,
    color: "#111827",
  },
  {
    name: "Figma",
    description: "Design App",
    icon: <SiFigma />,
    color: "#a259ff",
  },
]

const certificates = [
  {
    image: "../cert-1.png",
    title: "Frontend Web Development",
    issuer: "Dicoding",
    date: "2023",
  },
  {
    image: "",
    title: "React Developer",
    issuer: "Coursera",
    date: "2024",
  },
  {
    image: "",
    title: "UI/UX Design",
    issuer: "Google",
    date: "2024",
  },
  {
    image: "",
    title: "Frontend Web Development",
    issuer: "Dicoding",
    date: "2023",
  },
  {
    image: "",
    title: "React Developer",
    issuer: "Coursera",
    date: "2024",
  },
  {
    image: "",
    title: "UI/UX Design",
    issuer: "Google",
    date: "2024",
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
          <span>
            <FaCode />
          </span>
          Tech Stack{" "}
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
                {tools.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="tech-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}>
                    <div
                      className="tech-icon"
                      style={{
                        color: tech.color,
                        background: `${tech.color}20`,
                      }}>
                      {tech.icon}
                    </div>

                    <div className="tech-info">
                      <h4>{tech.name}</h4>
                      <p>{tech.description}</p>
                    </div>
                  </motion.div>
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
                    <div className="certificate-image">
                      <img src={cert.image} alt={cert.title} />
                    </div>

                    <div className="certificate-content">
                      <h4>{cert.title}</h4>
                      <p>{cert.issuer}</p>

                      <span className="certificate-issued">Issued On: </span>
                      <span>{cert.date}</span>
                    </div>
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
