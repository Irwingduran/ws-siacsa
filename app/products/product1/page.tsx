import Link from "next/link"
import { ArrowLeft, Share2, Heart, ShoppingCart, Phone, MessageCircle } from "lucide-react"
import Badge from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Tabs from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import ProductGallery from "@/components/product-gallery"
import ProductSpecs from "@/components/product-specs"
import ProductQuote from "@/components/product-quote"
import Footer from "@/components/footer";

// Datos del producto (en una app real vendría de una API)
const product = {
  id: 1,
  name: "Mini Split Inverter 12,000 BTU",
  brand: "Carrier",
  model: "42QHC012DS8HC",
  sku: "CAR-42QHC012DS8HC",
  price: 12499,
  originalPrice: 14999,
  availability: "En stock",
  deliveryTime: "2-3 días hábiles",
  warranty: "10 años compresor, 5 años partes",
  isNew: true,
  isBestSeller: false,
  images: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ],
  description:
    "El Mini Split Inverter Carrier 42QHC012DS8HC es la solución perfecta para climatizar espacios de hasta 35m². Con tecnología inverter de última generación, ofrece máxima eficiencia energética y control preciso de temperatura.",
  features: [
    "Tecnología Inverter para máximo ahorro energético",
    "Control WiFi integrado con app móvil",
    "Filtro de aire de alta eficiencia",
    "Función de auto-limpieza",
    "Modo sleep inteligente",
    "Refrigerante ecológico R-410A",
    "Compresor rotativo de alta eficiencia",
    "Control remoto con pantalla LCD",
  ],
  specifications: {
    capacity: "12,000 BTU/h",
    seer: "22",
    voltage: "220V / 60Hz",
    refrigerant: "R-410A",
    dimensions: {
      indoor: "80 x 29 x 19 cm",
      outdoor: "77 x 54 x 32 cm",
    },
    weight: {
      indoor: "9.5 kg",
      outdoor: "32 kg",
    },
    coverage: "25-35 m²",
    noiseLevel: "19 dB(A)",
    energyClass: "A+++",
  },
}

export default function ProductPage() {

  return (
    <main className="flex min-h-screen flex-col py-26 bg-gradient-to-r from-gray-900 to-gray-700">
      <Navbar />

      {/* Producto Principal */}
      <section className="py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <Button variant="ghost" className="p-0 h-auto text-white" asChild>
              <Link href="/products">
                <ArrowLeft className="h-4 w-4 mr-2 text-white" />
                Volver al catálogo
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Galería de Imágenes */}
            <div>
              <ProductGallery images={product.images} productName={product.name} />
            </div>

            {/* Información del Producto */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                {product.isNew && <Badge className="bg-green-500">Nuevo</Badge>}
                {product.isBestSeller && <Badge className="bg-[#EF7632]">Más Vendido</Badge>}
                <Badge variant="default">{product.availability}</Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-lg text-white">{product.brand}</span>
                <span className="text-sm text-white">Modelo: {product.model}</span>
                <span className="text-sm text-white">SKU: {product.sku}</span>
              </div>

              {/* Precio */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-4xl font-bold text-white">${product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-white line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                {product.originalPrice && (
                  <div className="flex items-center gap-2">
                    <Badge variant="success">
                      Ahorra ${(product.originalPrice - product.price).toLocaleString()}
                    </Badge>
                    <span className="text-sm text-white">
                      ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% de
                      descuento)
                    </span>
                  </div>
                )}
              </div>

              {/* Descripción */}
              <p className="text-white mb-6 leading-relaxed">{product.description}</p>

              {/* Características Principales */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4 text-white">Características Principales</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.features.slice(0, 6).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#EF7632] rounded-full"></div>
                      <span className="text-sm text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Información de Entrega */}
              <div className="bg-gray-50 rounded-lg p-4 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-1">Tiempo de entrega</h4>
                    <p className="text-sm text-gray-600">{product.deliveryTime}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Garantía</h4>
                    <p className="text-sm text-gray-600">{product.warranty}</p>
                  </div>
                </div>
              </div>

              {/* Acciones */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Button size="lg" className="flex-1 bg-[#EF7632]">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Solicitar Cotización
                  </Button>
                  <Button size="lg" variant="outline">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex gap-3">
                  <Button size="lg" variant="outline" className="flex-1">
                    <Phone className="h-5 w-5 mr-2" />
                    Llamar Ahora
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs de Información Detallada */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Tabs
            className="w-full"
            tabs={[
              {
                label: 'Especificaciones',
                content: <ProductSpecs specifications={product.specifications} />
              },
              {
                label: 'Instalación',
                content: (
                  <div className="bg-white rounded-lg p-8">
                    <h3 className="text-2xl font-bold mb-6">Información de Instalación</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-bold mb-4">Requisitos de Instalación</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#EF7632] rounded-full mt-2"></div>
                            <span>Alimentación eléctrica 220V dedicada</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[#EF7632] rounded-full mt-2"></div>
                            <span>Espacio mínimo de 15cm alrededor de la unidad exterior</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                label: 'Reseñas',
                content: (
                  <div className="bg-white rounded-lg p-8">
                    <h3 className="text-2xl font-bold mb-6">Reseñas</h3>
                    <p>¡Próximamente!</p>
                  </div>
                )
              },
              
            ]}
          />
        </div>

        {/* Formulario de Cotización */}
        <ProductQuote product={product} />


      </section>
      <Footer/>
    </main>
    
  )
}
