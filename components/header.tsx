"use client"

import { useState } from "react"
import { Menu, Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import logo from './../public/assets/images/logo-mini.svg'
import Image from "next/image"
import { scrollToSection } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#hero", label: "Inicio" },
    { href: "#about", label: "Quiénes Somos" },
    // { href: "#metodologia", label: "Metodología" },
    { href: "#services", label: "Capacitaciones" },
    // { href: "#empresas", label: "Empresas" },
    { href: "#contact", label: "Contacto" },
  ]

  return (
    <header className="fixed top-0 w-full bg-light-neutral/95 backdrop-blur-sm border-b border-neutral-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo.src} alt="Logo" width={50} height={50} className="rounded-full" />
            {/* <div className="w-8 h-8 bg-primary-accent rounded-full flex items-center justify-center">
              
              
            </div>
            <span className="text-xl font-bold font-title text-primary">HUMAN</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-neutral-700 hover:text-primary-accent transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-primary-accent hover:bg-primary-accent/90 text-light-neutral"
              onClick={() => scrollToSection('contact')}
            >Contactar Ahora</Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-neutral-700 hover:text-primary-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  className="bg-primary-accent hover:bg-primary-accent/90 text-light-neutral mt-4"
                  onClick={() => scrollToSection('contact')}
                >
                  Contactar Ahora
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
