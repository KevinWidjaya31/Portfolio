import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
  FaCloudDownloadAlt,
} from "react-icons/fa"
import "./Hero.css"
import profilePict from "../../assets/about-me.webp"

const interests = ["Website Developer", "Mobile Developer", "AI Engineer"]

export function Hero() {
  motion
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = interests[index]
    const speed = isDeleting ? 50 : 120

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      )

      // selesai mengetik
      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000)
      }

      // selesai menghapus
      if (isDeleting && text === "") {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % interests.length)
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, index])

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        {/* LEFT */}
        <motion.div
          className="hero-left"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <h1 className="hero-status">Student @Universitas Bunda Mulia</h1>
          <h1 className="hero-name">HI, I'm Kevin Widjaya</h1>

          {/* TYPING TEXT */}
          <h2 className="hero-title typing">
            and I’m a <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h2>

          <p className="hero-desc">
            A last-year Informatics student at Universitas Bunda Mulia, I am
            passionate about creating modern, efficient, and user-centered
            digital solutions while continuously improving my technical and
            problem-solving skills.
          </p>

          <div className="hero-actions">
            <a href="/cv.pdf" className="btn primary" download>
              <span>Dowload CV</span>
              <FaCloudDownloadAlt />
            </a>
            <a href="#projects" className="btn outline">
              <span>View Project</span>
              <FaArrowRight />
            </a>
          </div>

          <div className="hero-social">
            <span className="social-label">Follow me:</span>
            <a href="https://github.com/KevinWidjaya31" aria-label="Github">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-widjaya/"
              aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/kevinwidjaya31_/"
              aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="hero-right"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <img
            src={profilePict}
            alt="Profile"
            className="hero-image"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
