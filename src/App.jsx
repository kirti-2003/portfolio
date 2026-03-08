import Navbar from "./components/layout/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"
import FeaturedProject from "./sections/FeaturedProject"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <FeaturedProject />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}



export default App