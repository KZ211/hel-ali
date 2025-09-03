import type React from "react"
import { Twitter, Facebook, Instagram } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center bg-gray-800 text-white py-12">
      <div className="flex justify-center flex-wrap container max-w-6xl">
        <div className="flex justify-center w-full space-x-8 mb-10">
          <a href="#" className="hover:text-pink-200 transition-colors p-2">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-pink-200 transition-colors p-2">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-pink-200 transition-colors p-2">
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        <div className="text-center w-full text-gray-400 text-sm">© 2023 Hel-Ali. Todos los derechos reservados.</div>
      </div>
    </footer>
  )
}

export default Footer
