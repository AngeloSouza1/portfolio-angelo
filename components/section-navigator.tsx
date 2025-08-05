"use client"

import { useState } from "react"
import { ChevronDown, Home, User, Code, Briefcase, Mail } from "lucide-react"
import { useSectionTransition, type TransitionType } from "@/hooks/useSectionTransition"

const sections = [
  { id: "hero", label: "Início", icon: Home },
  { id: "sobre", label: "Sobre", icon: User },
  { id: "habilidades", label: "Skills", icon: Code },
  { id: "projetos", label: "Projetos", icon: Briefcase },
  { id: "contato", label: "Contato", icon: Mail },
]

const transitionTypes: { type: TransitionType; label: string }[] = [
  { type: "fade", label: "Fade" },
  { type: "slide-up", label: "Slide Up" },
  { type: "slide-down", label: "Slide Down" },
  { type: "slide-left", label: "Slide Left" },
  { type: "slide-right", label: "Slide Right" },
  { type: "zoom-in", label: "Zoom In" },
  { type: "zoom-out", label: "Zoom Out" },
  { type: "flip", label: "Flip" },
  { type: "morph", label: "Morph" },
  { type: "dissolve", label: "Dissolve" },
]

export function SectionNavigator() {
  const { currentSection, isTransitioning, navigateToSection } = useSectionTransition()
  const [selectedTransition, setSelectedTransition] = useState<TransitionType>("fade")
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-8 left-8 z-50">
      {/* Transition Type Selector */}
      <div
        className={`mb-4 transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/40 dark:border-slate-700/40 p-3">
          <p className="text-xs font-medium text-slate-600 dark:text-slate-300 mb-2">Efeito de Transição:</p>
          <div className="grid grid-cols-2 gap-1">
            {transitionTypes.map(({ type, label }) => (
              <button
                key={type}
                onClick={() => setSelectedTransition(type)}
                className={`px-2 py-1 text-xs rounded transition-colors duration-200 ${
                  selectedTransition === type
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Section Navigation */}
      <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/40 dark:border-slate-700/40 p-2">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          <span className="text-sm font-medium">Navegação</span>
          <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {/* Section Buttons */}
        <div
          className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="space-y-1 pt-2 border-t border-slate-200 dark:border-slate-700">
            {sections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => navigateToSection(id, selectedTransition)}
                disabled={isTransitioning}
                className={`w-full flex items-center gap-3 p-2 rounded-lg text-sm transition-all duration-200 ${
                  currentSection === id
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400"
                } ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <Icon size={16} />
                <span>{label}</span>
                {isTransitioning && currentSection === id && (
                  <div className="ml-auto w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
