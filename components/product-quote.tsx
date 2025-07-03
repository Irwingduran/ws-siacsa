import { Phone, MessageCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectItem } from "@/components/ui/select"

interface ProductQuoteProps {
  product: {
    name: string
    model: string
    price: number
  }
}

export default function ProductQuote({ product }: ProductQuoteProps) {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Solicitar Cotización</h2>
          <p className="text-lg text-gray-600">
            Obtenga un precio personalizado para {product.name} incluyendo instalación
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulario */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6">Información del Proyecto</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre completo</label>
                  <Input placeholder="Su nombre" />
                </div>
                <br />
                <div>
                  <label className="block text-sm font-medium mb-2">Teléfono</label>
                  <Input placeholder="Su teléfono" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="Su email" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de instalación</label>
                  <Select defaultValue="">
                    <SelectItem value="">Seleccionar...</SelectItem>
                    <SelectItem value="residential">Residencial</SelectItem>
                    <SelectItem value="commercial">Comercial</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Área a climatizar (m²)</label>
                  <Input type="number" placeholder="Ej: 25" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Dirección de instalación</label>
                <Input placeholder="Dirección completa" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Comentarios adicionales</label>
                <Textarea placeholder="Detalles específicos del proyecto..." rows={4} />
              </div>

              <Button className="w-full bg-[#EF7632]">Solicitar Cotización Gratuita</Button>
            </form>
          </div>

          {/* Información de Contacto */}
          <div>
            <div className="bg-white rounded-xl p-8 mb-6">
              <h3 className="text-xl font-bold mb-6">Resumen del Producto</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Producto:</span>
                  <span className="font-medium">{product.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Modelo:</span>
                  <span className="font-medium">{product.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Precio base:</span>
                  <span className="font-medium">${product.price.toLocaleString()}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total estimado:</span>
                    <span className="text-[#EF7632]">Cotización personalizada</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">*Incluye instalación estándar y garantía</p>
                </div>
              </div>
            </div>

            <div className="bg-[#EF7632] text-white rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">¿Necesita ayuda inmediata?</h3>
              <div className="space-y-4">
                <Button variant="secondary" className="w-full justify-start">
                  <Phone className="h-5 w-5 mr-3" />
                  Llamar: +52 (55) 1234-5678
                </Button>
                <Button variant="secondary" className="w-full justify-start">
                  <MessageCircle className="h-5 w-5 mr-3" />
                  WhatsApp: +52 (55) 1234-5678
                </Button>
                <Button variant="secondary" className="w-full justify-start">
                  <Mail className="h-5 w-5 mr-3" />
                  Email: ventas@proveedoradeclimas.com
                </Button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
