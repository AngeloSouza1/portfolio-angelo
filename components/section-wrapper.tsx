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

  // Determina a classe com base no estado da seção
  const getSectionClass = () => {
    if (isActive && !isDissolving) return "section-active"
    if (isDissolving) return "section-enter"
    return "section-hidden"
  }

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`
        ${className}
        ${getSectionClass()}
        section-centered
        transition-all duration-500 ease-out
      `}
      style={{
        position: isActive ? 'relative' : 'absolute',
        width: '100%',
        top: 0,
        left: 0,
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? 'auto' : 'none',
        transform: isActive ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      <div className="w-full">{hasBeenActive ? children : null}</div>
    </section>
  )
}
