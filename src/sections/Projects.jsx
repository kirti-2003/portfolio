function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-8 py-28">

      <h2 className="text-3xl font-semibold mb-12">
        <span className="text-blue-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Sugamta */}
        <div className="bg-[#0f0f14] border border-gray-800 p-6 rounded-xl hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02] transition">

          <h3 className="text-xl font-semibold mb-2">
            Sugamta
          </h3>

          <p className="text-gray-400 mb-4">
            Financial management platform for tracking investments,
            EMI schedules, and document automation.
          </p>

          <p className="text-sm text-gray-500">
            React • FastAPI • PostgreSQL
          </p>

        </div>


        {/* AirLink */}
        <div className="bg-[#0f0f14] border border-gray-800 p-6 rounded-xl hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02] transition">

          <h3 className="text-xl font-semibold mb-2">
            AirLink – Airline Reservation System
          </h3>

          <p className="text-gray-400 mb-4">
            Desktop airline management system with booking,
            boarding pass generation, cancellation and billing.
          </p>

          <p className="text-sm text-gray-500">
            Java • Swing • MySQL • JDBC
          </p>

        </div>


        {/* Expense Tracker */}
        <div className="bg-[#0f0f14] border border-gray-800 p-6 rounded-xl hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02] transition">

          <h3 className="text-xl font-semibold mb-2">
            Personal Expense Tracker
          </h3>

          <p className="text-gray-400 mb-4">
            Expense management app with budgeting,
            financial goals and reporting.
          </p>

          <p className="text-sm text-gray-500">
            Java • Swing • MongoDB Atlas • Maven
          </p>

        </div>


        {/* CityBuddy */}
        <div className="bg-[#0f0f14] border border-gray-800 p-6 rounded-xl hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02] transition">

          <h3 className="text-xl font-semibold mb-2">
            CityBuddy
          </h3>

          <p className="text-gray-400 mb-4">
            Smart city discovery app helping newcomers
            find places and services within their budget.
          </p>

          <p className="text-sm text-gray-500">
            React • FastAPI • Tailwind • AI Tools
          </p>

        </div>

      </div>

    </section>
  )
}

export default Projects