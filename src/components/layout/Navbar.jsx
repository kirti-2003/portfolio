import { useState, useEffect } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks = [
    { href: "#projects", label: "Portfolio" },
    { href: "#about", label: "About me" },
    { href: "#blog", label: "Blog" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <>
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-16 py-5 z-30 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <a
        href="#"
        className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
      >
        <span className="font-script text-2xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
          Kirti
        </span>
        <svg
          className="w-5 h-5 text-cyan-400/80 group-hover:text-cyan-300 transition-colors"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </a>

      <div className="hidden md:flex items-center gap-10 text-sm">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-slate-400 hover:text-cyan-300 transition-colors duration-300 relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400 group-hover:w-full transition-all duration-300" />
          </a>
        ))}
        <a
          href="#contact"
          className="bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 text-cyan-200 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20"
        >
          Contact me
        </a>
      </div>

      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>

    {menuOpen && (
      <div
        className="md:hidden fixed inset-0 z-20 bg-black/70 backdrop-blur-sm"
        onClick={() => setMenuOpen(false)}
        aria-hidden
      />
    )}

    <div
      className={`md:hidden fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-[#0f0f18] to-[#0a0a12] border-l border-white/10 z-30 transform transition-transform duration-300 ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col gap-6 pt-24 px-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-slate-400 hover:text-cyan-300 transition-colors duration-300 text-base"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 text-cyan-200 px-5 py-3 rounded-lg font-medium w-fit"
        >
          Contact me
        </a>
      </div>
    </div>
  </>
  )
}

export default Navbar
