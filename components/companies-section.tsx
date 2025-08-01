import { Building2, Users, TrendingUp, Shield, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CompaniesSection() {
  const companyLogos = [
    { name: "Empresa A", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Empresa B", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Empresa C", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Empresa D", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Empresa E", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Empresa F", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Empresa G", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Empresa H", logo: "/placeholder.svg?height=60&width=120" },
  ]

  const industries = [
    {
      icon: Building2,
      title: "Construcción",
      description: "Programas especializados para la industria de la construcción y obras civiles.",
      companies: "25+ empresas",
    },
    {
      icon: Shield,
      title: "Salud",
      description: "Capacitación avanzada para hospitales, clínicas y centros de salud.",
      companies: "15+ instituciones",
    },
    {
      icon: Users,
      title: "Manufactura",
      description: "Formación integral para plantas industriales y centros de producción.",
      companies: "30+ plantas",
    },
    {
      icon: TrendingUp,
      title: "Servicios",
      description: "Programas adaptados para empresas de servicios y centros comerciales.",
      companies: "40+ empresas",
    },
  ]

  const benefits = [
    "Reducción de accidentes laborales hasta en un 70%",
    "Cumplimiento de normativas de seguridad y salud ocupacional",
    "Mejora en la respuesta ante emergencias médicas",
    "Formación de brigadas de emergencia certificadas",
    "Acompañamiento continuo y seguimiento post-capacitación",
    "Certificaciones reconocidas internacionalmente",
  ]

  return (
    <section id="companies" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-title text-primary mb-6">
            Empresas que confían en nosotros
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Trabajamos con empresas líderes en diferentes sectores, brindando soluciones de capacitación adaptadas a sus
            necesidades específicas.
          </p>
        </div>

        {/* Company Logos */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold font-title text-primary text-center mb-8">
            Algunas de nuestras empresas aliadas
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
              Nuestros programas de capacitación empresarial están diseñados para generar un impacto real en la
              seguridad y bienestar de tus colaboradores, mientras cumples con todas las normativas vigentes.
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
              src="/placeholder.svg?height=500&width=600"
              alt="Capacitación empresarial"
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-light-neutral p-6 rounded-xl shadow-lg border-l-4 border-primary-accent">
              <div className="text-2xl font-bold font-title text-primary mb-1">70%</div>
              <div className="text-sm text-neutral-600">Reducción promedio de accidentes</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold font-title text-light-neutral mb-4">
            ¿Tu empresa necesita capacitación en primeros auxilios?
          </h3>
          <p className="text-neutral-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Diseñamos programas personalizados que se adaptan a las necesidades específicas de tu sector y empresa.
            Contáctanos para una evaluación gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary-accent hover:bg-primary-accent/90 text-light-neutral px-8 py-4">
              Solicitar Cotización
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-light-neutral text-light-neutral hover:bg-light-neutral hover:text-primary px-8 py-4 bg-transparent"
            >
              Descargar Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
