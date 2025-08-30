"use client"

import type React from "react"
import { useEffect, useState, useRef, ReactNode } from "react"

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  const [isDissolving, setIsDissolving] = useState(false)
  const [isActive, setIsActive] = useState(id === "hero") // Hero ativo por padrão
  const [hasBeenActive, setHasBeenActive] = useState(id === "hero")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleSectionTransition = (event: CustomEvent) => {
      const targetSection = event.detail.targetSection

      if (targetSection === id) {
        // Esta é a seção de destino - torna ativa e aplica efeito
        setIsActive(true)
        setIsDissolving(true)
        setHasBeenActive(true)

        setTimeout(() => {
          setIsDissolving(false)
        }, 800)
      } else {
        // Outras seções ficam inativas
        setIsActive(false)
        setIsDissolving(false)
      }
    }

    window.addEventListener("sectionTransition", handleSectionTransition as EventListener)

    return () => {
      window.removeEventListener("sectionTransition", handleSectionTransition as EventListener)
    }
  }, [id])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`
        ${className}
        ${isActive ? "section-active" : "section-hidden"}
        ${isDissolving ? "section-dissolve-enter" : ""}
        section-centered
        transition-all duration-300 ease-out
      `}
    >
      <div className="w-full">{hasBeenActive ? children : null}</div>
    </section>
  )
}
