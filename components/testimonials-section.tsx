import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      position: "Directora de RRHH",
      company: "Empresa Manufacturera S.A.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "El programa de capacitación de HUMAN transformó completamente nuestra cultura de seguridad. Nuestros empleados ahora se sienten más seguros y preparados para actuar en emergencias.",
    },
    {
      name: "Carlos Rodríguez",
      position: "Gerente de Operaciones",
      company: "Construcciones del Valle",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "La formación fue excepcional. Los instructores son altamente profesionales y el material didáctico es de primera calidad. Definitivamente recomendamos sus servicios.",
    },
    {
      name: "Ana Patricia Morales",
      position: "Coordinadora de Salud Ocupacional",
      company: "Hospital San Rafael",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Como profesional de la salud, puedo afirmar que el nivel de capacitación de HUMAN es excepcional. Sus técnicas están actualizadas con los últimos estándares internacionales.",
    },
    {
      name: "Roberto Silva",
      position: "Director de Seguridad",
      company: "Industrias Químicas Ltda.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Llevamos 3 años trabajando con HUMAN y los resultados han sido extraordinarios. Han reducido significativamente nuestros incidentes laborales.",
    },
    {
      name: "Lucía Fernández",
      position: "Jefe de Enfermería",
      company: "Clínica Santa María",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "La metodología de enseñanza es muy práctica y efectiva. Nuestro personal médico mejoró notablemente sus habilidades en primeros auxilios después de la capacitación.",
    },
    {
      name: "Diego Martínez",
      position: "Coordinador de Brigadas",
      company: "Centro Comercial Plaza Mayor",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "HUMAN nos ayudó a formar brigadas de emergencia altamente capacitadas. Su acompañamiento continuo ha sido fundamental para mantener nuestros estándares de seguridad.",
    },
  ]

  return (
    <section id="testimolials" className="py-20 bg-light-neutral">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-title text-primary mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            La confianza de nuestros clientes es nuestro mayor logro. Conoce las experiencias de quienes han confiado en
            nuestra formación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-primary-accent rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-light-neutral" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary-accent fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-neutral-600 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                {/* Author Info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold font-title text-primary text-sm">{testimonial.name}</h4>
                    <p className="text-neutral-500 text-xs">{testimonial.position}</p>
                    <p className="text-primary-accent text-xs font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-primary/5 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold font-title text-primary mb-2">98%</div>
              <div className="text-neutral-600 text-sm">Satisfacción del cliente</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-title text-primary mb-2">500+</div>
              <div className="text-neutral-600 text-sm">Profesionales capacitados</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-title text-primary mb-2">100+</div>
              <div className="text-neutral-600 text-sm">Empresas atendidas</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-title text-primary mb-2">15+</div>
              <div className="text-neutral-600 text-sm">Años de experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
