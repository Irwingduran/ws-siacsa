interface ProductSpecsProps {
    specifications: {
      capacity: string
      seer: string
      voltage: string
      refrigerant: string
      dimensions: {
        indoor: string
        outdoor: string
      }
      weight: {
        indoor: string
        outdoor: string
      }
      coverage: string
      noiseLevel: string
      energyClass: string
    }
  }
  
  export default function ProductSpecs({ specifications }: ProductSpecsProps) {
    return (
      <div className="bg-white rounded-lg p-8">
        <h3 className="text-2xl font-bold mb-6">Especificaciones Técnicas</h3>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#EF7632]">Rendimiento</h4>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Capacidad de enfriamiento</span>
                <span className="font-medium">{specifications.capacity}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">SEER (Eficiencia)</span>
                <span className="font-medium">{specifications.seer}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Área de cobertura</span>
                <span className="font-medium">{specifications.coverage}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Nivel de ruido</span>
                <span className="font-medium">{specifications.noiseLevel}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Clase energética</span>
                <span className="font-medium">{specifications.energyClass}</span>
              </div>
            </div>
          </div>
  
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#EF7632]">Características Técnicas</h4>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Voltaje</span>
                <span className="font-medium">{specifications.voltage}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Refrigerante</span>
                <span className="font-medium">{specifications.refrigerant}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Dimensiones interior</span>
                <span className="font-medium">{specifications.dimensions.indoor}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Dimensiones exterior</span>
                <span className="font-medium">{specifications.dimensions.outdoor}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Peso interior</span>
                <span className="font-medium">{specifications.weight.indoor}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Peso exterior</span>
                <span className="font-medium">{specifications.weight.outdoor}</span>
              </div>
            </div>
          </div>
        </div>
  
        <div className="mt-8 p-6 bg-[#EF7632] rounded-lg">
          <h4 className="text-lg font-bold mb-3 text-white">Certificaciones y Estándares</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-white rounded-lg p-3 mb-2">
                <span className="text-2xl">🌟</span>
              </div>
              <span className="text-sm font-medium text-white">ENERGY STAR</span>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-3 mb-2">
                <span className="text-2xl">✅</span>
              </div>
              <span className="text-sm font-medium text-white">AHRI Certified</span>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-3 mb-2">
                <span className="text-2xl">🔒</span>
              </div>
              <span className="text-sm font-medium text-white">UL Listed</span>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-3 mb-2">
                <span className="text-2xl">🌱</span>
              </div>
              <span className="text-sm font-medium text-white">Eco-Friendly</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  