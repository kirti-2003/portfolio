function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <p className="text-center text-xs tracking-[0.25em] uppercase text-slate-500">
        Portfolio
      </p>
      <p className="text-center text-slate-600 text-sm mt-2">
        © {new Date().getFullYear()} Kirti
      </p>
    </footer>
  )
}

export default Footer
