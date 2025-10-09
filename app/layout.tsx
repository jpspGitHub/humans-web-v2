import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

const BASE = new URL("https://centrohuman.com")


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
})


export async function generateMetadata() {

  return {
    metadataBase: BASE,
    title: "HUMAN - Especialistas en Primeros Auxilios",
    description: "Formación, acompañamiento y cultura del cuidado para profesionales y empresas",
    icons: {
      icon: "/assets/images/logo-mini.svg",
    },

    openGraph: {
      title: "HUMAN - Especialistas en Primeros Auxilios",
      description: "Formación, acompañamiento y cultura del cuidado para profesionales y empresas",
      url: BASE,
      siteName: "Centro HUMAN",
      type: "website",
      locale: 'es_ES',
      images: [
        { url: '/assets/images/cover3.jpeg', width: 1200, height: 630, alt: 'HUMAN - Especialistas en Primeros Auxilios' },
        { url: '/assets/images/cover1.jpeg', width: 1200, height: 630, alt: 'HUMAN - Especialistas en Primeros Auxilios' }
      ],
    },

    robots: { index: true, follow: true },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
