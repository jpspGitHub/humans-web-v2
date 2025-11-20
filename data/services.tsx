import { BookOpen, Building, Users, BadgeIcon as Certificate } from "lucide-react"
import { EmergencyResponseDetails } from "@/components/serviceDetails/emergency-response-details"

const services = [
    {
        id: "4db432c2-37b9-4a81-8748-a7c4fecc53a6",
        icon: BookOpen,
        title: "Respuesta en Emergencias Urbanas, Acuáticas, Agrestes Y Confinados",
        description: "Entrenamiento técnico para intervenir con eficacia en distintos escenarios críticos. Formamos primeros respondientes preparados para actuar con seguridad, precisión y humanidad cuando cada segundo cuenta.",
        features: ["Materiales y recursos completos", "Certificaciones internacionales", "Certificacion nacional (ley 18.360 - decreto 330/009)"],
        duration: "16-40 horas",
        action: "/services/4db432c2-37b9-4a81-8748-a7c4fecc53a6",
        actionText: "Averiguar más",
        detailComponent: <EmergencyResponseDetails />
    },
    {
        id: "87e810a2-554d-4f7b-89fa-641b3197928c",
        icon: Building,
        title: "Preparación Física y Respuesta Operativa",
        description:
            `Entrenamiento técnico y corporal enfocado en la exigencia real del rol. Pensado para aspirantes a guardavidas, nadadores de aguas abiertas, personal operativo, brigadistas y equipos de respuesta rápida.`,
        features: ["Nadadores de Aguas Abiertas | Guardavidas", "Brigadas de emergencia", "Equipos de Respuesta Rapida"],
        duration: "Personalizado",
        action: "contact",
        actionText: "Quiero más información"

    },
    {
        id: "e6f42c4a-1b3c-4d5e-9f0a-1b3c4d5e9f0a",
        icon: Users,
        title: "Bienestar y Salud",
        description: "Articulamos cuerpo, mente y vínculo humano para brindar contención, acompañar y sostener emocionalmente a otros en momentos críticos. Sabemos que intervenir no es solo una cuestión técnica, por eso integramos la psicología como parte esencial de la preparación.",
        features: ["Apoyo emocional en crisis", "Autocuidado del interviniente", "Primeros Auxilios Psicológicos (PAPs)"],
        duration: "80 horas",
        action: "contact",
        actionText: "Quiero más información"

    },
    // {
    //   icon: Certificate,
    //   title: "Recertificaciones",
    //   description: "Mantén tus conocimientos actualizados con nuestros programas de recertificación periódica.",
    //   features: ["Actualización de técnicas", "Nuevos protocolos", "Certificado renovado"],
    //   duration: "8 horas",
    // },
]

export default services;