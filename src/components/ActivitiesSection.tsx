import type React from "react"

interface Activity {
  title: string
  description: string
  image: string
}

const ActivitiesSection: React.FC = () => {
  const activities: Activity[] = [
    {
      title: "Alcance Comunitario",
      description: "Involucrando a las comunidades locales para entender sus necesidades y proporcionar apoyo.",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
      title: "Capacitación en Habilidades",
      description: "Ofreciendo capacitación vocacional y programas de desarrollo de habilidades.",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
      title: "Ayuda de Emergencia",
      description: "Respondiendo a emergencias y proporcionando asistencia inmediata.",
      image:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
  ]

  return (
    <section className="py-16 px-30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Nuestras Actividades</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ActivitiesSection
