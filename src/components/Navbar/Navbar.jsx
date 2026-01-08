import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  FaHome,
  FaRegUser,
  FaGraduationCap,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa"

import "../Navbar/Navbar.css"

export function Navbar() {
  motion
  const [activeLink, setActiveLink] = useState("#home")

  const navLinks = [
    { href: "#home", label: "Home", icon: <FaHome /> },
    { href: "#about", label: "About", icon: <FaRegUser /> },
    { href: "#journey", label: "My Journey", icon: <FaGraduationCap /> },
    { href: "#skills", label: "Skills", icon: <FaCode /> },
    { href: "#projects", label: "Projects", icon: <FaFolderOpen /> },
    { href: "#contact", label: "Contact", icon: <FaEnvelope /> },
  ]

  // 🔥 SCROLL SPY
  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`)
          }
        })
      },
      {
        rootMargin: "-50% 0px -50% 0px", // aktif di tengah layar
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <ul className="navbar-list">
        {navLinks.map((link) => (
          <li key={link.href}>
            <motion.a
              href={link.href}
              className={`navbar-link ${
                activeLink === link.href ? "active" : ""
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}>
              <span className="nav-icon">{link.icon}</span>
              <span className="nav-text">{link.label}</span>

              {/* 🔥 INDICATOR */}
              {activeLink === link.href && (
                <motion.span
                  className="nav-indicator"
                  layoutId="nav-indicator"
                />
              )}
            </motion.a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
