import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contacto | Centro HUMAN",
  description:
    "Contacta a Centro HUMAN por capacitaciones o por el Campamento Internacional de Rescate y Emergencias Acuáticas Uruguay 2026.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ evento?: string }>;
}) {
  const event = (await searchParams).evento === "cirea-2026";
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="bg-primary px-6 py-14 text-white">
          <div className="mx-auto max-w-6xl">
            {/* <Link href={event ? "/eventos/cirea-2026" : "/"} className="text-sm text-cyan-200 underline underline-offset-4">{event ? "Volver a CIREA 2026" : "Volver al inicio"}</Link> */}
            <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
              Conversemos.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-200">
              {event
                ? "Tu próxima experiencia de formación empieza aquí."
                : "Formación, acompañamiento y una cultura del cuidado."}
            </p>
            {event && (
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  className="site-home-link rounded-lg bg-white px-5 py-3 font-semibold text-primary"
                  href="https://wa.me/59899907624?text=Hola%2C%20me%20interesa%20CIREA%20Uruguay%202026"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar por WhatsApp
                </Link>
                <Link
                  className="bg-primary-accent hover:bg-primary-accent/90 text-light-neutral px-8 py-4 text-lg site-home-link rounded-lg border border-white/40 px-5 py-3"
                  href="mailto:contacto@centrohuman.com?subject=Consulta%20CIREA%202026"
                >
                  Escribir por email
                </Link>
                {/* <Button
                  size="lg"
                  className="bg-primary-accent hover:bg-primary-accent/90 text-light-neutral px-8 py-4 text-lg"
                  onClick={() => scrollToSection("contact", "hero-section")}
                >
                  Contactanos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button> */}
              </div>
            )}
          </div>
        </section>
        <ContactSection event={event} />
      </main>
      <Footer />
    </>
  );
}
