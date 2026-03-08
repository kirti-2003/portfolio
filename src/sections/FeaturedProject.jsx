function FeaturedProject() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-32">

      <p className="text-gray-500 mb-3">
        Featured Project
      </p>

      <h2 className="text-3xl font-semibold mb-10">
        Sugamta – Financial Management Platform
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE CONTENT */}
        <div>

          <p className="text-gray-400 leading-relaxed mb-6">
            Sugamta is a financial management platform designed to help
            agencies manage client investment plans, track EMI schedules,
            and automate document handling workflows.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            During development I worked on both frontend and backend
            architecture — implementing features like EMI schedule
            management, OCR-based document processing, and efficient
            database handling for financial records.
          </p>

          {/* KEY FEATURES */}
          <div className="space-y-3 text-gray-400">

            <p>• Automated EMI schedule generation</p>

            <p>• OCR-based cheque data extraction</p>

            <p>• Investment and insurance plan management</p>

            <p>• Client and joint-holder management</p>

            <p>• Secure backend APIs for financial workflows</p>

          </div>

          {/* TECH STACK */}
          <div className="mt-10">

            <p className="text-gray-500 mb-3">
              Tech Stack
            </p>

            <p className="text-gray-400">
              React • FastAPI • PostgreSQL • OCR APIs
            </p>

          </div>

        </div>


        {/* RIGHT SIDE VISUAL */}
        <div className="border border-gray-800 rounded-xl p-10 text-center text-gray-500">

          Project Screenshot

        </div>


      </div>

    </section>
  )
}

export default FeaturedProject