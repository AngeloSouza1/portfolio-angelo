"use client"

import { useState, useCallback, useRef, useEffect } from "react"

export type TransitionType =
  | "fade"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "zoom-out"
  | "flip"
  | "morph"
  | "dissolve"

export interface SectionTransitionState {
  currentSection: string
  isTransitioning: boolean
  transitionType: TransitionType
  previousSection: string | null
}

export function useSectionTransition() {
  const [state, setState] = useState<SectionTransitionState>({
    currentSection: "hero",
    isTransitioning: false,
    transitionType: "dissolve", // Padronizado para dissolve
    previousSection: null,
  })

  const transitionTimeoutRef = useRef<NodeJS.Timeout>()

  const navigateToSection = useCallback(
    (sectionId: string) => {
      if (state.isTransitioning || state.currentSection === sectionId) return

      // Prevent default scrolling and add overflow hidden
      document.body.style.overflow = 'hidden';
      
      // Clear any existing timeout
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current)
      }

      setState((prev) => ({
        ...prev,
        isTransitioning: true,
        transitionType: "dissolve",
        previousSection: prev.currentSection,
      }))

      // Complete transition after animation
      transitionTimeoutRef.current = setTimeout(() => {
        // Restore overflow after transition
        document.body.style.overflow = '';
        
        setState((prev) => ({
          ...prev,
          currentSection: sectionId,
          isTransitioning: false,
          previousSection: null,
        }));

        // Scroll to the top of the new section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 800) // Match CSS transition duration
    },
    [state.isTransitioning, state.currentSection],
  )

  const getTransitionClass = useCallback(
    (sectionId: string) => {
      const { currentSection, isTransitioning, transitionType, previousSection } = state

      if (sectionId === currentSection && !isTransitioning) {
        return "section-active"
      }

      if (sectionId === previousSection && isTransitioning) {
        return `section-exit section-exit-${transitionType}`
      }

      if (sectionId === currentSection && isTransitioning) {
        return `section-enter section-enter-${transitionType}`
      }

      return "section-hidden"
    },
    [state],
  )

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current)
      }
    }
  }, [])

  return {
    ...state,
    navigateToSection,
    getTransitionClass,
  }
}

// Hook para detectar seção ativa baseada no scroll (opcional)
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const sections = ["hero", "sobre", "habilidades", "projetos", "contato"]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" },
    )

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return activeSection
}
