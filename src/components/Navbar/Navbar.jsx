import { useState } from "react"
import { motion } from "framer-motion"
import {
  FaHome,
  FaRegUser,
  FaRoute,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa"

import "../Navbar/Navbar.css"

export function Navbar() {
  const [activeLink, setActiveLink] = useState("#home")
  motion

  const navLinks = [
    { href: "#home", label: "Home", icon: <FaHome /> },
    { href: "#about", label: "About", icon: <FaRegUser /> },
    { href: "#journey", label: "My Journey", icon: <FaRoute /> },
    { href: "#skills", label: "Skills", icon: <FaCode /> },
    { href: "#projects", label: "Projects", icon: <FaFolderOpen /> },
    { href: "#contact", label: "Contact", icon: <FaEnvelope /> },
  ]

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
              onClick={() => setActiveLink(link.href)}
              whileHover={{ y: -2 }}>
              <span className="nav-icon">{link.icon}</span>
              <span className="nav-text">{link.label}</span>
            </motion.a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
