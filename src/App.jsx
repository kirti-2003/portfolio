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
      <main>
        <Hero />
        <About />
        <Projects />
        <FeaturedProject />
        <Skills />
        <Contact />
        <section id="blog" className="max-w-5xl mx-auto px-8 py-20 text-center">
          <p className="text-slate-600 text-sm">Blog — Coming soon</p>
        </section>
        <section id="faq" className="max-w-5xl mx-auto px-8 py-20 text-center">
          <p className="text-slate-600 text-sm">FAQ — Coming soon</p>
        </section>
      </main>
      <Footer />
    </>
  )
}



export default App