"use client"
import { useState } from "react";
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { sectionOneProducts, sectionTwoProducts, sectionThreeProducts, sectionFourProducts } from "@/data/products"
import ProductCard from "@/components/product-card"
import Modal from "@/components/modal"
import { Product } from "@/data/product-types";

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
  <div className="flex flex-col md:flex-row gap-6">
    {selectedProduct?.image && (
      <div className="md:w-1/2 flex-shrink-0">
        <img 
          src={selectedProduct.image} 
          alt={selectedProduct.name}
          className="w-full h-auto max-h-64 object-contain rounded-lg bg-gray-100"
        />
      </div>
    )}
    <div className="md:w-1/2 space-y-4">
      <p className="text-gray-700 text-base">{selectedProduct?.description}</p>
      <div className="space-y-2">
        {selectedProduct?.brand && (
          <p className="text-sm text-gray-600">
            <span className="font-medium">Marca:</span> {selectedProduct.brand}
          </p>
        )}
      </div>
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