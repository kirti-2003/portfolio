import FadeIn from "../components/FadeIn"

function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-8 md:px-16 py-32">
      <FadeIn>
        <span className="inline-block text-sm font-medium text-cyan-400/90 mb-4 tracking-wider uppercase">
          About me
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Building digital experiences with{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            purpose
          </span>
        </h2>
        <div className="space-y-6 max-w-2xl">
          <p className="text-slate-400 text-lg leading-relaxed">
            I&apos;m a full-stack developer focused on building real-world systems and solving practical
            engineering problems. I enjoy designing clean user interfaces and building reliable backend
            architectures.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed">
            Recently I have been working on financial platforms, automation workflows and exploring
            AI-assisted development tools.
          </p>
        </div>
      </FadeIn>
    </section>
  )
}

export default About
