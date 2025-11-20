'use client'

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import logo from './../public/assets/images/logo-large-white.svg'
import Image from "next/image"
import { scrollToSection } from "@/lib/utils"

export function PageHeroSection({ title }: { title: string }) {
    return (
        <section id="hero" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-title text-light-neutral mt-6 mb-8 leading-tight">
                        {title}
                    </h1>


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
                    </div>
                </div>
            </div>


        </section>
    )
}
