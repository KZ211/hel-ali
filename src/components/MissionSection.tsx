import type React from "react"

const MissionSection: React.FC = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Misión, Visión y Valores</h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          En Hel-Ali, nuestra misión es empoderar a las comunidades vulnerables en Colombia proporcionando recursos
          esenciales y apoyo. Visualizamos un futuro donde cada persona tenga la oportunidad de prosperar, sin importar
          sus circunstancias. Nuestros valores fundamentales incluyen la compasión, la integridad y la colaboración,
          guiando nuestras acciones y asegurando que tengamos un impacto significativo.
        </p>
      </div>
    </section>
  )
}

export default MissionSection
