import FadeIn from "../components/FadeIn"

function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-8 md:px-16 py-32">
      <FadeIn>
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-sm font-medium text-cyan-400/90 mb-4 tracking-wider uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s work{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              together
            </span>
          </h2>
          <p className="text-slate-400 text-lg mb-12">
            If you&apos;d like to collaborate or discuss a project, feel free to reach out.
          </p>
          <a
            href="mailto:kirti.anand903@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
          >
            Send Email
          </a>
        </div>
      </FadeIn>
    </section>
  )
}

export default Contact
