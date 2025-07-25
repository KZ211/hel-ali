import type React from "react"
import { Twitter, Facebook, Instagram } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="/sobre-nosotros" className="hover:text-gray-300 transition-colors">
              Sobre Nosotros
            </a>
          </div>
          <div>
            <a href="/programas" className="hover:text-gray-300 transition-colors">
              Programas
            </a>
          </div>
          <div>
            <a href="/blog" className="hover:text-gray-300 transition-colors">
              Blog
            </a>
          </div>
          <div>
            <a href="/contacto" className="hover:text-gray-300 transition-colors">
              Contacto
            </a>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        <div className="text-center text-gray-400 text-sm">© 2023 Hel-Ali. Todos los derechos reservados.</div>
      </div>
    </footer>
  )
}

export default Footer
