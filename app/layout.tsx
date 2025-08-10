// app/layout.tsx
import type React from "react"
import type { Metadata } from "next"
import { Poppins, IBM_Plex_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
  variable: "--font-poppins",
  display: "swap",
})
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-ibm-plex",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Angelo Souza – Desenvolvedor Backend",
  description: "Dev Backend (Rails, Python, JS). Graduando em Análise de Sistemas.",
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`scroll-smooth ${poppins.variable} ${ibmPlexSans.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col m-0 p-0">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {/* wrapper principal das páginas */}
          <main className="site-main flex-grow overflow-x-hidden">
            {children}
          </main>

          {/* footer único */}
          <footer className="bg-slate-800 dark:bg-slate-900 text-white py-8">
            <div className="container mx-auto px-6 text-center text-slate-300 text-sm">
              {/* © {new Date().getFullYear()} Angelo Souza. Todos os direitos reservados. */}
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
