import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"
import { toast } from "react-hot-toast"
import "./Contact.css"

export function Contact() {
  motion
  const formRef = useRef()
  const [loading, setLoading] = useState(false)

   const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Pesan berhasil dikirim 🚀", {
          icon: "📨",
        })
        formRef.current.reset()
        setLoading(false)
      })
      .catch((error) => {
        toast.error("Pesan gagal dikirim ❌")
        console.error(error)
        setLoading(false)
      })
  }

  return (
    <section id="contact" className="contact">
      <h2 className="section-title center">Contact</h2>

      <motion.div
        className="container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <form ref={formRef} onSubmit={handleSubmit}>
          <label>Nama</label>
          <input type="text" name="name" placeholder="Your name" required />

          <label>Email</label>
          <input type="email" name="email" placeholder="Your email" required />

          <label>Pesan</label>
          <textarea name="message" placeholder="Message..." required />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  )
}
