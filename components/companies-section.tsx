'use client'
import { Building2, Users, TrendingUp, Shield, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils"

export function CompaniesSection() {
  const companyLogos = [
    { name: "Fuerza Aerea Uruguaya", logo: "/assets/images/companies/corporation1.jpeg?height=120&width=240" },
    { name: "Centro de Estudios Bioquimicos", logo: "/assets/images/companies/corporation12.jpeg?height=120&width=240" },
    { name: "MAPFRE", logo: "/assets/images/companies/corporation3.png?height=120&width=240" },
    { name: "Banco NacionalBanco de la Nación Argentina", logo: "/assets/images/companies/corporation4.jpeg?height=120&width=240" },
    { name: "McDonalds", logo: "/assets/images/companies/corporation5.png?height=120&width=240" },
    { name: "Costa Urbana Shoipping", logo: "/assets/images/companies/corporation9.jpeg?height=120&width=240" },
    { name: "Doña Coca", logo: "/assets/images/companies/corporation11.jpeg?height=120&width=240" },
    { name: "Club Bohemios", logo: "/assets/images/companies/corporation8.jpeg?height=120&width=240" },
  ]

  const industries = [
    {
      icon: Building2,
      title: "Construcción",
      description: "Programas especializados para la industria de la construcción y obras civiles.",
      companies: "5+ empresas",
    },
    {
      icon: Shield,
      title: "Salud",
      description: "Capacitación avanzada para hospitales, clínicas y centros de salud.",
      companies: "6+ instituciones",
    },
    {
      icon: Users,
      title: "Manufactura",
      description: "Formación integral para plantas industriales y centros de producción.",
      companies: "8+ plantas",
    },
    {
      icon: TrendingUp,
      title: "Servicios",
      description: "Programas adaptados para empresas de servicios y centros comerciales.",
      companies: "20+ empresas",
    },
  ]

  const benefits = [
    "Disminución de las secuelas permanentes hasta en un 50 % con primeros auxilios aplicados correctamente.",
    "Mejora del tiempo de respuesta ante emergencias: de 10 a 2 minutos promedio con personal entrenado.",
    "Formación de brigadas internas certificadas en RCP, DEA y manejo de traumas.",
    "Reducción de bajas prolongadas: hasta 5 días menos de ausencia promedio por accidente.",
    "Potencial de salvar una vida cada 5 años en empresas medianas gracias a intervención temprana.",
    "Cumplimiento normativo (Decreto 330 y Ley 18.360).",
    "Disminución de conflictos legales por falta de respuesta oportuna.",
  ]

  return (
    <section id="companies" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-title text-primary mb-6">
            Empresas e instituciones que confían en nosotros
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Más de 20 empresas, instituciones, clubes y organismos eligieron nuestros programas para formar a sus equipos
            y actuar con seguridad ante emergencias.
          </p>
        </div>

        {/* Company Logos */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold font-title text-primary text-center mb-8">
            Algunos de los que ya dieron el primer paso
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-light-neutral rounded-lg shadow-sm hover:shadow-md transition-shadow grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  className="max-h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold font-title text-primary text-center mb-12">Sectores que atendemos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="w-8 h-8 text-primary-accent" />
                  </div>
                  <h4 className="text-lg font-semibold font-title text-primary mb-3">{industry.title}</h4>
                  <p className="text-neutral-600 text-sm mb-4 leading-relaxed">{industry.description}</p>
                  <div className="text-secondary-accent text-sm font-medium">{industry.companies}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits for Companies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-title text-primary mb-6">Beneficios para tu empresa</h3>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Nuestros programas de capacitación están diseñados para generar un impacto real en la seguridad y salud ocupacional,
              ayudando a responder de forma efectiva ante emergencias.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-secondary-accent flex-shrink-0 mt-0.5 mr-3" />
                  <span className="text-neutral-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="/assets/images/cover3.jpeg?height=500&width=600"
              alt="Capacitación empresarial"
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-light-neutral p-6 rounded-xl shadow-lg border-l-4 border-primary-accent">
              <div className="text-2xl font-bold font-title text-primary mb-">70%</div>
              <div className="text-sm text-neutral-600">Reduce hasta un 70% las muertes por paro cardíaco y secuelas en lesiones traumáticas.</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold font-title text-light-neutral mb-4">
            ¿Tu empresa necesita capacitación en primeros auxilios?
          </h3>
          <p className="text-neutral-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Creamos programas personalizados que se adaptan 100 % a tu sector, equipo y tiempos.
            <br />
            Contanos tu necesidad y diseñamos la solución.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg"
              className="bg-primary-accent hover:bg-primary-accent/90 text-light-neutral px-8 py-4"
              onClick={() => scrollToSection('contact', 'companies-section')}
            >
              Solicitar Cotización
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-light-neutral text-light-neutral hover:bg-light-neutral hover:text-primary px-8 py-4 bg-transparent"
            >
              Descargar Brochure
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
