"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  delay?: number
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.15, rootMargin = "0px 0px -100px 0px", triggerOnce = true, delay = 0 } = options
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Adiciona delay personalizado antes de ativar
          setTimeout(() => {
            setIsVisible(true)
          }, delay)

          if (triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce, delay])

  return { elementRef, isVisible }
}

export function useParallax() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return offset
}

// Hook para animações em cascata baseadas em tempo
export function useTimedAnimation(itemCount: number, startDelay = 500, itemDelay = 200) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false))
  const [hasStarted, setHasStarted] = useState(false)
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)

          // Inicia a animação em cascata após o delay inicial
          setTimeout(() => {
            for (let i = 0; i < itemCount; i++) {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  const newState = [...prev]
                  newState[i] = true
                  return newState
                })
              }, i * itemDelay)
            }
          }, startDelay)

          if (containerRef.current) {
            observer.unobserve(containerRef.current)
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [itemCount, startDelay, itemDelay, hasStarted])

  return { containerRef, visibleItems }
}

// Hook para animações em cascata com threshold
export function useStaggeredAnimation(itemCount: number, itemDelay = 200) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false))
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const newState = [...prev]
                newState[i] = true
                return newState
              })
            }, i * itemDelay)
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [itemCount, itemDelay])

  return { containerRef, visibleItems }
}

// Hook para animações baseadas em proximidade do viewport
export function useProximityAnimation() {
  const [proximity, setProximity] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height

      // Calcula a proximidade (0 = longe, 1 = totalmente visível)
      if (elementTop > windowHeight) {
        setProximity(0)
        setIsInView(false)
      } else if (elementTop + elementHeight < 0) {
        setProximity(0)
        setIsInView(false)
      } else {
        setIsInView(true)
        const visibleHeight = Math.min(windowHeight - Math.max(elementTop, 0), elementHeight)
        const proximityValue = Math.min(visibleHeight / (windowHeight * 0.6), 1)
        setProximity(proximityValue)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Executa uma vez para estado inicial

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { elementRef, proximity, isInView }
}

// Hook para animações baseadas em hover da seção
export function useHoverAnimation() {
  const [isHovered, setIsHovered] = useState(false)
  const [hasBeenHovered, setHasBeenHovered] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
    setHasBeenHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    element.addEventListener("mouseenter", handleMouseEnter)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [handleMouseEnter, handleMouseLeave])

  return { elementRef, isHovered, hasBeenHovered }
}

// Hook para animações baseadas em foco/atenção
export function useFocusAnimation() {
  const [isFocused, setIsFocused] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)

        // Auto-foca quando entra na tela pela primeira vez
        if (entry.isIntersecting && !isFocused) {
          setTimeout(() => {
            setIsFocused(true)
          }, 300)
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -20px 0px" },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [isFocused])

  return { elementRef, isFocused, isVisible }
}
