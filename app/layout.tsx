// app/layout.tsx
import type React from "react"
import type { Metadata } from "next"
import { Poppins, IBM_Plex_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Fonte principal mais profissional
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

// Fonte alternativa para código (agora com subsets especificado)
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],       // <-- necessário para habilitar preload
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Angelo Souza - Desenvolvedor Backend",
  description:
    "Desenvolvedor Backend especializado em Ruby on Rails, Python e JavaScript. Graduando em Análise e Desenvolvimento de Sistemas.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`scroll-smooth ${poppins.variable} ${ibmPlexSans.variable}`}
      suppressHydrationWarning
    >
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
