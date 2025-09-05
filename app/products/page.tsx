"use client"
import { useState } from "react";
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { sectionOneProducts, sectionTwoProducts, sectionThreeProducts, sectionFourProducts } from "@/data/products"
import ProductCard from "@/components/product-card"
import Modal from "@/components/modal"
import { Product } from "@/data/product-types";
import Image from "next/image";

function ProductSectionWithModal({ sectionId, title, subtitle, products }: {
  sectionId: string;
  title: string;
  subtitle: string;
  products: Product[];
}) {
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
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="py-8" id={sectionId}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
        <p className="mt-2 text-lg text-gray-600">{subtitle}</p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
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
        <div className="relative h-80 w-full">
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            className="object-contain transform group-hover:scale-105 transition-transform duration-500"
            priority={false}
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
    </section>
  );
}

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="bg-[url('/img/img2.jpg')] bg-cover bg-center py-60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Nuestros Productos</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Descubre nuestra amplia gama de soluciones en climatización para hogares y negocios.
          </p>
        </div>
      </div>


      {/* Product Grid Section One - Expansion Directa*/}
      <ProductSectionWithModal
        sectionId="expansion-directa"
        title="Expansión Directa"
        subtitle="La mejor tecnología del mercado"
        products={sectionOneProducts}
      />

      {/* Product Grid Section Two - Agua Helada*/}
      <ProductSectionWithModal
        sectionId="agua-helada"
        title="Agua Helada"
        subtitle="La mejor tecnología del mercado"
        products={sectionTwoProducts}
      />

      {/* Product Grid Section Three - VRF*/}
      <ProductSectionWithModal
        sectionId="vrf"
        title="VRF"
        subtitle="La mejor tecnología del mercado"
        products={sectionThreeProducts}
      />

      {/* Product Grid Section Four - Herramientas y Controles*/}
      <ProductSectionWithModal
        sectionId="herramientas-controles"
        title="Herramientas y Controles"
        subtitle="La mejor tecnología del mercado"
        products={sectionFourProducts}
      />

      <Footer />
    </main>
  )
}