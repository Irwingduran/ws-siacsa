"use client"
import { useRouter } from "next/navigation";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import HeroSlider from "@/components/hero-slider";
import ServiceCard from "@/components/service-card";
import ProductCard from "@/components/product-card";
import TestimonialCard from "@/components/testimonial-card";
import AboutUs from "@/components/about-us";
import Footer from "@/components/footer";
import { featuredProducts } from "@/data/products";


export default function Home() {
  const router = useRouter();
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Productos Destacados</h2>
              <p className="mt-2 text-lg text-gray-600">La mejor tecnología del mercado</p>
            </div>
            <Button onClick={() => router.push("/products")} variant="outline" className="mt-4 md:mt-0 border-[#EF7632] text-[#EF7632] hover:bg-[#FFF3E7]">
              Ver catálogo completo <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.name}
                brand={product.brand}
                rating={product.rating}
              />
            ))}
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
            <Button variant="outline" className="mt-4 md:mt-0 border-[#EF7632] text-[#EF7632] hover:bg-[#FFF3E7]">
              Ver todos los servicios <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Thermometer className="h-10 w-10 text-[#EF7632]" />}
              title="Instalación Profesional"
              description="Instalación experta de sistemas de aire acondicionado residenciales y comerciales con garantía de calidad."
            />
            <ServiceCard
              icon={<Wind className="h-10 w-10 text-[#EF7632]" />}
              title="Mantenimiento Preventivo"
              description="Programas de mantenimiento para extender la vida útil de sus equipos y optimizar su rendimiento."
            />
            <ServiceCard
              icon={<Snowflake className="h-10 w-10 text-[#EF7632]" />}
              title="Reparación de Emergencia"
              description="Servicio técnico disponible 24/7 para resolver cualquier falla en sus sistemas de climatización."
            />
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#EF7632] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">¿Por qué elegirnos?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-5 mb-6">
                <svg
                  className="h-10 w-10 text-[#EF7632]"
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
                  className="h-10 w-10 text-[#EF7632]"
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
                  className="h-10 w-10 text-[#EF7632]"
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
                  className="h-10 w-10 text-[#EF7632]"
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
      <section className="py-26 px-4 md:px-8 lg:px-16 bg-gray-900 text-white" id="contact">
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
                  <Phone className="h-6 w-6 text-[#EF7632] mr-4" />
                  <span className="text-lg">+52 (55) 1234-5678</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-[#EF7632] mr-4" />
                  <span className="text-lg">contacto@proveedoradeclimas.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-[#EF7632] mr-4" />
                  <span className="text-lg">Av. Tecnológico 123, Col. Centro, Ciudad de México</span>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <Button className="bg-[#EF7632] hover:bg-[#d95f15]">
                  Solicitar Cotización <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-[#0066b2] text-white bg-[#0066b2]">
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF7632]"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF7632]"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF7632]"
                    placeholder="Su teléfono"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-gray-900">
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF7632]"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF7632]"
                    placeholder="¿En qué podemos ayudarle?"
                  ></textarea>
                </div>
                <Button className="w-full bg-[#EF7632] hover:bg-[#d95f15] text-white py-3">Enviar Mensaje</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer/>
      </section>
    </main>
  )
}
