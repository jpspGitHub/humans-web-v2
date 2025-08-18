'use client'

import { ArrowRight, Shield, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import logo from './../public/assets/images/logo-large-white.svg'
import Image from "next/image"
import { useRouter } from "next/router"
import { scrollToSection } from "@/lib/utils"

export function HeroSection() {


  return (
    <section id="hero" className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/images/cover1.jpeg?height=1080&width=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2  rounded-full text-sm font-medium">
            <Image src={logo.src} alt="logo" width={300} height={500} ></Image>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-title text-light-neutral mb-6 leading-tight">
            Más que salvar vidas
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-neutral-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Formación, acompañamiento y cultura del cuidado para profesionales y empresas
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-primary-accent hover:bg-primary-accent/90 text-light-neutral px-8 py-4 text-lg"
              onClick={() => scrollToSection('contact', 'hero-section')}
            >
              Contactanos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-light-neutral text-light-neutral hover:bg-light-neutral hover:text-primary px-8 py-4 text-lg bg-transparent"
              onClick={() => scrollToSection('services', 'hero-section')}
            >
              Ver Capacitaciones
            </Button>
          </div>
          {/* Scroll Indicator */}
          {/* <div className=" left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-light-neutral/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-light-neutral/50 rounded-full mt-2 animate-pulse" />
            </div>
          </div> */}

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="bg-light-neutral/10 backdrop-blur-sm border-light-neutral/20">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-secondary-accent mx-auto mb-3" />
                <div className="text-2xl font-bold font-title text-light-neutral mb-1">1000+</div>
                <div className="text-neutral-300 text-sm">Profesionales Capacitados</div>
              </CardContent>
            </Card>
            <Card className="bg-light-neutral/10 backdrop-blur-sm border-light-neutral/20">
              <CardContent className="p-6 text-center">
                <Shield className="w-8 h-8 text-secondary-accent mx-auto mb-3" />
                <div className="text-2xl font-bold font-title text-light-neutral mb-1">15+</div>
                <div className="text-neutral-300 text-sm">Años de Experiencia</div>
              </CardContent>
            </Card>
            <Card className="bg-light-neutral/10 backdrop-blur-sm border-light-neutral/20">
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-secondary-accent mx-auto mb-3" />
                <div className="text-2xl font-bold font-title text-light-neutral mb-1">20+</div>
                <div className="text-neutral-300 text-sm">Empresas Atendidas</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>


    </section>
  )
}
