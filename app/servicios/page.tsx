import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Phone,
  Mail,
  Microscope,
  Users,
  Clock,
  FlaskConical,
  Stethoscope,
  GraduationCap,
  CheckCircle,
  Calendar,
  Target,
  Dna,
  Activity,
  MessageCircle,
  Award,
} from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
      {/* Header */}
     <Navbar/>

      {/* Hero Section */}
      <section className="py-16 px-4" style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Servicios Especializados</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Nuestros Servicios de
              <span className="text-blue-600 block">Patología</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Laboratorio especializado en oncología que integra Patología y Biología Molecular para ofrecer estudios
              específicos que definen diagnóstico, tratamiento y monitoreo de pacientes con terapias de precisión,
              respaldados por más de 24 años de experiencia.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">250+</div>
              <div className="text-slate-600">Marcadores de Inmunohistoquímica</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">23</div>
              <div className="text-slate-600">Hospitales y Centros Aliados</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-slate-600">Disponibilidad para Emergencias</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">Proceso de Calidad</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Evaluación Especializada de Muestras</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cada muestra es revisada por un patólogo especialista para garantizar la idoneidad del estudio
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center border-green-100">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">1. Evaluación Inicial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Revisión por patólogo especialista para determinar si la muestra es adecuada para los estudios
                  solicitados
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-100">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">2. Validación Técnica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Verificación del tipo de tejido, celularidad, preservación y región de corte según guías específicas
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-100">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">3. Procesamiento o Alternativas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Si la muestra es adecuada se procesa inmediatamente. Si no, se informa y ofrecen alternativas viables
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-slate-800 to-blue-900 text-white border-0 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">"Excelencia y Precisión"</h3>
                <p className="text-blue-100 mb-6">
                  Nuestro compromiso con la calidad se refleja en cada fase del proceso, con rigurosos controles de
                  calidad y supervisión por especialistas en cada etapa.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-xl font-bold mb-2">Alta Calidad</div>
                    <div className="text-blue-200 text-sm">Estándares internacionales</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold mb-2">Costos Accesibles</div>
                    <div className="text-blue-200 text-sm">Precios competitivos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold mb-2">Tiempo Reducido</div>
                    <div className="text-blue-200 text-sm">Respuesta rápida</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl space-y-16">
          {/* Inmunohistoquímica */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Microscope className="w-6 h-6 text-blue-600" />
                </div>
                <Badge className="bg-blue-100 text-blue-800">Servicio Principal</Badge>
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Inmunohistoquímica</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                La inmunohistoquímica es una técnica esencial en el laboratorio de histopatología, utilizada para
                detectar antígenos específicos en tejidos mediante anticuerpos, lo que permite emitir diagnósticos
                precisos, guiar decisiones terapéuticas y brindar datos pronósticos y predictivos del comportamiento de
                enfermedades específicas.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                    <h4 className="font-semibold text-slate-800">Más de 250 Anticuerpos Disponibles</h4>
                    <p className="text-slate-600">Amplio panel de marcadores para diagnósticos precisos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                    <h4 className="font-semibold text-slate-800">Estándares de Calidad Internacional</h4>
                    <p className="text-slate-600">Protocolos validados y buenas prácticas de laboratorio</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
                    <h4 className="font-semibold text-slate-800">Resultados Rápidos y Confiables</h4>
                    <p className="text-slate-600">Tiempos de respuesta optimizados sin comprometer la calidad</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Laboratorio de Inmunohistoquímica"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          <Separator className="my-16" />

          {/* Patología Quirúrgica */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-1">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Patología Quirúrgica"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-blue-600" />
                </div>
                <Badge className="bg-green-100 text-green-800">Diagnóstico Integral</Badge>
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Patología Quirúrgica</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Estudiamos tejidos obtenidos de pacientes durante una cirugía para diagnosticar una enfermedad y ayudar
                a determinar un plan de tratamiento. Realizamos el servicio de procesamiento de muestras y tinciones
                especiales para pacientes, médicos, hospitales y centros de salud en todo México.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-blue-100">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      Estudios Transoperatorios
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      Apoyo durante procedimientos quirúrgicos. Programación con 24 horas de anticipación.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-100">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-600" />
                      Procesamiento Especializado
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      Tinciones especiales y técnicas avanzadas para diagnósticos complejos.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <Separator className="my-16" />

          {/* Biología Molecular */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Dna className="w-6 h-6 text-blue-600" />
                </div>
                <Badge className="bg-purple-100 text-purple-800">Tecnología Avanzada</Badge>
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Biología Molecular</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Realizamos estudios genéticos del ADN y ARN, utilizados en el diagnóstico de enfermedades congénitas,
                infecciosas y neoplásicas, brindando información a nivel molecular sobre la afección de los pacientes.
              </p>

              <div className="space-y-4">
                <Card className="border-purple-100 bg-purple-50/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <FlaskConical className="w-5 h-5 text-purple-600" />
                      Hibridación FISH
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      Detección de anomalías cromosómicas mediante hibridación fluorescente in situ.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-100 bg-purple-50/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Activity className="w-5 h-5 text-purple-600" />
                      RT-PCR
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      Detección de alteraciones genéticas mediante reacción en cadena de la polimerasa.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-100 bg-purple-50/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Dna className="w-5 h-5 text-purple-600" />
                      Secuenciación NGS
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      Secuenciación de genes mediante Next Generation Sequencing para análisis completos.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Biología Molecular"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          <Separator className="my-16" />

          {/* Additional Services Grid */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Servicios Adicionales</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Complementamos nuestros servicios principales con especialidades adicionales y programas de formación
                profesional.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow border-blue-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-800">Interconsulta de Casos</CardTitle>
                  <CardDescription>Red médica especializada en distintos campos de la patología</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Red nacional e internacional
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Casos complejos y especializados
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Consulta con expertos
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-blue-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Microscope className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-800">Citopatología</CardTitle>
                  <CardDescription>Análisis microscópico de células para diagnóstico</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Citología cervical
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Citología de líquidos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Punción aspiración
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-blue-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-800">Hematopatología</CardTitle>
                  <CardDescription>Diagnóstico de enfermedades hematológicas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Leucemias y linfomas
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Citometría de flujo
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Médula ósea
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-blue-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <FlaskConical className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-800">Histoquímica</CardTitle>
                  <CardDescription>Técnicas especiales de tinción y análisis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Tinciones especiales
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Detección de microorganismos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Análisis enzimáticos
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-blue-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-800">Educación</CardTitle>
                  <CardDescription>Programas de formación especializada</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Alta Especialidad en IHQ
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Alta Especialidad en Hematopatología
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Rotaciones para residentes
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <p className="text-xs text-slate-500">Contacto: educacion@picpatologia.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-blue-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-800">Programación de Estudios</CardTitle>
                  <CardDescription>Coordinación y logística especializada</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Estudios transoperatorios
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Programación 24h anticipación
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Soporte durante cirugía
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <Badge className="bg-white/20 text-white mb-4">Certificaciones Internacionales</Badge>
            <div className="flex justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-8 h-8" />
                </div>
                <div className="text-sm">Programa GCP</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-8 h-8" />
                </div>
                <div className="text-sm">IQNPath</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-6">¿Necesitas Nuestros Servicios?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contáctanos para programar tus estudios o resolver cualquier consulta. Nuestro equipo de especialistas en
            oncología está listo para apoyarte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Phone className="w-5 h-5 mr-2" />
              Llamar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Enviar Email
            </Button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
              <div className="text-2xl font-bold mb-2">Lun - Vie</div>
              <div className="text-blue-100">7:30 AM - 8:30 PM</div>
            </div>
            <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
              <div className="text-2xl font-bold mb-2">Sábados</div>
              <div className="text-blue-100">9:00 AM - 1:00 PM</div>
            </div>
            <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
              <div className="text-2xl font-bold mb-2">Emergencias</div>
              <div className="text-blue-100">24/7 Disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
     <Footer/>
    </div>
  )
}
