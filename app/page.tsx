import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  ArrowRight,
  Thermometer,
  Wind,
  Snowflake,
  Phone,
  Mail,
  MapPin,
  PhoneIcon as WhatsappIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import HeroSlider from "@/components/hero-slider"
import ServiceCard from "@/components/service-card"
import ProductCard from "@/components/product-card"
import TestimonialCard from "@/components/testimonial-card"
import AboutUs from "@/components/about-us"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSlider />
      <AboutUs/>

      {/* Catálogo de Productos */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Productos</h2>
              <p className="mt-2 text-lg text-gray-600">Las mejores marcas y tecnologías del mercado</p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0 border-red-500 text-red-500 hover:bg-red-50">
              Ver catálogo completo <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard
              image="/placeholder.svg?height=300&width=300"
              title="Mini Split Inverter"
              brand="Trane"
              rating={4.8}
            />
            <ProductCard
              image="/placeholder.svg?height=300&width=300"
              title="Aire Central Residencial"
              brand="Carrier"
              rating={4.9}
            />
            <ProductCard
              image="/placeholder.svg?height=300&width=300"
              title="Cassette 360°"
              brand="LG"
              rating={4.7}
            />
            <ProductCard
              image="/placeholder.svg?height=300&width=300"
              title="Sistema VRF Comercial"
              brand="Daikin"
              rating={5.0}
            />
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Servicios Profesionales</h2>
              <p className="mt-2 text-lg text-gray-600">Soluciones completas para climatización</p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0 border-red-500 text-red-500 hover:bg-red-50">
              Ver todos los servicios <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Thermometer className="h-10 w-10 text-red-500" />}
              title="Instalación Profesional"
              description="Instalación experta de sistemas de aire acondicionado residenciales y comerciales con garantía de calidad."
            />
            <ServiceCard
              icon={<Wind className="h-10 w-10 text-red-500" />}
              title="Mantenimiento Preventivo"
              description="Programas de mantenimiento para extender la vida útil de sus equipos y optimizar su rendimiento."
            />
            <ServiceCard
              icon={<Snowflake className="h-10 w-10 text-red-500" />}
              title="Reparación de Emergencia"
              description="Servicio técnico disponible 24/7 para resolver cualquier falla en sus sistemas de climatización."
            />
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-red-500 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">¿Por qué elegirnos?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-5 mb-6">
                <svg
                  className="h-10 w-10 text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Garantía Extendida</h3>
              <p className="text-white/80">
                Todos nuestros servicios y productos cuentan con garantía superior al estándar del mercado.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-5 mb-6">
                <svg
                  className="h-10 w-10 text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Técnicos Certificados</h3>
              <p className="text-white/80">
                Nuestro equipo cuenta con certificaciones de las principales marcas del mercado.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-5 mb-6">
                <svg
                  className="h-10 w-10 text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Respuesta Rápida</h3>
              <p className="text-white/80">Atendemos emergencias en menos de 4 horas para que no sufra por el calor.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-5 mb-6">
                <svg
                  className="h-10 w-10 text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 8V14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 11H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Financiamiento</h3>
              <p className="text-white/80">Opciones de pago flexibles y financiamiento a meses sin intereses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Más de 15 años brindando soluciones de climatización a clientes satisfechos
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Excelente servicio, instalaron mi sistema en tiempo récord y con una calidad impecable. El técnico fue muy profesional."
              author="Carlos Méndez"
              company="Restaurante El Fogón"
              rating={5}
            />
            <TestimonialCard
              quote="Llevamos 5 años con su servicio de mantenimiento para nuestra oficina y nunca hemos tenido problemas con el aire acondicionado."
              author="María Fernández"
              company="Consultora Legal MF"
              rating={5}
            />
            <TestimonialCard
              quote="Precios competitivos y un servicio de primera. Recomiendo ampliamente sus servicios para proyectos comerciales."
              author="Roberto Juárez"
              company="Hotel Esmeralda"
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Contacto Rápido */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesita ayuda con su sistema de climatización?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Contáctenos hoy mismo para una cotización sin compromiso. Nuestro equipo de expertos está listo para
                ayudarle con cualquier necesidad de climatización.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-red-500 mr-4" />
                  <span className="text-lg">+52 (55) 1234-5678</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-red-500 mr-4" />
                  <span className="text-lg">contacto@proveedoradeclimas.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-red-500 mr-4" />
                  <span className="text-lg">Av. Tecnológico 123, Col. Centro, Ciudad de México</span>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <Button className="bg-red-500 hover:bg-red-600">
                  Solicitar Cotización <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <WhatsappIcon className="mr-2 h-5 w-5" /> WhatsApp
                </Button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíenos un mensaje</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-900">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Su nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-900">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Su email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-900">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Su teléfono"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-gray-900">
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">Seleccione un servicio</option>
                    <option value="installation">Instalación</option>
                    <option value="maintenance">Mantenimiento</option>
                    <option value="repair">Reparación</option>
                    <option value="quote">Cotización de equipo</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-900">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="¿En qué podemos ayudarle?"
                  ></textarea>
                </div>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-3">Enviar Mensaje</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Image
                src="/placeholder.svg?height=60&width=200"
                alt="Proveedora de Climas"
                width={200}
                height={60}
                className="mb-4"
              />
              <p className="text-gray-600 mb-4">
                Más de 15 años brindando soluciones de climatización de calidad para hogares y empresas.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-red-500">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-red-500">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-red-500">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-red-500">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-red-500">
                    Instalación Residencial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-red-500">
                    Instalación Comercial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-red-500">
                    Mantenimiento Preventivo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-red-500">
                    Reparación de Equipos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-red-500">
                    Asesoría Técnica
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Productos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-red-500">
                    Mini Split
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-red-500">
                    Aire Central
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-red-500">
                    Sistemas VRF
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-red-500">
                    Chillers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-red-500">
                    Accesorios
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Horario de Atención</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">Lunes - Viernes: 9:00 - 18:00</li>
                <li className="text-gray-600">Sábados: 9:00 - 14:00</li>
                <li className="text-gray-600">Domingos: Cerrado</li>
                <li className="text-gray-600 mt-4">Servicio de emergencia 24/7</li>
              </ul>
              <Button className="mt-4 bg-red-500 hover:bg-red-600">Contactar Ahora</Button>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">© 2025 Proveedora de Climas. Todos los derechos reservados.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="#" className="text-gray-600 hover:text-red-500">
                Términos y Condiciones
              </Link>
              <Link href="#" className="text-gray-600 hover:text-red-500">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
