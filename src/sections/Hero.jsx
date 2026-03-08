import heroBg from "../assets/images/hero.png"

function Hero() {
  return (
    <section
      className="relative w-screen min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-blue-400">Kirti</span>
        </h1>

        <p className="text-gray-300 text-lg mb-8">
          Full-stack developer building real-world systems,
          scalable applications and clean digital experiences.
        </p>

        <div className="flex justify-center gap-4">

          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition font-medium"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="border border-gray-300 px-6 py-3 rounded-lg hover:border-blue-400 hover:text-blue-400 transition"
          >
            Hire Me
          </a>

        </div>

      </div>
    </section>
  )
}

export default Hero