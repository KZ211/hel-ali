import type React from "react"

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-16 px-30 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Blog</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm text-gray-500 mb-2">Últimas Noticias</p>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Empoderando a las Mujeres a Través del Emprendimiento
            </h3>
            <p className="text-gray-600 mb-6">
              Aprende sobre nuestro nuevo programa que apoya a las mujeres emprendedoras en áreas rurales.
            </p>
            <a href="/blog/emprendimiento-mujeres" className="text-teal-600 hover:text-teal-700 font-medium">
              Leer Más
            </a>
          </div>

          <div className="relative h-64 rounded-lg overflow-hidden">
            <img
              src="https://live.staticflickr.com/2899/34058596995_72e93a6bb0_b.jpg"
              alt="Mujeres emprendedoras"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
