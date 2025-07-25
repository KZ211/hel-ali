import type React from "react"

const CallToActionSection: React.FC = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Haz la Diferencia Hoy</h2>
        <button className="bg-pink-200 text-pink-800 hover:bg-pink-300 px-8 py-3 rounded-md text-lg font-medium transition-colors">
          Donar Ahora
        </button>
      </div>
    </section>
  )
}

export default CallToActionSection
