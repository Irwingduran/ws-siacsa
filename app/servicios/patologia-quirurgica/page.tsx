import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  CheckCircle,
  Clock,
  Target,
  MessageCircle,
  AlertCircle,
} from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PatologiaQuirurgicaPage() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-16 px-4 pt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Diagnóstico Integral</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                  Patología
                  <span className="text-blue-600 block">Quirúrgica</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Estudiamos tejidos obtenidos de pacientes durante una cirugía para diagnosticar enfermedades y ayudar
                  a determinar un plan de tratamiento. Realizamos procesamiento de muestras y tinciones especiales para
                  todo México.
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
                  <Clock className="w-5 h-5 mr-2" />
                  Estudio Transoperatorio
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24h</div>
                  <div className="text-sm text-slate-600">Programación</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-slate-600">Emergencias</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-slate-600">Precisión</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Patología Quirúrgica"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Nuestros Servicios de Patología Quirúrgica</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ofrecemos una gama completa de servicios diagnósticos para apoyar las decisiones quirúrgicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Estudios Transoperatorios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Apoyo durante procedimientos quirúrgicos con consultas en tiempo real para guiar las decisiones del
                  cirujano.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Programación con 24 horas de anticipación
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Disponibilidad durante la cirugía
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Resultados en tiempo real
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Procesamiento Especializado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Procesamiento de muestras con tinciones especiales y técnicas avanzadas para diagnósticos complejos.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Tinciones histoquímicas especiales
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Técnicas de inmunohistoquímica
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Análisis morfológico detallado
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-orange-600" />
                <CardTitle className="text-orange-800">Estudios Transoperatorios - Información Importante</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 mb-4">
                Para garantizar la disponibilidad durante su procedimiento quirúrgico, es necesario programar el estudio
                transoperatorio con <strong>24 horas de anticipación</strong>.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Cómo programar:</h4>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>• Llamar a cualquiera de nuestros teléfonos</li>
                    <li>• Proporcionar información del procedimiento</li>
                    <li>• Confirmar horario y logística</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Información requerida:</h4>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>• Fecha y hora de la cirugía</li>
                    <li>• Tipo de procedimiento</li>
                    <li>• Hospital donde se realizará</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Proceso de Patología Quirúrgica</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Seguimos un protocolo riguroso para garantizar diagnósticos precisos y oportunos
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <CardTitle className="text-lg">Recepción</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Recepción y registro de la muestra quirúrgica con información clínica completa
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <CardTitle className="text-lg">Evaluación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Evaluación macroscópica por patólogo especialista y selección de áreas representativas
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <CardTitle className="text-lg">Procesamiento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Procesamiento histológico con técnicas estándar y especiales según sea necesario
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <CardTitle className="text-lg">Análisis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Análisis microscópico detallado con estudios complementarios si es necesario
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  5
                </div>
                <CardTitle className="text-lg">Reporte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Emisión de reporte diagnóstico completo con recomendaciones clínicas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Especialidades que Atendemos</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Brindamos apoyo diagnóstico en todas las especialidades quirúrgicas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-800">Oncología Quirúrgica</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Tumores sólidos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Márgenes quirúrgicos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Ganglios linfáticos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Estadificación TNM
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-800">Cirugía General</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Vesícula biliar
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Apéndice
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Hernias
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Tiroides
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-800">Especialidades</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Ginecología
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Urología
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Ortopedia
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Neurocirugía
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">¿Necesitas Patología Quirúrgica?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Programa tu estudio o consulta sobre estudios transoperatorios. Estamos disponibles 24/7 para emergencias.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Phone className="w-5 h-5 mr-2" />
              55 5254 3827
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp: 56 1985 2072
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Estudios Transoperatorios</h3>
            <p className="text-blue-100 mb-4">
              Para programar un estudio transoperatorio, llama con 24 horas de anticipación
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Horarios Regulares:</strong>
                <br />
                Lun-Vie: 7:30 AM - 8:30 PM
                <br />
                Sáb: 9:00 AM - 1:00 PM
              </div>
              <div>
                <strong>Emergencias:</strong>
                <br />
                Disponible 24/7
                <br />
                Llamar al número principal
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
