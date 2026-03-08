function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-8 py-28 text-center">

      <h2 className="text-3xl font-semibold mb-6">
        Contact
      </h2>

      <p className="text-gray-400 mb-8">
        If you'd like to collaborate or discuss a project,
        feel free to reach out.
      </p>

      <a
        href="mailto:youremail@example.com"
        className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
      >
        Send Email
      </a>

    </section>
  )
}

export default Contact