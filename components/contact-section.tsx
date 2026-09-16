import { Phone, Mail, MapPin, BookText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection({ event = false }: { event?: boolean }) {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["(+598) 094 837 649", "(+598) 099 907 624"],
      action: "Llamar ahora",
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        event ? "contacto@centrohuman.com" : "centrohuman.uy@gmail.com",
      ],
      action: "Enviar email",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      details: event
        ? ["Salinas, Canelones, Uruguay"]
        : ["Canelones / Maldonado, Uruguay", "Atendemos a nivel nacional"],
      action: "Ver mapa",
    },
    {
      icon: BookText,
      title: "Registro INEFOP",
      details: ["N° 17-1996"],
      action: "Ver registro",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-title text-primary mb-6">
            Contáctanos
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            {event
              ? "Consulta por tu participación en CIREA Uruguay 2026. Escríbenos para conocer las condiciones de inscripción y los detalles de la experiencia."
              : "Estamos listos para ayudarte a implementar programas de capacitación en primeros auxilios. Contáctanos para más información."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold font-title text-primary mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-neutral-600 text-sm mb-1"
                          >
                            {detail}
                          </p>
                        ))}
                        {/* <Button variant="link" className="text-primary-accent p-0 h-auto text-sm mt-2">
                          {info.action}
                        </Button> */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold font-title text-primary mb-6">
                  Envíanos un mensaje
                </h3>
                <form
                  className="space-y-6"
                  action={"https://formspree.io/f/mzzvapvo"}
                  method="POST"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-neutral-700 mb-2"
                      >
                        Nombre completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Tu nombre"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-700 mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="tu@email.com"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-neutral-700 mb-2"
                      >
                        Teléfono
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+598 123 456 789 "
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-neutral-700 mb-2"
                      >
                        Empresa (opcional)
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Nombre de tu empresa"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Servicio de interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue={event ? "cirea-2026" : ""}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="cirea-2026">CIREA Uruguay 2026</option>
                      <option value="individual">
                        Capacitación Individual
                      </option>
                      <option value="empresarial">Programa Empresarial</option>
                      <option value="recertificacion">Recertificación</option>
                      <option value="personalizado">
                        Programa Personalizado
                      </option>
                      <option value="personalizado">Otros Programas</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      defaultValue={
                        event
                          ? "Hola, me interesa participar en CIREA Uruguay 2026. Quisiera recibir información sobre la inscripción."
                          : ""
                      }
                      placeholder="Cuéntanos más sobre tus necesidades de capacitación..."
                      className="w-full"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary-accent hover:bg-primary-accent/90 text-light-neutral"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
