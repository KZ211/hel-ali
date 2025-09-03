import type React from "react"

interface Stat {
  number: string
  label: string
}

const StatsSection: React.FC = () => {
  const stats: Stat[] = [
    {
      number: "5,000+",
      label: "Personas Ayudadas",
    },
    {
      number: "1,200+",
      label: "Familias Apoyadas",
    },
    {
      number: "300+",
      label: "Voluntarios",
    },
  ]

  return (
    <section id="contact" className="py-16 px-30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Estadísticas Clave</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gray-100 rounded-lg p-8">
              <div className="text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
