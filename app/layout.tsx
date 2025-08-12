import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
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

export const metadata: Metadata = {
  title: "HUMAN - Especialistas en Primeros Auxilios",
  description: "Formación, acompañamiento y cultura del cuidado para profesionales y empresas",
  icons: {
    icon: "/assets/images/logo-mini.svg",
  },
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
