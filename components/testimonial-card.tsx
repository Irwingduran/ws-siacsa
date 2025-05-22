import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
  rating: number
}

export default function TestimonialCard({ quote, author, company, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-red-200">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-gray-500 text-sm">{company}</p>
      </div>
    </div>
  )
}
