import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import logo from './../public/assets/images/logo-large-white.svg'

export function Footer() {
  const quickLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#quienes-somos", label: "Quiénes Somos" },
    { href: "#capacitaciones", label: "Capacitaciones" },
    { href: "#contacto", label: "Contacto" },
  ]

  const services = [
    "Capacitaciones Individuales",
    "Programas Empresariales",
    "Formación de Instructores",
    "Recertificaciones",
  ]

  return (
    <footer className="bg-primary text-light-neutral">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 ">
              <Image src={logo.src} alt="logo" width={150} height={150} ></Image>

            </div>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=61578440523510&locale=es_LA" className="text-neutral-300 hover:text-primary-accent transition-colors" >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://www.instagram.com/centro_human_uy/" className="text-neutral-300 hover:text-primary-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/fabrizziopiffarettiromero/" className="text-neutral-300 hover:text-primary-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-title mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-300 hover:text-light-neutral transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold font-title mb-4">Servicios</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-neutral-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold font-title mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-accent flex-shrink-0" />
                <span className="text-neutral-300 text-sm">(+598) 094 837 649</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-accent flex-shrink-0" />
                <span className="text-neutral-300 text-sm">centrohuman.uy@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-accent flex-shrink-0" />
                <span className="text-neutral-300 text-sm">Canelones / Maldonado, Uruguay</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-300 text-sm">© 2025 HUMAN. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {/* <Link href="#" className="text-neutral-300 hover:text-light-neutral text-sm transition-colors">
                Política de Privacidad
              </Link> */}
              {/* <Link href="#" className="text-neutral-300 hover:text-light-neutral text-sm transition-colors">
                Términos de Servicio
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
