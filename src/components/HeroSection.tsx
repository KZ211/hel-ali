import type React from "react"

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-white px-6">
      <div className="absolute inset-0 bg-teal-700 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=500&q=80"
          alt="Personas trabajando juntas en comunidad"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-teal-800/60" />
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empoderando Comunidades,
          <br />
          Transformando Vidas
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Únete a nuestra misión para apoyar a las poblaciones vulnerables en Colombia. Tu donación puede hacer la
          diferencia.
        </p>
        <button className="bg-pink-200 text-pink-800 hover:bg-pink-300 px-8 py-3 rounded-md text-lg font-medium transition-colors">
          Donar Ahora
        </button>
      </div>
    </section>
  )
}

export default HeroSection
