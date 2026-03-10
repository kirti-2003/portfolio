import FadeIn from "../components/FadeIn"

/* Use full static class names so Tailwind IntelliSense can resolve them */
const skills = [
  { name: "React", className: "bg-gradient-to-r from-cyan-500/20 to-cyan-600/10 border border-cyan-500/30" },
  { name: "JavaScript", className: "bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-500/30" },
  { name: "Tailwind CSS", className: "bg-gradient-to-r from-sky-500/20 to-sky-600/10 border border-sky-500/30" },
  { name: "FastAPI", className: "bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30" },
  { name: "PostgreSQL", className: "bg-gradient-to-r from-blue-500/20 to-blue-600/10 border border-blue-500/30" },
  { name: "Git", className: "bg-gradient-to-r from-orange-500/20 to-orange-600/10 border border-orange-500/30" },
]

function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-8 md:px-16 py-32">
      <FadeIn>
        <span className="inline-block text-sm font-medium text-cyan-400/90 mb-4 tracking-wider uppercase">
          Skills
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          Tools &{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            technologies
          </span>
        </h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((s) => (
            <span
              key={s.name}
              className={`inline-flex items-center px-5 py-2.5 rounded-xl text-slate-300 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${s.className}`}
            >
              {s.name}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}

export default Skills
