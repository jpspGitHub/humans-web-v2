import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      "name": "Gonzalo Ruiz Diaz",
      "position": "Técnico Prevencionista de Riesgos",
      "company": "Andritz",
      "image": "assets/images/avatar/testimolial1.jpeg?height=80&width=80",
      "rating": 5,
      "text": "He participado en numerosos cursos de primeros auxilios, y este ha sido sin dudas el mejor; una metodología muy dinámica y efectiva.",
    },{
      "name": "Micaela Karan",
      "position": "Agente de Soporte Técnico",
      "company": "Fixed",
      "image": "assets/images/avatar/fixeduy_logo.jpeg?height=80&width=80",
      "rating": 5,
      "text": "El curso fue una gran instancia de adquirir conocimientos que son esenciales para la vida en sociedad. Hay muchas cosas que desconocemos o no intervenimos por no saber cómo actuar, este curso nos dio un empujón para animarnos a poder ayudar al otro en una situación de “riesgo”."
    },
    {
      "name": "Rony Silva",
      "position": "Referente Técnico de Soporte",
      "company": "Fixed",
      "image": "assets/images/avatar/fixeduy_logo.jpeg?height=80&width=80",
      "rating": 5,
      "text": "En mi opinión fue una muy buena experiencia y actividad, enriquecedora y necesaria, nos brindó conocimientos para saber como actuar bajo una situación urgente que se puede presentar en cualquier momento."
    },{
      "name": "Valentina Poloni",
      "position": "Agente de Soporte Técnico",
      "company": "Fixed",
      "image": "assets/images/avatar/fixeduy_logo.jpeg?height=80&width=80",
      "rating": 5,
      "text": "La jornada fue una experiencia valiosa, no solo por los conocimientos técnicos que adquirimos, sino por el enfoque humano y cercano con el que se transmitieron. Agradezco el profesionalismo, la claridad y el compromiso del equipo capacitador. Nos llevamos herramientas concretas y, sobre todo, una mayor conciencia sobre la importancia de cuidarnos entre todos."
    },
    {
      "name": "Micaella López",
      "position": "Gerenta Experiencia del Cliente",
      "company": "Fixed",
      "image": "assets/images/avatar/fixeduy_logo.jpeg?height=80&width=80",
      "rating": 5,
      "text": "Considero que fue una experiencia muy enriquecedora a nivel personal y grupal. Recibimos conocimientos técnicos y prácticos lo que nos permitió afianzar lo aprendido mediante simulaciones, favoreciendo la comprensión de cada tema. Fue una experiencia positiva y necesaria que destaca la importancia de estar preparados ante una situación de emergencia la cual puede marcar la diferencia entre la vida y la muerte. Gracias por compartirnos sus conocimientos!"
    },
    {
      "name": "Lucia Bazán",
      "position": "Agente de Soporte Técnico",
      "company": "Fixed",
      "image": "assets/images/avatar/fixeduy_logo.jpegheight=80&width=80",
      "rating": 5,
      "text": "Considero que fue una experiencia muy buena, interesante. Donde pudimos aprender técnicas que se pueden usar en situaciones de emergencia. Tomando como base la información teórica práctica dada."
    },
    // {
    //   "name": "Federica Echevarría",
    //   "position": "Agente de Soporte Técnico",
    //   "company": "Fixed",
    //   "image": "assets/images/avatar/fixeduy_logo.jpeg?height=80&width=80",
    //   "rating": 5,
    //   "text": "Estuvo muy bueno el curso, ya que aprendes con la práctica, lo cual destaco, además de la buena onda y disposición."
    // }
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
              <div className="text-3xl font-bold font-title text-primary mb-2">1000+</div>
              <div className="text-neutral-600 text-sm">Profesionales capacitados</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-title text-primary mb-2">20+</div>
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
