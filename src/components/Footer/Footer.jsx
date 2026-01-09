import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"
import "./Footer.css"

export function Footer() {
  motion
  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        {/* LEFT */}
        <div className="footer-left">
          <h3>Kevin Widjaya</h3>
          <p>
            Building modern, interactive, and scalable digital experiences with
            clean code and thoughtful design.
          </p>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <h4>Navigation</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#journey">Journey</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h4>Follow Me</h4>
          <div className="footer-social">
            <a href="https://github.com/KevinWidjaya31" aria-label="GitHub">
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
            <a href="mailto:kevinwidjaya31@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </motion.div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Kevin Widjaya. All rights reserved.
      </div>
    </footer>
  )
}
