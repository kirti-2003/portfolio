function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-32">

      <h1 className="text-5xl font-bold leading-tight">
        Hi, I'm Kirti
      </h1>

      <p className="mt-6 text-gray-400 max-w-xl text-lg">
        Full-stack developer building real-world systems and clean web experiences.
      </p>

      <div className="mt-10 flex gap-4">

        <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
          View Projects
        </button>

        <button className="border border-gray-700 px-6 py-3 rounded-lg hover:border-gray-500 transition">
          GitHub
        </button>

      </div>

    </section>
  )
}

export default Hero