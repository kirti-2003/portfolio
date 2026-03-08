function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-24">

      <div className="max-w-6xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">

        <p>
          © {new Date().getFullYear()} Kirti. All rights reserved.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">

          <a
            href="https://github.com/kirti-2003/"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/kirti-anand-10553a289/"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:kirti.anand903@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>

        </div>

      </div>

    </footer>
  )
}

export default Footer