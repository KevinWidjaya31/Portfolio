import { useState } from "react"
import { motion } from "framer-motion"
import "../Navbar/Navbar.css"

export function Navbar() {
  const [activeLink, setActiveLink] = useState("#home")
  motion

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#journey", label: "My Journey" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
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
              onClick={() => setActiveLink(link.href)}>
              {link.label}
            </motion.a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
