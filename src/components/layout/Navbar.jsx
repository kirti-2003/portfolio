function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">

      <h1 className="text-lg font-semibold">
        Kirti
      </h1>

      <div className="flex gap-8 text-sm text-gray-400">
        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </div>

    </nav>
  )
}

export default Navbar