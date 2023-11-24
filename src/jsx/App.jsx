import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Footer from './sections/Footer'

export default function App() {
  return (
    <main className="main-container">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </main>
  )
}
