import type React from "react"

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 px-30 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre Nosotros</h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          Hel-Ali es una organización sin fines de lucro dedicada a mejorar las vidas de las poblaciones vulnerables en
          Colombia. A través de nuestras diversas iniciativas, nos esforzamos por crear un cambio positivo duradero y
          construir comunidades más fuertes. Creemos en el poder de la acción colectiva y el potencial de cada individuo
          para contribuir a un futuro mejor.
        </p>
      </div>
    </section>
  )
}

export default AboutSection;
