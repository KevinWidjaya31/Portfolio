import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { SiJavascript, SiNodedotjs, SiGithub, SiFigma } from "react-icons/si"
import { DiVisualstudio } from "react-icons/di"
import { FaReact, FaCode, FaCertificate } from "react-icons/fa"
import { GrCertificate } from "react-icons/gr"

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
    image: "../cert-web.png",
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding",
    date: "10 November 2023",
  },
  {
    image: "../cert-frontend.png",
    title: "Belajar Membuat Front-end Web untuk Pemula",
    issuer: "Dicoding",
    date: "15 November 2023",
  },
  {
    image: "../cert-software.png",
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    issuer: "Dicoding",
    date: "05 Juli 2023",
  },
  {
    image: "../cert-javascript.png",
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding",
    date: "29 Juli 2023",
  },
  {
    image: "../cert-logic.png",
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    issuer: "Dicoding",
    date: "04 Juli 2023",
  },
  {
    image: "../cert-googleCloud.png",
    title: "Belajar Dasar Google Cloud",
    issuer: "Dicoding",
    date: "11 Juli 2023",
  },
  {
    image: "../cert-awsCloud.png",
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    issuer: "Dicoding",
    date: "16 Oktober 2023",
  },
  {
    image: "../cert-git.png",
    title: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding",
    date: "07 Juli 2023",
  },
  {
    image: "../cert-sql.png",
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding",
    date: "25 Juli 2023",
  },
  {
    image: "../cert-menejemenProyek.png",
    title: "Belajar Dasar Manajemen Proyek",
    issuer: "Dicoding",
    date: "01 Juli 2023",
  },
]

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function Skills({ setIsImageOpen }) {
  motion
  const [activeTab, setActiveTab] = useState("tech")
  const [selectedImage, setSelectedImage] = useState(null)

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  })

  useEffect(() => {
    setIsImageOpen(!!selectedImage)
  }, [selectedImage])

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [selectedImage])

  // ESC close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <h2 className="section-title center">Skills</h2>

      {/* TOGGLE */}
      <div className="skills-toggle">
        <button
          className={activeTab === "tech" ? "active" : ""}
          onClick={() => setActiveTab("tech")}>
          <FaCode className="toggle-icon" />
          <span>Tech Stack</span>
        </button>

        <button
          className={activeTab === "cert" ? "active" : ""}
          onClick={() => setActiveTab("cert")}>
          <GrCertificate className="toggle-icon" />
          <span>Certificates</span>
        </button>
      </div>

      {/* CONTENT */}
      <div className="skills-content">
        <AnimatePresence mode="wait">
          {/* ===== TECH STACK ===== */}
          {activeTab === "tech" && (
            <motion.div
              key="tech"
              className="skills-box"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              <motion.div
                className="tech-grid"
                variants={gridVariants}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}>
                {tools.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="tech-card"
                    variants={cardVariants}>
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
              </motion.div>
            </motion.div>
          )}

          {/* ===== CERTIFICATES ===== */}
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
                    <div
                      className="certificate-image"
                      onClick={() => setSelectedImage(cert)}>
                      <img src={cert.image} alt={cert.title} />
                    </div>
                    <div className="certificate-content">
                      <h4>{cert.title}</h4> <p>{cert.issuer}</p>
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

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}>
            <motion.img
              src={selectedImage.image}
              alt={selectedImage.title}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            />

            <button className="close-btn">✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
