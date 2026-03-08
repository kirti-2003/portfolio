function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-12 py-6 text-white z-20">

      <h1 className="text-xl font-semibold tracking-wide">
        <span className="text-blue-400">Kirti</span>
      </h1>

      <div className="flex gap-10 text-sm text-gray-300">

        <a href="#about" className="hover:text-blue-400 transition">
          About
        </a>

        <a href="#projects" className="hover:text-blue-400 transition">
          Projects
        </a>

        <a href="#contact" className="hover:text-blue-400 transition">
          Contact
        </a>

      </div>

    </nav>
  )
}

export default Navbar