import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Award, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-16 px-4 relative min-h-screen flex items-center overflow-hidden">

      <div className="absolute inset-0 z-0">
        <Image
          src="/img/DSC05022.png"
          alt="Laboratorio PIC - Fondos de microscopio y equipos de diagnóstico"
          fill
          className="object-cover"
          priority
        />
    
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
        <div className="text-center mb-16" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
          <div className="inline-flex items-center gap-2 bg-blue-600/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-600/20" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>
            <Award className="w-4 h-4 text-yellow-600" />
            <span className="text-blue-800 font-medium" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>Líderes en Patología</span>
          </div>

          <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>
            El Futuro del
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent block" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>
              Diagnóstico
            </span>
            <span className="text-blue-600" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>Está Aquí</span>
          </h1>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed bg-white/80 backdrop-blur-sm p-6 rounded-2xl" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
            Los tejidos son una extensión del paciente, por eso los tratamos con el mismo cuidado y respeto a través de servicios de diagnóstico de alta calidad.
          </p>
        </div>

        <div className="bg-blue-50/90 backdrop-blur-md rounded-3xl pt-14 p-8 border border-blue-200">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Por qué elegir Laboratorio PIC?</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-800">Más de 250 marcadores inmunohistoquímicos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-800">Certificación internacional IQNPath</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-800">Red de 23+ hospitales aliados</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-800">Tecnología NGS de última generación</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                  <Link href="/#contacto">
                    <Calendar className="w-5 h-5 mr-2" />
                    Contacto
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <Link href="/#servicios">
                  Ver Servicios
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl text-center" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                <div className="text-4xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>20+</div>
                <div className="text-blue-800" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>Años de Experiencia</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl text-center" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                <div className="text-4xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>98%</div>
                <div className="text-blue-800" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>Precisión Diagnóstica</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl text-center" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                <div className="text-4xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>10K+</div>
                <div className="text-blue-800" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>Casos Procesados</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl text-center" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                <div className="text-4xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'Dogma Bold, Arial, Helvetica, sans-serif' }}>250+</div>
                <div className="text-blue-800" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>Marcadores</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}