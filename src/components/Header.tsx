import type React from "react"

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="/icon.png" alt="logo de hel-ali haz click para regresar al inicio" />
            </div>
            <span className="text-xl font-semibold text-gray-800 font-[Orbitron]">HEL ALI</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-teal-600 transition-colors">
              Inicio
            </a>
            <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">
              Sobre Nosotros
            </a>
            <a href="#activities" className="text-gray-700 hover:text-teal-600 transition-colors">
              Activididades
            </a>
            <a href="#blog" className="text-gray-700 hover:text-teal-600 transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">
              Contacto
            </a>
            <button className="bg-pink-200 text-pink-800 hover:bg-pink-300 px-4 py-2 rounded-md transition-colors">
              Donar
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
