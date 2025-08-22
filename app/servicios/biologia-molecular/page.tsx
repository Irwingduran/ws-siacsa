import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Dna,
  CheckCircle,
  Award,
  Target,
  Users,
  MessageCircle,
  Activity,
  FlaskConical,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BiologiaMolecularPage() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-16 px-8 pt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Tecnología Avanzada</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                  Biología
                  <span className="text-blue-600 block">Molecular</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Realizamos estudios genéticos del ADN y ARN para el diagnóstico de enfermedades congénitas,
                  infecciosas y neoplásicas, brindando información a nivel molecular sobre la afección de los pacientes
                  mediante técnicas de vanguardia.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar Estudio
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consultar por WhatsApp
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">NGS</div>
                  <div className="text-sm text-slate-600">Secuenciación</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">FISH</div>
                  <div className="text-sm text-slate-600">Hibridación</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">RT-PCR</div>
                  <div className="text-sm text-slate-600">Amplificación</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Biología Molecular"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Tecnologías de Biología Molecular</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Utilizamos las técnicas más avanzadas para análisis genéticos precisos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-purple-100 bg-purple-50/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <FlaskConical className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Hibridación FISH</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Detección de anomalías cromosómicas mediante hibridación fluorescente in situ para diagnósticos
                  precisos.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Translocaciones cromosómicas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Amplificaciones génicas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Deleciones cromosómicas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 bg-blue-50/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">RT-PCR</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Detección de alteraciones genéticas mediante reacción en cadena de la polimerasa en tiempo real.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Mutaciones puntuales
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Fusiones génicas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Expresión génica
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-100 bg-green-50/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Dna className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Secuenciación NGS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Secuenciación de genes mediante Next Generation Sequencing para análisis genómicos completos.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Paneles de genes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Exoma completo
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Análisis de variantes
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Aplicaciones Clínicas</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              La biología molecular es fundamental en el diagnóstico y tratamiento de múltiples enfermedades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-red-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-red-800">Oncología</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Mutaciones oncogénicas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Marcadores predictivos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Terapias dirigidas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Resistencia a fármacos
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Hematopatología</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Leucemias agudas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Linfomas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Reordenamientos génicos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Enfermedad residual mínima
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Dna className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Enfermedades Hereditarias</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Síndromes genéticos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Enfermedades metabólicas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Asesoramiento genético
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Diagnóstico prenatal
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-orange-800">Enfermedades Infecciosas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Detección viral
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Resistencia antimicrobiana
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Carga viral
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Genotipificación
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Medicina Personalizada</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Farmacogenómica
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Biomarcadores
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Terapias dirigidas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Medicina de precisión
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle className="text-teal-800">Trasplantes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    HLA typing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Compatibilidad
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Rechazo de injerto
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Monitoreo post-trasplante
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Proceso de Biología Molecular</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Seguimos protocolos rigurosos para garantizar resultados precisos y confiables
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <CardTitle className="text-lg">Extracción</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Extracción de ADN/ARN de alta calidad utilizando métodos automatizados
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <CardTitle className="text-lg">Cuantificación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Evaluación de la cantidad y calidad del material genético obtenido
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <CardTitle className="text-lg">Análisis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">Aplicación de la técnica molecular específica (FISH, PCR, NGS)</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <CardTitle className="text-lg">Interpretación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Análisis bioinformático e interpretación clínica por especialistas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">¿Necesitas Estudios de Biología Molecular?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Contáctanos para solicitar estudios genéticos avanzados. Utilizamos las tecnologías más modernas para
            diagnósticos moleculares precisos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
              <Phone className="w-5 h-5 mr-2" />
              55 5254 3827
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp: 56 1985 2072
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Tecnologías Disponibles</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>FISH</strong>
                <br />
                Hibridación fluorescente
                <br />
                Anomalías cromosómicas
              </div>
              <div>
                <strong>RT-PCR</strong>
                <br />
                PCR en tiempo real
                <br />
                Mutaciones y fusiones
              </div>
              <div>
                <strong>NGS</strong>
                <br />
                Secuenciación masiva
                <br />
                Análisis genómico completo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
    </>
  )
}
