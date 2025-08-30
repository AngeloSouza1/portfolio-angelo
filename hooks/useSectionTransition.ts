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

      // Prevent any current scroll
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
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
      }));

      // Complete transition after animation
      transitionTimeoutRef.current = setTimeout(() => {
        // Restore scroll position and styles
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        
        if (scrollY) {
          window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
        
        setState((prev) => ({
          ...prev,
          currentSection: sectionId,
          isTransitioning: false,
          previousSection: null,
        }));

        // Scroll to the section after a small delay to ensure the DOM is updated
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      }, 1000); // Slightly increased to ensure smooth transition
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
