import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Download,
  Waves,
  HeartPulse,
  Users,
  Globe2,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "CIREA Uruguay 2026 | Centro HUMAN",
  description:
    "Campamento Internacional de Rescate y Emergencias Acuáticas. Del 6 al 9 de noviembre de 2026 en La Paloma, Rocha, Uruguay. Conoce el programa y consulta por tu inscripción.",
  openGraph: {
    title: "CIREA Uruguay 2026",
    description:
      "Cuatro días de formación en rescate y emergencias acuáticas. La Paloma, 6 al 9 de noviembre.",
    images: ["/eventos/cirea-2026.jpg"],
  },
};

const program = [
  [
    "Viernes 6",
    "Apertura y academia",
    "Bienvenida institucional, presentación de las delegaciones y bloque técnico con actualizaciones de México, Uruguay, Chile y Argentina. Briefing operativo.",
  ],
  [
    "Sábado 7",
    "Entrenamiento práctico",
    "Rotación en entornos acuáticos: rescate con tablas y tablones, restricción y soporte vital básico aplicado al ahogamiento, trabajo en equipo y transferencia asistencial.",
  ],
  [
    "Domingo 8",
    "Simulaciones y rally",
    "Rally internacional e integración operativa. Estaciones simultáneas en ambiente natural con todas las delegaciones y simulaciones bajo estrés controlado.",
  ],
  [
    "Lunes 9",
    "Experiencia avanzada",
    "Actividades especiales de cierre que integran y profundizan las competencias trabajadas durante el campamento.",
  ],
];
const topics = [
  {
    icon: Waves,
    title: "Rescate y prevención",
    text: "Prevención del ahogamiento, gestión del riesgo acuático, rescate cuerpo a cuerpo, tablas, tablones y moto de agua. Restricción de movilidad espinal y extracción segura.",
  },
  {
    icon: HeartPulse,
    title: "Soporte vital y post rescate",
    text: "Soporte vital básico aplicado al ahogamiento: RCP, DEA, ventilaciones y oxigenoterapia. Atención inicial, hipotermia y continuidad asistencial.",
  },
  {
    icon: Users,
    title: "Factor humano y gestión",
    text: "Psicología de la emergencia, estrés, toma de decisiones y cuidado del rescatista. Gestión de incidentes complejos y lecciones internacionales.",
  },
  {
    icon: Globe2,
    title: "Integración operativa internacional",
    text: "Escenarios integrados con múltiples técnicas y delegaciones simultáneas. Simulación final en ambiente natural con todos los recursos.",
  },
];
const speakers = [
  ["Fabrizzio Piffaretti", "Magíster en Emergencias", "Uruguay · Centro HUMAN"],
  [
    "Marcelo Pisano",
    "Instructor en Salvamento Acuático",
    "Uruguay · Centro HUMAN",
  ],
  ["Silvana Fonseca", "Licenciada en Psicología", "Uruguay · Centro HUMAN"],
  [
    "Denis Echenique",
    "Enfermero · Técnico en Urgencias Médicas",
    "Uruguay · Centro HUMAN",
  ],
  [
    "Sebastián Tizzano",
    "Técnico Universitario en Emergencias Médicas",
    "Argentina · ESBRA",
  ],
  [
    "Cristian Cecchi",
    "Técnico Universitario en Emergencias Médicas",
    "Argentina · ESBRA",
  ],
  [
    "César Escobar",
    "Profesor de Educación Física",
    "Chile · Guardavidas SHARK",
  ],
  ["David Troncoso", "Instructor de Guardavidas", "Chile · Guardavidas SHARK"],
  [
    "Samuel Hernández",
    "Mtro. Especialista en Salvamento Acuático",
    "México · GEDISA",
  ],
  [
    "Rafael Lins",
    "Profesor de Educación Física · Instructor de Guardavidas",
    "Brasil · APASA/GV",
  ],
];
const contactUrl = "/contacto?evento=cirea-2026";

