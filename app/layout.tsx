import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Montserrat } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
export const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-montserrat"
})

export const metadata: Metadata = {
  title: "OBSERVANTIA - Transparência e Conformidade em Cada Contrato",
  description:
    "Plataforma open source para padronização, rastreamento e validação de documentos administrativos no IFPE. Gestão inteligente de editais e contratos com eficiência, transparência e conformidade.",
  keywords: ["OBSERVANTIA", "gestão documental", "contratos", "editais", "IFPE", "transparência", "conformidade"],
  authors: [{ name: "IFPE Reitoria" }],
  creator: "IFPE",
  publisher: "IFPE",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://observantia.ifpe.edu.br",
    title: "OBSERVANTIA - Transparência e Conformidade em Cada Contrato",
    description: "Plataforma open source para gestão inteligente de documentos administrativos no IFPE",
    siteName: "OBSERVANTIA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OBSERVANTIA - Transparência e Conformidade em Cada Contrato",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OBSERVANTIA - Transparência e Conformidade em Cada Contrato",
    description: "Plataforma open source para gestão inteligente de documentos administrativos no IFPE",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
