import Image from "next/image"
import { Star, Heart } from "lucide-react"

interface ProductCardProps {
  image: string
  title: string
  brand: string
  rating: number
}

export default function ProductCard({ image, title, brand, rating }: ProductCardProps) {
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
        <div className="flex items-center mb-3">
          <div className="flex items-center mr-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">{rating}</span>
        </div>
       
      </div>
    </div>
  )
}
