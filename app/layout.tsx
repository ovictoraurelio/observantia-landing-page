import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans } from "next/font/google"
import "./globals.css"

const notoSans = Noto_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans" })

export const metadata: Metadata = {
  title: "ObservantIA - Gestão Inteligente de Documentos Administrativos",
  description:
    "Plataforma open source para padronização, rastreamento e validação de documentos administrativos no IFPE",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={notoSans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
