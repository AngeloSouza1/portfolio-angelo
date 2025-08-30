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

  const navigateToSection = (sectionId: string, event?: React.MouseEvent) => {
    // Impede o comportamento padrão de scroll
    event?.preventDefault();
    
    // Fecha o menu mobile se estiver aberto
    setIsMenuOpen(false);
    
    // Adiciona classe para evitar scroll durante a transição
    document.body.style.overflow = 'hidden';
    
    // Dispara o evento de transição
    const transitionEvent = new CustomEvent("sectionTransition", {
      detail: { targetSection: sectionId },
    });
    window.dispatchEvent(transitionEvent);
    
    // Rola suavemente para a seção após um pequeno atraso
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      
      // Restaura o scroll após a transição
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 1000);
    }, 50);
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
            onClick={(e) => navigateToSection("hero", e)}
          >
            Angelo Souza
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["sobre", "habilidades", "projetos", "contato"].map((item) => (
              <button
                key={item}
                onClick={(e) => navigateToSection(item, e)}
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
                  onClick={(e) => navigateToSection(item, e)}
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
