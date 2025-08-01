import { Heart, Target, Users, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Compromiso",
      description: "Formamos personas preparadas para actuar y acompañar, con responsabilidad y enfoque humano.",
    },
    {
      icon: Target,
      title: "Precisión",
      description: "Aplicamos técnicas actualizadas y simulaciones adaptadas al entorno según cada curso.",
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Creamos redes de cuidado. Capacitamos personas, equipos y organizaciones para responder mejor.",
    },
    {
      icon: Zap,
      title: "Innovación",
      description: "Integramos teoría interactiva, práctica intensiva y tecnología avanzada — incluso con realidad virtual.",
    },
  ]

  return (
    <section id="quienes-somos" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-title text-primary mb-6">¿Quiénes Somos?</h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Somos un centro de formación especializado en atención integral de emergencias.
            <br />
            Nos dedicamos a enseñar cómo actuar ante situaciones críticas, combinando conocimientos técnicos y entrenamiento ante respuesta en emergencia con herramientas de contención psicoemocional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-accent" />
                </div>
                <h3 className="text-xl font-semibold font-title text-primary mb-4">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-light-neutral rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-title text-primary mb-6">Nuestra Misión</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Formar personas y equipos capaces de actuar con seguridad, eficacia y humanidad ante situaciones de emergencia.

              </p>
              <p className="text-neutral-600 leading-relaxed">
                Promovemos el conocimiento aplicado, el entrenamiento y la contención emocional como pilares para construir entornos más preparados, conscientes y responsables.
              </p>
            </div>
            <div className="relative">
              <img
                src="/assets/images/cover.jpg?height=400&width=500"
                alt="Instructor de primeros auxilios"
                className="rounded-xl shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-accent text-light-neutral p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold font-title">15+</div>
                <div className="text-sm">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
