import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import "../Project/Project.css"

const projects = [
  {
    title: "Sign Language Recognition",
    desc: "Real-time sign language detection using ML.",
    image: "../profile.png",
    tech: ["Python", "OpenCV", "XGBoost"],
    code: "#",
    demo: "#",
  },
  {
    title: "AI Chatbot",
    desc: "AI-powered chatbot application.",
    image: "/images/project2.png",
    tech: ["React", "API", "AI"],
    code: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with React.",
    image: "/images/project3.png",
    tech: ["React", "Framer"],
    code: "#",
    demo: "#",
  },
  {
    title: "E-Commerce App",
    desc: "Modern e-commerce UI.",
    image: "/images/project4.png",
    tech: ["React", "Firebase"],
    code: "#",
    demo: "#",
  },
  {
    title: "Data Visualization",
    desc: "Charts & dashboards.",
    image: "/images/project5.png",
    tech: ["D3.js", "JS"],
    code: "#",
    demo: "#",
  },
  {
    title: "Mobile App UI",
    desc: "Mobile UI design prototype.",
    image: "/images/project6.png",
    tech: ["Figma"],
    code: "#",
    demo: "#",
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

export function Project() {
  motion
  return (
    <section id="projects" className="projects">
      <h2 className="title">Projects</h2>

      <div className="card-container">
        {projects.map((project, index) => (
          <motion.div
            className="card"
            key={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}>
            <img src={project.image} alt={project.title} />

            <div className="card-content">
              <h4>{project.title}</h4>
              <p>{project.desc}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="button-container">
                <a href={project.code} target="_blank" rel="noreferrer">
                  <button className="btn outline">
                    <FaGithub size={16} />
                    <span>Code</span>
                  </button>
                </a>

                <a href={project.demo} target="_blank" rel="noreferrer">
                  <button className="btn solid">
                    <FiExternalLink size={16} />
                    <span>Live Demo</span>
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
