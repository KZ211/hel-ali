import type React from "react"

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-600 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">♦</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">Hel-Ali</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-teal-600 transition-colors">
              Inicio
            </a>
            <a href="/sobre-nosotros" className="text-gray-700 hover:text-teal-600 transition-colors">
              Sobre Nosotros
            </a>
            <a href="/programas" className="text-gray-700 hover:text-teal-600 transition-colors">
              Programas
            </a>
            <a href="/blog" className="text-gray-700 hover:text-teal-600 transition-colors">
              Blog
            </a>
            <a href="/contacto" className="text-gray-700 hover:text-teal-600 transition-colors">
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
