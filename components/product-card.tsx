import Image from "next/image"

interface ProductCardProps {
  image: string;
  title: string;
  brand: string;
  description?: string;
  onShowMore?: () => void;
}

export default function ProductCard({ image, title, brand, description, onShowMore }: ProductCardProps) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-red-200">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{brand}</div>
        <h3 className="font-medium text-lg mb-2 line-clamp-2">{title}</h3>
        {description && onShowMore && (
          <button
            className="mt-2 text-[#EF7632] hover:underline text-sm font-medium focus:outline-none"
            onClick={onShowMore}
          >
            Ver más
          </button>
        )}
      </div>
    </div>
  )
}
