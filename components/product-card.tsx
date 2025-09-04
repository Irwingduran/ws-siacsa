import Image from "next/image"
import { useState } from "react"

interface ProductCardProps {
  images?: string[]; // Opcional para mantener compatibilidad
  image?: string; // Mantener compatibilidad con código existente
  detailImage?: string; // Nueva imagen de detalle
  title: string;
  brand: string;
  description?: string;
  onShowMore?: () => void;
  isNew?: boolean;
}

export default function ProductCard({ images, image, detailImage, title, brand, description, onShowMore, isNew }: ProductCardProps) {
  // Validar y normalizar el array de imágenes
  // Si se pasa 'images', usarlo; si no, crear array con 'image' y 'detailImage'; si no hay ninguno, usar placeholder
  const validImages = (() => {
    if (Array.isArray(images) && images.length > 0) {
      return images;
    }
    const imageArray = [];
    if (typeof image === 'string' && image.length > 0) {
      imageArray.push(image);
    }
    if (typeof detailImage === 'string' && detailImage.length > 0) {
      imageArray.push(detailImage);
    }
    return imageArray.length > 0 ? imageArray : ["/placeholder.svg"];
  })();
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % validImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-300 relative">
      {/* Badge de Nuevo */}
      {isNew && (
        <div className="absolute top-2 right-2 z-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
          NUEVO
        </div>
      )}
      
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Imagen principal */}
        <Image
          src={validImages[currentImageIndex] || "/placeholder.svg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain transition-transform duration-500 group-hover:scale-110"
          priority={false}
        />
        
        {/* Indicador de múltiples imágenes */}
        {validImages.length > 1 && (
          <div className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 rounded-lg text-xs flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            {validImages.length} fotos
          </div>
        )}
        
        {/* Controles de navegación (solo si hay más de una imagen) */}
        {validImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
            >
              →
            </button>
            
            {/* Indicadores de imagen */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {validImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
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