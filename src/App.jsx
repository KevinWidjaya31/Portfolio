import "./App.css"
import { Navbar } from "./components/Navbar/Navbar"
import { Hero } from "./components/Hero/Hero"
import { About } from "./components/About/About"
import { Journey } from "./components/Journey/Journey"
import { Skills } from "./components/Skills/Skills"
import { Project } from "./components/Project/Project"
import { Contact } from "./components/Contact/Contact"
import { Footer } from "./components/Footer/Footer"
import { ToastProvider } from "./components/Toaster/Toaster"
import { useState } from "react"

function App() {
  const [isImageOpen, setIsImageOpen] = useState(false)
  return (
    <main>
      <div>
        <ToastProvider/>
        {!isImageOpen && <Navbar />}
        <Hero />
        <About />
        <Journey />
        <Skills setIsImageOpen={setIsImageOpen} />
        <Project />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App
