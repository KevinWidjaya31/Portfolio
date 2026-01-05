import "./App.css"
import { Navbar } from "./components/Navbar/Navbar"
import { Hero } from "./components/Hero/Hero"
import { About } from "./components/About/About"
import { Journey } from "./components/Journey/Journey"
import { Skills } from "./components/Skills/Skills"
import { Project } from "./components/Project/Project"
import { Contact } from "./components/Contact/Contact"

function App() {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Project />
        <Contact />
      </div>
    </main>
  )
}

export default App
