import { motion } from "framer-motion"
import { FaGraduationCap, FaBriefcase } from "react-icons/fa"
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
  return (
    <section id="journey" className="journey">
      <h2 className="section-title center">My Journey</h2>

      <div className="timeline">
        {journeyData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            {/* DOT WITH ICON */}
            <motion.span
              className="timeline-dot"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}>
              {item.type === "Academic" ? <FaGraduationCap /> : <FaBriefcase />}
            </motion.span>

            <motion.div
              className="timeline-card"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
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
