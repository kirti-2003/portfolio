import FadeIn from "../components/FadeIn"

function FeaturedProject() {
  const features = [
    "Automated EMI schedule generation",
    "OCR-based cheque data extraction",
    "Investment and insurance plan management",
    "Client and joint-holder management",
    "Secure backend APIs for financial workflows",
  ]

  return (
    <section className="max-w-5xl mx-auto px-8 md:px-16 py-32">
      <FadeIn>
        <span className="inline-block text-sm font-medium text-violet-400/90 mb-4 tracking-wider uppercase">
          Featured Project
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          Sugamta –{" "}
          <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            Financial Management Platform
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-slate-400 text-lg leading-relaxed">
              Sugamta is a financial management platform designed to help agencies manage client
              investment plans, track EMI schedules, and automate document handling workflows.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              During development I worked on both frontend and backend architecture — implementing
              features like EMI schedule management, OCR-based document processing, and efficient
              database handling for financial records.
            </p>

            <div className="space-y-4">
              <p className="text-sm font-medium text-slate-300 uppercase tracking-wider">
                Key Features
              </p>
              <ul className="space-y-3">
                {features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-300 uppercase tracking-wider mb-2">
                Tech Stack
              </p>
              <p className="text-slate-400">React • FastAPI • PostgreSQL • OCR APIs</p>
            </div>
          </div>

          <div
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 p-12 flex items-center justify-center min-h-[300px] transition-all duration-300 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5"
          >
            <span className="text-slate-600 text-sm">Project Screenshot</span>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

export default FeaturedProject
