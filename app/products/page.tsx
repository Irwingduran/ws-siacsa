import Image from "next/image"
import Link from "next/link"
import { Search, Filter, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectItem } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { productCategories, sectionOneProducts, sectionTwoProducts, sectionThreeProducts } from "@/data/products"

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="bg-[url('/img/img2.jpg')] bg-cover bg-center py-60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Nuestros Productos</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Descubre nuestra amplia gama de soluciones en climatización para hogares y negocios.
          </p>
        </div>
      </div>

      {/* Filtros y Búsqueda */}
      <section className="py-8 px-4 md:px-8 lg:px-16 bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full">
              <div className="relative flex-1 max-w-2xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Buscar productos..." 
                  className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-[#EF7632] focus:ring-[#EF7632]" 
                />
              </div>
              <Select defaultValue="">
                <SelectItem value="">Todas las categorías</SelectItem>
                {productCategories.map(category => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
              <Button variant="outline" size="sm" className="hidden sm:flex border-gray-300 hover:bg-gray-50">
                <Grid className="h-4 w-4 mr-2" />
                Cuadrícula
              </Button>
              <Button variant="outline" size="sm" className="hidden sm:flex border-gray-300 hover:bg-gray-50">
                <List className="h-4 w-4 mr-2" />
                Lista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Section One - Expansion Directa*/}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="py-8" id="expansion-directa">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Expansión Directa</h2>
              <p className="mt-2 text-lg text-gray-600">La mejor tecnología del mercado</p>
            </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sectionOneProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {product.isNew && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="success" className="text-xs">
                        Nuevo
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900 line-clamp-2 h-14">{product.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{product.brand} - {product.model}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2 h-10">{product.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <Link 
                      href={`/products/${product.id}`}
                      className="text-sm font-medium text-[#EF7632] hover:text-[#d86528] transition-colors"
                    >
                      Ver detalles →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Product Grid Section Two - Agua Helada*/}
       <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
            <div className="py-8" id="agua-helada">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Agua Helada</h2>
              <p className="mt-2 text-lg text-gray-600">La mejor tecnología del mercado</p>
            </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sectionTwoProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {product.isNew && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="success" className="text-xs">
                        Nuevo
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900 line-clamp-2 h-14">{product.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{product.brand} - {product.model}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2 h-10">{product.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <Link 
                      href={`/products/${product.id}`}
                      className="text-sm font-medium text-[#EF7632] hover:text-[#d86528] transition-colors"
                    >
                      Ver detalles →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Product Grid Section Three - VRF*/}
       <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
            <div className="py-8" id="vrf">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">VRF</h2>
              <p className="mt-2 text-lg text-gray-600">La mejor tecnología del mercado</p>
            </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sectionThreeProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {product.isNew && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="success" className="text-xs">
                        Nuevo
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900 line-clamp-2 h-14">{product.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{product.brand} - {product.model}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2 h-10">{product.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <Link 
                      href={`/products/${product.id}`}
                      className="text-sm font-medium text-[#EF7632] hover:text-[#d86528] transition-colors"
                    >
                      Ver detalles →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Product Grid Section Four - Herramientas y Controles*/}
       <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
            <div className="py-8" id="herramientas-controles">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Herramientas y Controles</h2>
              <p className="mt-2 text-lg text-gray-600">La mejor tecnología del mercado</p>
            </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sectionThreeProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {product.isNew && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="success" className="text-xs">
                        Nuevo
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900 line-clamp-2 h-14">{product.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{product.brand} - {product.model}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2 h-10">{product.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <Link 
                      href={`/products/${product.id}`}
                      className="text-sm font-medium text-[#EF7632] hover:text-[#d86528] transition-colors"
                    >
                      Ver detalles →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
