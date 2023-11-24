import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  return (
    <main className="main-container">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </main>
  )
}