export default function EventPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="relative overflow-hidden bg-primary text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border-[80px] border-primary-accent/10"
          />
          <div className="container relative mx-auto grid items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-24">
            <div>
              {/* <Link href="/" className="text-sm text-cyan-200 underline underline-offset-4">Inicio / Eventos</Link> */}
              <p className="mb-4 mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Primera edición internacional
              </p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                Rescate y emergencias acuáticas
                <span className="mt-3 block text-cyan-300">Uruguay 2026.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200">
                Un mismo mar. Cinco países. Cuatro días para entrenar, compartir
                y fortalecer tu preparación junto a referentes del rescate
                acuático.
              </p>
              <div className="my-7 space-y-3 text-sm sm:text-base">
                <p className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-cyan-300" />6 al 9 de
                  noviembre de 2026
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-cyan-300" />
                  La Paloma, Rocha · Uruguay
                </p>
              </div>
              <Link
                href={contactUrl}
                className="inline-flex items-center gap-3 rounded-lg bg-white px-6 py-4 font-semibold text-primary transition hover:bg-cyan-100"
              >
                Consultar por inscripción
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div>
              <Image
                src="/eventos/cirea-2026.jpg"
                alt="CIREA: Campamento Internacional de Rescate y Emergencias Acuáticas, La Paloma 2026"
                width={1100}
                height={619}
                priority
                className="w-full rounded-xl shadow-2xl"
              />
              <p className="mt-4 text-sm text-slate-300">
                Organizan Centro HUMAN y Primera Respuesta.
              </p>
            </div>
          </div>
        </section>
        <section
          aria-label="El evento en números"
          className="border-b bg-primary-50"
        >
          <div className="bg-primary/5 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                ["4", "Días de formación intensiva"],
                ["5", "Países participantes"],
                ["100", "Participantes cursillistas"],
                ["4", "Estaciones prácticas simultáneas"],
              ].map(([number, label]) => (
                <div>
                  <div className="text-3xl font-bold font-title text-primary mb-2">
                    {number}
                  </div>
                  <div className="text-neutral-600 text-sm">{label}</div>
                </div>
                // <div key={label}>
                //   <p className="text-4xl font-bold text-primary-accent-700">
                //     {number}
                //   </p>
                //   <p className="mt-2 text-sm text-slate-600">{label}</p>
                // </div>
              ))}
            </div>
          </div>
        </section>
        <section className="container mx-auto grid gap-10 px-6 py-20 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-accent-700">
              El encuentro
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary">
              Aprender juntos. Actuar mejor.
            </h2>
            <p className="mt-6 leading-relaxed text-slate-600">
              El Campamento Internacional de Rescate y Emergencias Acuáticas
              reúne a instructores y participantes de Uruguay, Argentina, Chile,
              México y Brasil para una experiencia de formación intensiva.
              Combina academia, práctica y simulaciones operativas en las costas
              uruguayas.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              La Paloma ofrece playas extensas y océano abierto: un entorno
              natural para el entrenamiento y el trabajo en equipo. El encuentro
              incluye dos entornos de entrenamiento, una simulación final
              internacional y una mesa técnica internacional.
            </p>
          </div>
          <aside className="rounded-2xl bg-primary-50 p-8">
            <h2 className="text-2xl font-semibold text-primary">
              ¿A quién está dirigido?
            </h2>
            <ul className="mt-5 space-y-4 text-slate-700">
              <li>
                <strong>Rescatistas acuáticos:</strong> guardavidas, socorristas
                y primeros respondedores en entornos acuáticos y costeros.
              </li>
              <li>
                <strong>Profesionales de emergencias:</strong> técnicos,
                paramédicos y profesionales de la salud que trabajan en
                ambientes acuáticos.
              </li>
              <li>
                <strong>Deportistas acuáticos:</strong> surfistas, practicantes
                de SUP, nadadores de aguas abiertas y personas con interés en
                rescate y seguridad.
              </li>
            </ul>
          </aside>
        </section>
        <section className="bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-accent-700">
              Contenidos
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary">
              Preparación para escenarios reales
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {topics.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-xl border border-slate-200 bg-white p-7"
                >
                  <Icon className="mb-5 h-8 w-8 text-primary-accent-700" />
                  <h3 className="text-xl font-semibold text-primary">
                    {title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="container mx-auto px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-accent-700">
            Del 6 al 9 de noviembre
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary">
            Cuatro días. Una experiencia.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {program.map(([day, title, text], i) => (
              <article
                key={day}
                className="rounded-xl border border-slate-200 p-6"
              >
                <p className="text-sm font-semibold text-primary-accent-700">
                  DÍA {i + 1} · {day}
                </p>
                <h3 className="mb-4 mt-5 text-xl font-semibold text-primary">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="bg-primary-50 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-accent-700">
              Nuestros ponentes
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary">
              Experiencia que cruza fronteras
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {speakers.map(([name, role, country]) => (
                <article key={name} className="rounded-xl bg-white p-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary-accent-700">
                    {country}
                  </p>
                  <h3 className="text-lg font-semibold text-primary">{name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="container mx-auto px-6 py-20">
          <div className="rounded-2xl bg-primary p-8 text-white sm:p-12">
            <p className="text-sm uppercase tracking-widest text-cyan-200">
              Nos encontramos en La Paloma
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Sé parte de CIREA 2026.
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate-200">
              Contacta al equipo para conocer las condiciones de inscripción,
              los requisitos de participación y la información logística.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={contactUrl}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 font-semibold text-primary hover:bg-cyan-100"
              >
                Quiero más información
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="/eventos/CIREA-U2026.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-4 hover:bg-white/10"
              >
                <Download className="h-5 w-5" />
                Descargar presentación (PDF)
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
