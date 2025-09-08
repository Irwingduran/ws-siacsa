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
import Modal from "@/components/modal";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import type { Product } from "@/data/product-types";
import Link from "next/link";

function FeaturedProductsWithModal({ router }: { router: ReturnType<typeof useRouter> }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleShowMore = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Productos Destacados</h2>
            <p className="mt-2 text-lg text-gray-600">La mejor tecnología del mercado</p>
          </div>
          <Button onClick={() => router.push("/products")}
            variant="outline"
            className="mt-4 md:mt-0 border-[#EF7632] text-[#EF7632] hover:bg-[#FFF3E7]">
            Ver catálogo completo <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(featuredProducts as Product[]).map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              detailImage={product.detailImage}
              title={product.name}
              brand={product.brand}
              description={product.description}
              onShowMore={product.description ? () => handleShowMore(product) : undefined}
            />
          ))}
        </div>
        <Modal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          title={selectedProduct?.name}
        >
          <div className="space-y-6">
            {/* Single Centered Image Section */}
            {selectedProduct?.image && (
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 p-8">
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold z-10 shadow-lg">
                  {selectedProduct.brand}
                </div>
                <div className="flex justify-center items-center">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="max-w-full h-80 object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            )}

            {/* Product Info Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900">Descripción del Producto</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{selectedProduct?.description}</p>
              
              {selectedProduct?.brand && (
                <div className="mt-4 inline-flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-gray-500">Marca:</span>
                  <span className="ml-2 text-sm font-bold text-blue-600">{selectedProduct.brand}</span>
                </div>
              )}
            </div>

            {/* Specifications Section */}
            {selectedProduct?.specifications && selectedProduct.specifications.length > 0 && (
              <div className="bg-white rounded-xl border-2 border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">Especificaciones Técnicas</h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProduct.specifications.map((spec, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white text-center">
              <p className="text-sm mb-2">¿Interesado en este producto?</p>
              <p className="text-lg font-semibold">Contáctanos para más información</p>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
}

export default function Home() {
  const router = useRouter();
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<{success: boolean, message: string} | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSending(true);
    setSendStatus(null);
    
    // Agregar la hora actual al formulario
    const time = new Date().toLocaleString('es-MX', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    
    const formData = new FormData(form.current);
    formData.append('time', time);
    
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
    )
    .then((result) => {
      console.log(result.text);
      setSendStatus({success: true, message: 'Mensaje enviado con éxito. Nos pondremos en contacto pronto.'});
      form.current?.reset();
    })
    .catch((error) => {
      console.error(error.text);
      setSendStatus({success: false, message: 'Error al enviar el mensaje. Por favor, intente nuevamente.'});
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSlider />
      <AboutUs/>

      {/* Catálogo de Productos con Modal */}
      <FeaturedProductsWithModal router={router} />

      {/* Servicios Destacados */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Servicios Profesionales</h2>
              <p className="mt-2 text-lg text-gray-600">Soluciones completas para climatización</p>
            </div>
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
                Contamos con técnicos altamente capacitados para la instalación de nuestros equipos de aire acondicionado.
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
            Más de 18 años brindando soluciones de climatización a clientes satisfechos
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
                  <a href="tel:+5255553679494"><span className="text-lg">(+52) 55 5367 9494</span></a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-[#EF7632] mr-4" />
                 <a href="mailto:veronica@siaacsa.com"><span className="text-lg">veronica@siaacsa.com</span></a> 
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-[#EF7632] mr-4" />
                  <span className="text-lg">Bosques de grosellos 1 - A, <br /> Col. Bosques del Valle 1A sección,<br /> Coacalco de Berriozabal C.P. 55717</span>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <Link href="https://wa.me/5540852371?text=Hola%2C%20buen%20día.%20Quiero%20una%20cotización..."><Button className="bg-[#EF7632] cursor-pointer hover:bg-[#d95f15]">
                  Solicitar Cotización <ArrowRight className="ml-2 h-4 w-4" />
                </Button></Link>
               <Link href="tel:55553679494"><Button variant="outline" className="border-[#0066b2] cursor-pointer text-white bg-[#0066b2]">
                  <WhatsappIcon className="mr-2 h-5 w-5" /> Llamar ahora
                </Button></Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-l text-black">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíenos un mensaje</h3>
              {sendStatus && (
                <div className={`mb-4 p-3 rounded-md ${sendStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {sendStatus.message}
                </div>
              )}
<form ref={form} onSubmit={sendEmail} className="space-y-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="space-y-2">
      <label htmlFor="name" className="text-sm font-medium text-gray-900">
        Nombre
      </label>
      <input
        type="text"
        id="name"
        name="name" // Cambiado a "name"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF7632]"
        placeholder="Su nombre"
        required
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="email" className="text-sm font-medium text-gray-900">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email" // Cambiado a "email"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF7632]"
        placeholder="Su email"
        required
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
      name="phone" // Cambiado a "phone"
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF7632]"
      placeholder="Su teléfono"
      required
    />
  </div>
  <div className="space-y-2">
    <label htmlFor="service" className="text-sm font-medium text-gray-900">
      Servicio de interés
    </label>
    <select
      id="service"
      name="service" // Cambiado a "service"
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF7632]"
      required
    >
      <option value="">Seleccione un servicio</option>
      <option value="Instalación">Instalación</option>
      <option value="Mantenimiento">Mantenimiento</option>
      <option value="Reparación">Reparación</option>
      <option value="Cotización de equipo">Cotización de equipo</option>
    </select>
  </div>
  <div className="space-y-2">
    <label htmlFor="message" className="text-sm font-medium text-gray-900">
      Mensaje
    </label>
    <textarea
      id="message"
      name="message" // Cambiado a "message"
      rows={4}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF7632]"
      placeholder="¿En qué podemos ayudarle?"
      required
    ></textarea>
  </div>
  <Button 
    type="submit"
    className="w-full bg-[#EF7632] hover:bg-[#d95f15] text-white py-3"
    disabled={isSending}
  >
    {isSending ? 'Enviando...' : 'Enviar Mensaje'}
  </Button>
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
