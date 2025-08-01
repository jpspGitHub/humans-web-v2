'use client'

import { BookOpen, Building, Users, BadgeIcon as Certificate } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils"

export function ServicesSection() {
  const services = [
    {
      icon: BookOpen,
      title: "Respuesta en Emergencias Urbanas, Acuáticas, Agrestes Y Confinados",
      description: "Entrenamiento técnico para intervenir con eficacia en distintos escenarios críticos. Formamos primeros respondientes preparados para actuar con seguridad, precisión y humanidad cuando cada segundo cuenta.",
      features: ["Materiales y recursos completos", "Certificaciones internacionales", "Certificacion nacional (ley 18.360 - decreto 330/009)"],
      duration: "16-40 horas",
    },
    {
      icon: Building,
      title: "Preparación Física y Respuesta Operativa",
      description:
        `Entrenamiento técnico y corporal enfocado en la exigencia real del rol. Pensado para aspirantes a guardavidas, nadadores de aguas abiertas, personal operativo, brigadistas y equipos de respuesta rápida.`,
      features: ["Nadadores de Aguas Abiertas | Guardavidas", "Brigadas de emergencia", "Equipos de Respuesta Rapida"],
      duration: "Personalizado",
    },
    {
      icon: Users,
      title: "Bienestar y Salud",
      description: "Articulamos cuerpo, mente y vínculo humano para brindar contención, acompañar y sostener emocionalmente a otros en momentos críticos. Sabemos que intervenir no es solo una cuestión técnica, por eso integramos la psicología como parte esencial de la preparación.",
      features: ["Apoyo emocional en crisis", "Autocuidado del interviniente", "Primeros Auxilios Psicológicos (PAPs)"],
      duration: "80 horas",
    },
    // {
    //   icon: Certificate,
    //   title: "Recertificaciones",
    //   description: "Mantén tus conocimientos actualizados con nuestros programas de recertificación periódica.",
    //   features: ["Actualización de técnicas", "Nuevos protocolos", "Certificado renovado"],
    //   duration: "8 horas",
    // },
  ]

  return (
    <section id="services" className="py-20 bg-light-neutral">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-title text-primary mb-6">Nuestros Programas</h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Capacitaciones técnicas, prácticas y humanas para actuar cuando cada segundo cuenta.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-accent" />
                </div>
                <CardTitle className="text-xl font-title text-primary min-h-[3em]">{service.title}</CardTitle>
                {/* <div className="text-sm text-primary-accent font-medium">Duración: {service.duration}</div> */}
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 mb-6 leading-relaxed min-h-[10em]">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                      <div className="w-2 h-2 bg-secondary-accent rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-light-neutral bg-transparent"
                >
                  Más Información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold font-title text-primary mb-4">¿Necesitas un programa personalizado?</h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Diseñamos programas de capacitación específicos para tu empresa o institución, adaptados a tus necesidades
              particulares y sector de actividad.
            </p>
            <Button
              size="lg"
              className="bg-primary-accent hover:bg-primary-accent/90 text-light-neutral"
              onClick={() => scrollToSection('contact')}
            >
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
