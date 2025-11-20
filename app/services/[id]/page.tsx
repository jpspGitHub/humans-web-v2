'use client'
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CompaniesSection } from "@/components/companies-section"
import { PageHeroSection } from "@/components/page-hero-section"
import services from "@/data/services"
import { use } from "react"
import Image from "next/image"
import logo from './../../../public/assets/images/logo-large.svg'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"


export default function SerivceHomePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const service = services.find(s => s.id === id);
    const router = useRouter();

    if (service) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <main>
                    <PageHeroSection title={service?.title || ""} />
                    <div className="py-20 bg-neutral-50">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold font-title text-primary mb-">{service.title}</h2>
                            <p className="text-lg text-neutral-600 leading-relaxed">{service.description}</p>
                        </div>
                        {service?.detailComponent ?? ''}
                    </div>

                    < ContactSection />
                </main>
                <Footer />
            </div>
        )
    }

    return <>
        <div className="py-20  w-full inline-flex flex-col items-center justify-center">
            <div className="inline-flex items-center px-4 py-2  rounded-full text-sm font-medium">
                <Image src={logo.src} alt="logo" width={300} height={500} ></Image>
            </div>
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold font-title text-primary mb-6">Servicio no encontrado</h2>
                <p className="text-lg text-neutral-600 leading-relaxed">Lo sentimos, el servicio que buscas no se encuentra disponible.</p>
            </div>
            <div className="max-w-3xl mx-auto text-center mb-16">
                <Button
                    variant="outline"
                    className="w-full border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-light-neutral bg-transparent"
                    onClick={() =>
                        router.push('/')
                    }
                >
                    Volver al inicio
                </Button>
            </div>
        </div >
    </>
}
