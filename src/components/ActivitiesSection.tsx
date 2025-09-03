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
        "https://live.staticflickr.com/2830/33673897180_0c400c14ca_b.jpg",
    },
    {
      title: "Capacitación en Habilidades",
      description: "Ofreciendo capacitación vocacional y programas de desarrollo de habilidades.",
      image:
        "https://live.staticflickr.com/2846/33217154454_18fe784c42_b.jpg",
    },
    {
      title: "Ayuda de Emergencia",
      description: "Respondiendo a emergencias y proporcionando asistencia inmediata.",
      image:
        "https://live.staticflickr.com/8894/17362014175_9c82e1cf40_b.jpg",
    },
  ]

  return (
    <section id="activities" className="py-16 px-30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-start">Nuestras Actividades</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-82">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl text-gray-800 mb-2">{activity.title}</h3>
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
