import { motion } from "framer-motion"
import "./About.css"

export function About() {
  motion
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* LEFT */}
        <motion.div
          className="about-left"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}>
          <img src="/about.png" alt="About me" className="about-image" />
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="about-right"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}>
          <h2 className="section-title">About Me</h2>

          <p className="about-text">
            I am a passionate Frontend Developer with a strong interest in
            building interactive, user-friendly, and visually appealing web
            applications. I enjoy transforming ideas into real products using
            modern web technologies.
          </p>

          <p className="about-text">
            With experience in React, modern CSS, and UI animation, I focus on
            creating clean code, smooth user experience, and responsive design.
          </p>

          <div className="about-info">
            <div>
              <h4>Experience</h4>
              <p>2+ Years</p>
            </div>
            <div>
              <h4>Projects</h4>
              <p>10+ Completed</p>
            </div>
            <div>
              <h4>Focus</h4>
              <p>Frontend & UI</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
