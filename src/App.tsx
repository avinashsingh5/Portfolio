import { Navbar } from './components/Navbar'
import { Background } from './components/Background'
import { CustomCursor } from './components/CustomCursor'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Education } from './sections/Education'
import { Certificates } from './sections/Certificates'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="relative">
      <Background />
      <Navbar />
      <CustomCursor />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
