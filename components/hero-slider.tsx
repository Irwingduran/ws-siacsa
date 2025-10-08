"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "/siacsa/img1.jpeg",
    title: "Soluciones de Climatización Profesionales",
    subtitle: "Expertos en instalación y mantenimiento de sistemas de aire acondicionado",
    cta: "Solicitar Cotización",
    link: "https://wa.me/5540852371?text=Hola%2C%20buen%20día.%20Quiero%20una%20cotización...", 
  },
  {
    id: 2,
    image: "/siacsa/img9.jpeg",
    title: "Equipos de Alta Eficiencia",
    subtitle: "Ahorre energía y dinero con nuestros sistemas de última generación",
    cta: "Ver Catálogo",
    link: "/products", 
  },
  {
    id: 3,
    image: "/siacsa/img7.jpeg",
    title: "Servicio Técnico Especializado",
    subtitle: "Mantenimiento preventivo y correctivo para todos los modelos y marcas",
    cta: "Solicitar Cotización",
    link: "https://wa.me/5540852371?text=Hola%2C%20buen%20día.%20Quiero%20una%20cotización...", 
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-screen">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          </div>

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col justify-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 md:mb-10">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* CTA con condicional para links internos vs externos */}
                {slide.link.startsWith("http") ? (
                  <Button size="lg" className="bg-[#EF7632] hover:bg-[#d95f15] text-white" asChild>
                    <a href={slide.link} target="_blank" rel="noopener noreferrer">
                      {slide.cta} <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                ) : (
                  <Button size="lg" className="bg-[#EF7632] hover:bg-[#d95f15] text-white" asChild>
                    <Link href={slide.link}>
                      {slide.cta} <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                )}

                {/* Botón "Conocer más" (interno) */}
                <Link href="/#about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#0066b2] text-white bg-[#0066b2] cursor-pointer"
                  >
                    Conocer Más
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-[#EF7632]" : "bg-white/50"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Side Contact */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <Link
          href="/contacto"
          className="bg-[#EF7632] text-white py-2 px-4 rounded-r-lg transform -rotate-90 translate-x-[-40px] origin-bottom-left block"
        >
          <span className="font-medium">Contáctanos</span>
        </Link>
      </div>
    </section>
  )
}
