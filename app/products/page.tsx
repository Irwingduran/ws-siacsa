import Image from "next/image"
import Link from "next/link"
import { Search, Filter, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectItem } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import ProductHero from "@/components/product-hero"
import ProductGrid from "@/components/product-grid"
import Footer from "@/components/footer"

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ProductHero />

      {/* Filtros y Búsqueda */}
      <section className="py-8 px-4 md:px-8 lg:px-16 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input placeholder="Buscar productos..." className="pl-10 pr-4 py-2 w-full" />
              </div>
              <Select defaultValue="">
  <SelectItem value="">Categoría</SelectItem>
  <SelectItem value="all">Todas las categorías</SelectItem>
  <SelectItem value="mini-split">Mini Split</SelectItem>
  <SelectItem value="central">Aire Central</SelectItem>
  <SelectItem value="vrf">Sistemas VRF</SelectItem>
  <SelectItem value="cassette">Cassette</SelectItem>
  <SelectItem value="piso-techo">Piso Techo</SelectItem>
</Select>
              <Select defaultValue="">
  <SelectItem value="">Marca</SelectItem>
  <SelectItem value="all">Todas las marcas</SelectItem>
  <SelectItem value="carrier">Carrier</SelectItem>
  <SelectItem value="trane">Trane</SelectItem>
  <SelectItem value="daikin">Daikin</SelectItem>
  <SelectItem value="lg">LG</SelectItem>
  <SelectItem value="mitsubishi">Mitsubishi</SelectItem>
</Select>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
              <Button variant="outline" size="sm">
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías Destacadas */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Categorías de Productos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/products" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FFE8D9]">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Mini Split" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Mini Split</h3>
                <p className="text-gray-600 text-sm mb-4">Ideales para espacios residenciales y oficinas pequeñas</p>
                <Badge variant="secondary">120+ productos</Badge>
              </div>
            </Link>

            <Link href="/products" className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FFE8D9]">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Aire Central" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Aire Central</h3>
                <p className="text-gray-600 text-sm mb-4">Sistemas completos para casas y edificios</p>
                <Badge variant="secondary">85+ productos</Badge>
              </div>
            </Link>

            <Link href="/products" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FFE8D9]">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Sistemas VRF" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Sistemas VRF</h3>
                <p className="text-gray-600 text-sm mb-4">Tecnología avanzada para proyectos comerciales</p>
                <Badge variant="secondary">45+ productos</Badge>
              </div>
            </Link>

            <Link href="/products" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FFE8D9]">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Cassette" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Cassette</h3>
                <p className="text-gray-600 text-sm mb-4">Distribución uniforme para techos suspendidos</p>
                <Badge variant="secondary">60+ productos</Badge>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Grid de Productos */}
      <ProductGrid />
 
<section>
    <Footer/>
</section>

    </main>
  )
}
