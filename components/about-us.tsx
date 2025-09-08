import Image from "next/image"
import { CheckCircle, Award, Users, Building } from "lucide-react"

export default function AboutUs() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16"> 
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre Nosotros</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Más de 15 años brindando soluciones de climatización de calidad para hogares y empresas en todo el país
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Historia</h3>
            <p className="text-gray-600 mb-6">
              Fundada en 2008, SIACSA nació con la misión de ofrecer soluciones de climatización
              profesionales y accesibles. Lo que comenzó como un pequeño negocio familiar, se ha convertido en una
              empresa líder en el sector, con presencia en las principales ciudades del país.
            </p>
            <p className="text-gray-600 mb-6">
              A lo largo de nuestra trayectoria, hemos instalado más de 10,000 equipos de aire acondicionado y brindado
              servicio a más de 5,000 clientes satisfechos, desde hogares hasta grandes empresas e instituciones.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#EF7632] mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  <span className="font-semibold">Compromiso con la calidad:</span> Trabajamos con equipos de la marca Intensity,
                  marca líder en el mercado que nos permite ofrecer amplia garantía y gran calidad.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#EF7632] mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  <span className="font-semibold">Servicio personalizado:</span> Cada proyecto es único y recibe
                  atención especializada según sus necesidades específicas.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#EF7632] mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  <span className="font-semibold">Innovación constante:</span> Nos mantenemos actualizados con las
                  últimas tecnologías en sistemas de climatización.
                </p>
              </div>
            </div>

     {/*        <Button className="mt-8 bg-[#EF7632] hover:bg-[#d95f15]">Conoce Nuestra Historia</Button>*/} 
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/img/img5.jpg"
                alt="Nuestras instalaciones"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#EF7632] text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-2xl font-bold">+15</p>
              <p className="text-sm">Años de experiencia</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="h-8 w-8 text-[#EF7632]" />
            </div>
            <h4 className="text-4xl font-bold text-gray-900 mb-2">+5,000</h4>
            <p className="text-gray-600">Proyectos completados</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-[#EF7632]" />
            </div>
            <h4 className="text-4xl font-bold text-gray-900 mb-2">+50</h4>
            <p className="text-gray-600">Profesionales certificados</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-[#EF7632]" />
            </div>
            <h4 className="text-4xl font-bold text-gray-900 mb-2">12</h4>
            <p className="text-gray-600">Premios de la industria</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-[#EF7632]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h4 className="text-4xl font-bold text-gray-900 mb-2">4.9</h4>
            <p className="text-gray-600">Calificación promedio</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestro Equipo</h3>
              <p className="text-gray-600 mb-6">
                Contamos con un equipo de profesionales altamente capacitados y certificados por Intensity, marca líder en el mercado.
                Nuestros técnicos reciben capacitación constante para mantenerse actualizados con las
                últimas tecnologías y mejores prácticas de la industria.
              </p>
              <p className="text-gray-600 mb-6">
                En SIACSA creemos que nuestro mayor activo es nuestra gente, por eso invertimos en su
                desarrollo y bienestar, lo que se refleja en la calidad de nuestro servicio y la satisfacción de
                nuestros clientes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/img/img5.jpg"
                  alt="Técnico especializado"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/img/img4.jpg"
                  alt="Ingeniero de climatización"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/img/img1.jpg"
                  alt="Equipo de instalación"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/img/img2.jpg"
                  alt="Servicio al cliente"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
