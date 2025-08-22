import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  CheckCircle,
  Clock,
  Award,
  MessageCircle,
  FlaskConical,
} from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function InmunohistoquimicaPage() {
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
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Servicio Principal</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                  Inmunohistoquímica
                  <span className="text-blue-600 block">Avanzada</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Técnica esencial en el laboratorio de histopatología para detectar antígenos específicos en tejidos
                  mediante anticuerpos, permitiendo diagnósticos precisos, decisiones terapéuticas y datos pronósticos
                  del comportamiento de enfermedades específicas.
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
                  <div className="text-2xl font-bold text-blue-600">250+</div>
                  <div className="text-sm text-slate-600">Anticuerpos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24-48h</div>
                  <div className="text-sm text-slate-600">Tiempo Respuesta</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-slate-600">Calidad</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Laboratorio de Inmunohistoquímica"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">¿Por qué elegir nuestro servicio de IHQ?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Contamos con el panel más amplio de anticuerpos y los más altos estándares de calidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FlaskConical className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">Más de 250 Anticuerpos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Amplio panel de marcadores para diagnósticos precisos en oncología, hematopatología y patología
                  general
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Estándares Internacionales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Protocolos validados y buenas prácticas de laboratorio siguiendo estándares europeos y certificaciones
                  GCP
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">Resultados Rápidos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Tiempos de respuesta optimizados de 24-48 horas sin comprometer la calidad del diagnóstico
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Nuestro Proceso de IHQ</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cada muestra es evaluada por especialistas siguiendo protocolos rigurosos
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <CardTitle className="text-lg">Recepción y Evaluación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Revisión por patólogo especialista para determinar la idoneidad de la muestra
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <CardTitle className="text-lg">Preparación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Procesamiento de la muestra con técnicas especializadas y controles de calidad
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <CardTitle className="text-lg">Marcaje</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Aplicación de anticuerpos específicos utilizando equipos automatizados de última generación
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <CardTitle className="text-lg">Interpretación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Análisis e interpretación por patólogos especialistas con reporte detallado
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
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Aplicaciones Clínicas</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              La inmunohistoquímica es fundamental en múltiples áreas diagnósticas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-800">Oncología</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Clasificación de tumores
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Determinación de origen primario
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Marcadores pronósticos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Marcadores predictivos de respuesta
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-800">Hematopatología</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Linfomas y leucemias
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Inmunofenotipificación
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Clonalidad de células B y T
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Marcadores de proliferación
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-800">Patología General</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Enfermedades infecciosas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Enfermedades autoinmunes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Trasplantes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Enfermedades metabólicas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-800">Medicina Personalizada</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Terapias dirigidas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Inmunoterapia
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Biomarcadores
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Medicina de precisión
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">¿Necesitas un Estudio de Inmunohistoquímica?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contáctanos para programar tu estudio. Nuestro equipo de especialistas está listo para apoyarte con
            diagnósticos precisos y oportunos.
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

          <div className="text-center">
            <p className="text-blue-100 mb-2">Horarios de Atención:</p>
            <p className="text-white">Lunes a Viernes: 7:30 AM - 8:30 PM | Sábados: 9:00 AM - 1:00 PM</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
    </>
  )
}
