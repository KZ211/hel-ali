import type React from "react"
import { Home, GraduationCap, Heart } from "lucide-react"

interface Approach {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

const ApproachSection: React.FC = () => {
  const approaches: Approach[] = [
    {
      icon: Home,
      title: "Vivienda",
      description: "Proporcionando viviendas seguras y estables para familias necesitadas.",
    },
    {
      icon: GraduationCap,
      title: "Educación",
      description: "Apoyando programas educativos para niños y adultos.",
    },
    {
      icon: Heart,
      title: "Salud",
      description: "Asegurando el acceso a servicios de salud de calidad para todos.",
    },
  ]

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Nuestro Enfoque</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {approaches.map((approach, index) => {
            const IconComponent = approach.icon

            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex flex-col items-start">
                  <div className="mb-4">
                    <IconComponent className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{approach.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{approach.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ApproachSection
