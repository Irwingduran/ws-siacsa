import Image from "next/image"
import { ArrowRight, Download, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductHero() {
  return (
    <section className="relative py-28 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Catálogo de productos"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Catálogo de <span className="text-[#EF7632]">Productos</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Descubra nuestra amplia gama de equipos de climatización de las mejores marcas del mercado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-[#EF7632] hover:border-[#EF7632]">
                Explorar Productos <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#0066b2] text-white bg-[#0066b2]">
                <Download className="mr-2 h-5 w-5" />
                Catálogo PDF
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-[#EF7632]">300+</p>
                <p className="text-sm text-gray-300">Productos disponibles</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#EF7632]">15+</p>
                <p className="text-sm text-gray-300">Marcas reconocidas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#EF7632]">72h</p>
                <p className="text-sm text-gray-300">Entrega express</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Búsqueda Rápida</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de espacio</label>
                  <select className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white">
                    <option value="">Seleccionar...</option>
                    <option value="residential">Residencial</option>
                    <option value="commercial">Comercial</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Área (m²)</label>
                  <input
                    type="number"
                    placeholder="Ej: 25"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Presupuesto</label>
                  <select className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white">
                    <option value="">Seleccionar rango...</option>
                    <option value="low">$5,000 - $15,000</option>
                    <option value="medium">$15,000 - $30,000</option>
                    <option value="high">$30,000+</option>
                  </select>
                </div>
                <Button className="w-full bg-[#EF7632] hover:border-[#EF7632]">Encontrar Productos</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
