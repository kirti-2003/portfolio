import { useState } from "react"


function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 pt-32 md:pt-0 gap-16 md:gap-24">
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row md:gap-20 items-center justify-center">
        {/* Left content block */}
        <div className="flex-1 order-2 md:order-1 space-y-6 md:space-y-8">
          <p className="font-script text-3xl md:text-4xl bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
            Kirti
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Software Developer building{" "}
            <span className="italic bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              full-stack
            </span>{" "}
            solutions
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Full-stack developer skilled in React, FastAPI, and Java. Building scalable applications,
            clean user interfaces, and reliable backend systems for real-world use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
            <a
              href="#contact"
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 text-cyan-200 px-6 py-3.5 rounded-xl font-medium transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] text-center"
            >
              <span className="relative z-10">Contact me</span>
            </a>
            <a
              href="#projects"
              className="group relative overflow-hidden bg-white text-black px-6 py-3.5 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:scale-[1.02] text-center"
            >
              View projects
            </a>
          </div>
        </div>

        {/* Right illustration area */}
        <div className="flex-1 w-full max-w-md mx-auto order-1 md:order-2 flex justify-center">
          <div
            className="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[520px] w-full transition-all duration-500 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(145deg, #1e1e2e 0%, #16161f 50%, #1a1a28 100%)",
              boxShadow: "0 0 60px -15px rgba(34, 211, 238, 0.15), 0 0 40px -20px rgba(167, 139, 250, 0.1)",
            }}
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h16v16H0V0zm16 16h16v16H16V16z' fill='%2322d3ee' fill-opacity='0.15'/%3E%3C/svg%3E")`,
              }}
            />
            {!imgError ? (
              <img
                src={`${process.env.PUBLIC_URL}/hero-illustration.png`}
                alt="Kirti"
                className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
                <div className="w-28 h-36 rounded-t-full bg-gradient-to-t from-cyan-900/40 to-violet-900/20" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
