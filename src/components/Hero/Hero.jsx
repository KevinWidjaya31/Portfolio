import { motion } from "framer-motion"
import "./Hero.css"

export function Hero() {
  motion
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
          <h1 className="hero-name">
            Kevin <span>Widjaya</span>
          </h1>

          <h2 className="hero-title">Frontend Developer</h2>

          <p className="hero-desc">
            I build modern, interactive, and performant web applications with
            React and modern UI technologies.
          </p>

          <div className="hero-actions">
            <a href="/cv.pdf" className="btn primary" download>
              Download CV
            </a>
            <a href="#contact" className="btn outline">
              Contact
            </a>
          </div>

          <div className="hero-social">
            <a href="#" aria-label="Github">
              GitHub
            </a>
            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="#" aria-label="Instagram">
              Instagram
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="hero-right"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <img src="/profile.png" alt="Profile" className="hero-image" />
        </motion.div>
      </motion.div>
    </section>
  )
}
