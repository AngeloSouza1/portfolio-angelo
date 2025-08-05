"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigateToSection = (sectionId: string) => {
    // Apenas dispara o evento para efeito dissolve, sem scroll
    const event = new CustomEvent("sectionTransition", {
      detail: { targetSection: sectionId },
    })
    window.dispatchEvent(event)
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="text-2xl font-bold text-slate-800 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            onClick={() => {
              const event = new CustomEvent("sectionTransition", {
                detail: { targetSection: "hero" },
              })
              window.dispatchEvent(event)
            }}
          >
            Angelo Souza
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["sobre", "habilidades", "projetos", "contato"].map((item) => (
              <button
                key={item}
                onClick={() => navigateToSection(item)}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 capitalize font-medium"
              >
                {item === "habilidades" ? "Skills" : item}
              </button>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {mounted && (
              <>
                {theme === "dark" ? (
                  <Sun size={20} className="text-yellow-500" />
                ) : (
                  <Moon size={20} className="text-slate-600" />
                )}
              </>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {["sobre", "habilidades", "projetos", "contato"].map((item) => (
                <button
                  key={item}
                  onClick={() => navigateToSection(item)}
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 capitalize font-medium text-left"
                >
                  {item === "habilidades" ? "Skills" : item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
