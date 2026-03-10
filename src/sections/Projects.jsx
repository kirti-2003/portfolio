import FadeIn from "../components/FadeIn"

const projects = [
  {
    title: "Sugamta",
    desc: "Financial management platform for tracking investments, EMI schedules, and document automation.",
    stack: "React • FastAPI • PostgreSQL",
    accent: "from-cyan-500/20 to-teal-500/20",
    border: "border-cyan-500/20 hover:border-cyan-400/40",
    glow: "hover:shadow-cyan-500/10",
  },
  {
    title: "AirLink – Airline Reservation System",
    desc: "Desktop airline management system with booking, boarding pass generation, cancellation and billing.",
    stack: "Java • Swing • MySQL • JDBC",
    accent: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/20 hover:border-violet-400/40",
    glow: "hover:shadow-violet-500/10",
  },
  {
    title: "Personal Expense Tracker",
    desc: "Expense management app with budgeting, financial goals and reporting.",
    stack: "Java • Swing • MongoDB Atlas • Maven",
    accent: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/20 hover:border-pink-400/40",
    glow: "hover:shadow-pink-500/10",
  },
  {
    title: "CityBuddy",
    desc: "Smart city discovery app helping newcomers find places and services within their budget.",
    stack: "React • FastAPI • Tailwind • AI Tools",
    accent: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/20 hover:border-amber-400/40",
    glow: "hover:shadow-amber-500/10",
  },
]

function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-8 md:px-16 py-32">
      <FadeIn>
        <span className="inline-block text-sm font-medium text-cyan-400/90 mb-4 tracking-wider uppercase">
          Portfolio
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          Selected{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            projects
          </span>
        </h2>
      </FadeIn>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 80}>
            <div
              className={`block p-8 rounded-2xl bg-gradient-to-br ${p.accent} border ${p.border} backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${p.glow} group cursor-default`}
            >
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                {p.title}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{p.desc}</p>
              <p className="text-sm text-slate-500">{p.stack}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

export default Projects
