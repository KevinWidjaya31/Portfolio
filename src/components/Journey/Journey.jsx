import { motion, useScroll, useTransform } from "framer-motion"
import { FaGraduationCap } from "react-icons/fa"
import { FiBriefcase } from "react-icons/fi"
import { useRef } from "react"

import "./Journey.css"

const journeyData = [
  {
    type: "Academic",
    year: "2022 - Sekarang",
    title: "S1 Informatika",
    place: "Universitas Bunda Mulia",
    location: "Ancol, Jakarta Utara",
    desc: "Mahasiswa dengan fokus Software Engineering dan Artificial Intelligence.",
    tags: ["Algoritma & Struktur Data", "Kalkulus", "Matriks & Vektor"],
  },
  {
    type: "Academic",
    year: "2019 - 2022",
    title: "Teknik Komputer & Jaringan",
    place: "SMK Galajuara",
    location: "Kota Bekasi, Jawa Barat",
    desc: "Mahasiswa dengan fokus Software Engineering dan Artificial Intelligence.",
    tags: ["Algoritma & Struktur Data", "Kalkulus", "Matriks & Vektor"],
  },
  {
    type: "Experience",
    year: "2023",
    title: "Frontend Developer",
    place: "Freelance",
    location: "Remote",
    desc: "Mengerjakan berbagai project frontend menggunakan React dan fokus pada UI/UX.",
    tags: ["React", "CSS", "UI/UX"],
  },
]

export function Journey() {
  motion
  const timelineRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="journey" className="journey">
      <h2 className="section-title center">My Journey</h2>
      <p className="journey-subtitle">
        A timeline of my academic and professional milestones
      </p>

      <div className="timeline" ref={timelineRef}>
        {/* Animated Line */}
        <div className="timeline-line">
          <motion.span style={{ height: lineHeight }} />
        </div>

        {journeyData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            {/* DOT */}
            <motion.span
              className="timeline-dot"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}>
              {item.type === "Academic" ? <FaGraduationCap /> : <FiBriefcase />}
            </motion.span>

            {/* CARD */}
            <motion.div
              className="timeline-card"
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <div className="timeline-header">
                <h3>{item.title}</h3>
                <span className="year">{item.year}</span>
              </div>

              <p className="place">
                {item.place} · {item.location}
              </p>

              <p className="desc">{item.desc}</p>

              <div className="tags">
                {item.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
