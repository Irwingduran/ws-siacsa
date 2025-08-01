import Image from "next/image"
import Link from "next/link"
import { Eye, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "Mini Split Inverter 12,000 BTU",
    brand: "Serenity",
    model: "42QHC012DS8HC",
    image: "/placeholder.svg?height=300&width=300",
    features: ["Inverter", "WiFi", "R-410A"],
    efficiency: "SEER 22",
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 2,
    name: "Sistema VRF Comercial",
    brand: "Serenity",
    model: "RXYQ-T8Y1B",
    rating: 5.0,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300",
    features: ["VRF", "Control Inteligente", "R-32"],
    efficiency: "SEER 20",
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 3,
    name: "Cassette 360° 24,000 BTU",
    brand: "Serenity",
    model: "CT24F-NM0",
    image: "/placeholder.svg?height=300&width=300",
    features: ["360°", "Dual Inverter", "Smart ThinQ"],
    efficiency: "SEER 19",
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 4,
    name: "Aire Central 3 Toneladas",
    brand: "Serenity",
    model: "4TTR3036A1000AA",
    image: "/placeholder.svg?height=300&width=300",
    features: ["Variable Speed", "ComfortLink", "R-410A"],
    efficiency: "SEER 18",
    isNew: true,
    isBestSeller: true,
  },
  {
    id: 5,
    name: "Mini Split 18,000 BTU",
    brand: "Serenity",
    model: "MSZ-FH18NA",
    image: "/placeholder.svg?height=300&width=300",
    features: ["Hyper-Heating", "i-see Sensor", "kumo cloud"],
    efficiency: "SEER 23",
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 6,
    name: "Piso Techo 36,000 BTU",
    brand: "Serenity",
    model: "YCJF36S41S",
    image: "/placeholder.svg?height=300&width=300",
    features: ["Piso/Techo", "Control Remoto", "R-410A"],
    efficiency: "SEER 16",
    isNew: false,
    isBestSeller: false,
  },
]

export default function ProductGrid() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Todos Nuestros Productos</h2>
            <p className="text-gray-600">Mostrando {products.length} de 300+ productos disponibles</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href="/products/product1"
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#EF7632] no-underline"
            >
              <div className="relative">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && <Badge className="bg-green-500 hover:bg-green-600">Nuevo</Badge>}
                  {product.isBestSeller && <Badge className="bg-[#EF7632] hover:bg-[#EF7632]">Más Vendido</Badge>}
                </div>

                {/* Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

              </div>

              <div className="p-6">
                <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{product.name}</h3>
                <div className="text-sm text-gray-600 mb-3">{product.model}</div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="default" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Efficiency */}
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium text-green-600">{product.efficiency}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-[#EF7632] hover:bg-[#EF7632]">
  <Eye className="h-4 w-4" />
  Ver Producto
</Button>           
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
        </div>
      </div>
    </section>
  )
}
