import { motion } from "framer-motion"
import "./Contact.css"

export function Contact() {
  motion
  return (
    <section id="contact" className="contact">
      <h2 className="section-title center">Contact</h2>

      <motion.div
        className="container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <form
          action="https://formsubmit.io/send/kevinwidjaya005@gmail.com"
          method="POST">
          {/* Anti spam */}
          <input type="hidden" name="_captcha" value="false" />

          <label>Nama</label>
          <input type="text" name="name" placeholder="Your name" required />

          <label>Email</label>
          <input type="email" name="email" placeholder="Your email" required />

          <label>Pesan</label>
          <textarea name="message" placeholder="Message..." required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </motion.div>
    </section>
  )
}
