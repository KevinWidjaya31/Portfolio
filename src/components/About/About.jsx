import { motion } from "framer-motion"
import {
  FaUser,
  FaLocationArrow,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa"
import "./About.css"
import aboutPict from "../../assets/about-me.webp"

const aboutItem = [
  {
    icon: <FaUser />,
    title: "NAME",
    description: "Kevin Widjaya",
  },
  {
    icon: <FaLocationArrow />,
    title: "LOCATION",
    description: "Kota Bekasi",
  },
  {
    icon: <FaGraduationCap />,
    title: "EDUCATION",
    description: "Informatika",
  },
  {
    icon: <FaEnvelope />,
    title: "EMAIL",
    description: "kevinwidjaya31@gmail.com",
  },
]

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
          <img
            src={aboutPict}
            alt="About me"
            className="about-image"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
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

          <div className="about-item">
            {aboutItem.map((about, index) => (
              <div key={index} className="about-card">
                <div className="about-icon">
                  <span>{about.icon}</span>
                </div>

                <div className="about-info">
                  <h4>{about.title}</h4>
                  <p>{about.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
