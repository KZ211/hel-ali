import type React from "react"
const HeroSection: React.FC = () => {
  return (
    <section className="flex items-center justify-center">
    <div className="relative h-[500px] w-[1024px] flex items-center justify-center text-white px-30">
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <img
          src="https://live.staticflickr.com/3938/33217485204_b3af3cbfa1_b.jpg"
          alt="Ancianos mirando hacia el frente"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 opacity-60 mt-20">
          Empoderando Comunidades,
          <br />
          Transformando Vidas
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Únete a nuestra misión para apoyar a las poblaciones vulnerables en Colombia. <br/>Tu donación puede hacer la
          diferencia.
        </p>
        <button className="bg-pink-200 text-pink-800 hover:bg-pink-300 px-8 py-3 rounded-md text-lg font-medium transition-colors">
          Donar Ahora
        </button>
      </div>
    </div>
    </section>
  )
}

export default HeroSection
