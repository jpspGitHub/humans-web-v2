'use client'

import { BookOpen, Building, Users, BadgeIcon as Certificate } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils"
import { title } from "process"

export function TermsAndConditions() {
    const terms = [
        {
            title: "Inscripciones y Pagos",
            items: [
                "La inscripción se confirma únicamente con el pago total o la seña correspondiente.",
                "Las reservas con seña tendrán validez hasta la fecha límite informada por Human."
            ],

        },
        {
            title: "Cancelaciones y Reprogramaciones",
            items: [
                "No se realizan reembolsos por cancelaciones por parte del participante.",
                "En algunos cursos, y sujeto a disponibilidad, se podrá reprogramar la asistencia para una próxima fecha.",
                "Si un curso es cancelado por Human, se ofrecerá reprogramación sin costo o devolución total del importe abonado."
            ],
        },
        {
            title: "Certificaciones",
            items: [
                "La entrega de certificados requiere la asistencia completa y, si corresponde, la aprobación de las evaluaciones.",
                "Las certificaciones nacionales e internacionales emitidas por Human tienen validez según las normativas vigentes de cada institución certificadora.",
            ],
        },
        {
            title: "Uso de Contenidos y Plataforma Online",
            items: [
                "El acceso a material digital y cursos online es personal e intransferible.",
                "No está permitido reproducir, distribuir o compartir los contenidos sin autorización de Human.",
            ]
        },
        {
            title: "Protección de Datos",
            items: [
                "Human garantiza la confidencialidad de los datos personales proporcionados, de acuerdo con la normativa vigente.",
            ]
        }
    ]

    return (
        <section id="services" className="py-20 bg-light-neutral">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold font-title text-primary mb-6">Términos y Condiciones – Centro Human</h2>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                        Al inscribirse en cualquiera de nuestros cursos, el participante acepta las siguientes condiciones
                    </p>
                </div>

                <div className="flex flex-col justify-between items-center">

                    {terms.map((term, index) => (
                        <div
                            key={index}
                            className="pb-4 mb-8 w-full max-w-3xl mx-auto bg-white rounded-lg p-6"
                        >
                            <div className="pb-4">
                                <h2 className="text-xl font-title text-primary">{term.title}</h2>
                            </div>
                            <div>
                                <ul className="space-y-2 mb-6">
                                    {term.items.map((item, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                                            <div className="w-2 h-2 bg-secondary-accent rounded-full mr-3 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
