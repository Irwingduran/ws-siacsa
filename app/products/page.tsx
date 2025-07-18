"use client"
import { useState } from "react";
import { Search, Filter, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectItem } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { productCategories, sectionOneProducts, sectionTwoProducts, sectionThreeProducts, sectionFourProducts } from "@/data/products"
import ProductCard from "@/components/product-card"
import Modal from "@/components/modal"

function ProductSectionWithModal({ sectionId, title, subtitle, products }: {
  sectionId: string;
  title: string;
  subtitle: string;
  products: any[];
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleShowMore = (product: any) => {
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
        <div className="space-y-4">
          <p className="text-gray-700">{selectedProduct?.description}</p>
          {selectedProduct?.brand && (
            <p className="text-sm text-gray-600">
              <span className="font-medium">Marca:</span> {selectedProduct.brand}
            </p>
          )}
          {selectedProduct?.model && (
            <p className="text-sm text-gray-600">
              <span className="font-medium">Modelo:</span> {selectedProduct.model}
            </p>
          )}
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

      {/* Filtros y Búsqueda */}
      <section className="py-8 px-4 md:px-8 lg:px-16 bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full">
              <div className="relative flex-1 max-w-2xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Buscar productos..." 
                  className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-[#EF7632] focus:ring-[#EF7632]" 
                />
              </div>
              <Select defaultValue="">
                <SelectItem value="">Todas las categorías</SelectItem>
                {productCategories.map(category => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
              <Button variant="outline" size="sm" className="hidden sm:flex border-gray-300 hover:bg-gray-50">
                <Grid className="h-4 w-4 mr-2" />
                Cuadrícula
              </Button>
              <Button variant="outline" size="sm" className="hidden sm:flex border-gray-300 hover:bg-gray-50">
                <List className="h-4 w-4 mr-2" />
                Lista
              </Button>
            </div>
          </div>
        </div>
      </section>

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