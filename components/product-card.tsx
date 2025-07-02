import Image from "next/image"
import { Heart } from "lucide-react"

interface ProductCardProps {
  image: string
  title: string
  brand: string
}

export default function ProductCard({ image, title, brand }: ProductCardProps) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-red-200">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-red-50">
            <Heart className="h-5 w-5 text-gray-500 hover:text-[#EF7632]" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{brand}</div>
        <h3 className="font-medium text-lg mb-2 line-clamp-2">{title}</h3>
      </div>
    </div>
  )
}
