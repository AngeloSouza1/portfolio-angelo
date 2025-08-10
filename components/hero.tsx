"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Github, Linkedin, Clock } from "lucide-react"
import { useParallax } from "@/hooks/useScrollAnimation"
import { useTheme } from "next-themes"

export function Hero() {
  const [text, setText] = useState("")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const parallaxOffset = useParallax()
  const { theme } = useTheme()
  const fullText = "Backend Developer • Python • Ruby • Rails • JavaScript • PostgreSQL • Kotlin"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section  className="py-60 relative overflow-hidden">
      {/* Ultra Advanced Hero Background */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 via-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:via-blue-900 dark:via-indigo-900 dark:to-purple-900" />

        {/* Animated Mesh Gradient with Multiple Layers */}
        <div className="absolute inset-0 opacity-70">
          <div
            className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob"
            style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
          />
          <div
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob animation-delay-2000"
            style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
          />
          <div
            className="absolute -bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-indigo-400/30 to-blue-400/30 dark:from-indigo-500/20 dark:to-blue-500/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob animation-delay-4000"
            style={{ transform: `translateY(${parallaxOffset * 0.1}px)` }}
          />
          <div
            className="absolute -bottom-40 -right-20 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 dark:from-yellow-500/10 dark:to-orange-500/10 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob animation-delay-1000"
            style={{ transform: `translateY(${parallaxOffset * 0.25}px)` }}
          />
        </div>

        {/* Holographic Grid Pattern */}
        <div className="absolute inset-0 opacity-20" style={{ transform: `translateY(${parallaxOffset * 0.1}px)` }}>
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--grid-color-start, #3B82F6)" stopOpacity="0.3" />
                <stop offset="50%" stopColor="var(--grid-color-mid, #8B5CF6)" stopOpacity="0.1" />
                <stop offset="100%" stopColor="var(--grid-color-end, #EC4899)" stopOpacity="0.3" />
              </linearGradient>
              <pattern id="holographic-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="url(#grid-gradient)" strokeWidth="1" opacity="0.5" />
                <circle cx="0" cy="0" r="2" fill="url(#grid-gradient)" opacity="0.8" />
                <circle cx="60" cy="0" r="2" fill="url(#grid-gradient)" opacity="0.8" />
                <circle cx="0" cy="60" r="2" fill="url(#grid-gradient)" opacity="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#holographic-grid)" />
          </svg>
        </div>

        {/* Floating Particles System */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-random"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${12 + Math.random() * 8}s`,
                transform: `translateY(${parallaxOffset * (0.1 + Math.random() * 0.3)}px)`,
              }}
            >
              <div
                className={`w-${1 + Math.floor(Math.random() * 3)} h-${1 + Math.floor(Math.random() * 3)} 
                  ${["bg-blue-400/40", "bg-indigo-400/40", "bg-purple-400/40", "bg-pink-400/40", "bg-cyan-400/40"][Math.floor(Math.random() * 5)]}
                  dark:${["bg-blue-500/30", "bg-indigo-500/30", "bg-purple-500/30", "bg-pink-500/30", "bg-cyan-500/30"][Math.floor(Math.random() * 5)]}
                  ${["rounded-full", "rounded-lg", "rounded-none", "rounded-sm"][Math.floor(Math.random() * 4)]}
                  blur-sm shadow-lg`}
                style={{
                  boxShadow: `0 0 ${10 + Math.random() * 20}px ${["#3B82F6", "#6366F1", "#8B5CF6", "#EC4899", "#06B6D4"][Math.floor(Math.random() * 5)]}40`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Interactive Mouse Gradient with Ripple Effect */}
        <div
          className="absolute inset-0 opacity-50 transition-all duration-500"
          style={{
            background:
              theme === "dark"
                ? `
                radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(59, 130, 246, 0.15), 
                  rgba(99, 102, 241, 0.1) 20%, 
                  rgba(139, 92, 246, 0.08) 40%, 
                  rgba(236, 72, 153, 0.04) 60%, 
                  transparent 80%),
                radial-gradient(400px circle at ${mousePosition.x + 100}px ${mousePosition.y + 100}px, 
                  rgba(6, 182, 212, 0.08), 
                  transparent 50%)
              `
                : `
                radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(59, 130, 246, 0.2), 
                  rgba(99, 102, 241, 0.15) 20%, 
                  rgba(139, 92, 246, 0.1) 40%, 
                  rgba(236, 72, 153, 0.05) 60%, 
                  transparent 80%),
                radial-gradient(400px circle at ${mousePosition.x + 100}px ${mousePosition.y + 100}px, 
                  rgba(6, 182, 212, 0.1), 
                  transparent 50%)
              `,
          }}
        />

        {/* Geometric Shapes with Glow */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-400/30 dark:border-blue-500/20 rounded-lg animate-spin-slow"
            style={{
              transform: `translateY(${parallaxOffset * 0.15}px) rotate(45deg)`,
              boxShadow: theme === "dark" ? "0 0 30px rgba(59, 130, 246, 0.2)" : "0 0 30px rgba(59, 130, 246, 0.3)",
            }}
          />
          <div
            className="absolute bottom-20 right-20 w-40 h-40 border border-purple-400/30 dark:border-purple-500/20 rounded-full animate-pulse"
            style={{
              transform: `translateY(${parallaxOffset * 0.25}px)`,
              boxShadow: theme === "dark" ? "0 0 40px rgba(139, 92, 246, 0.2)" : "0 0 40px rgba(139, 92, 246, 0.3)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 dark:from-indigo-500/15 dark:to-pink-500/15 rounded-lg animate-bounce-slow"
            style={{
              transform: `translateY(${parallaxOffset * 0.2}px)`,
              boxShadow: theme === "dark" ? "0 0 25px rgba(99, 102, 241, 0.3)" : "0 0 25px rgba(99, 102, 241, 0.4)",
            }}
          />
        </div>

        {/* Code Rain Effect */}
        <div className="absolute inset-0 opacity-10" style={{ transform: `translateY(${parallaxOffset * 0.05}px)` }}>
          {["function", "const", "let", "=>", "{}", "[]", "class", "import"].map((code, i) => (
            <div
              key={i}
              className="absolute text-blue-500 dark:text-blue-400 font-mono text-sm animate-matrix-fall"
              style={{
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${15 + (i % 3) * 5}s`,
              }}
            >
              {code}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 dark:text-white mb-6 leading-tight fade-in-up animate">
              Olá, eu sou
              <span
                className="block text-slate-800 dark:text-white fade-in-up animate"
                style={{ animationDelay: "0.2s" }}
              >
                Angelo Souza
              </span>
            </h1>

            <div className="h-8 mb-8">
              <p
                className="text-xl text-slate-600 dark:text-slate-300 font-mono fade-in-up animate"
                style={{ animationDelay: "0.4s" }}
              >
                {text}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p
              className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl fade-in-up animate"
              style={{ animationDelay: "0.6s" }}
            >
              Desenvolvedor Backend, com foco em criar soluções robustas e escaláveis.
              Graduando em Análise e Desenvolvimento de Sistemas.
            </p>

            <div
              className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center lg:justify-start fade-in-up animate"
              style={{ animationDelay: "0.8s" }}
            >
              <button
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent("sectionTransition", { detail: { targetSection: "projetos" } })
                  )
                }
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg
                          hover:from-blue-700 hover:to-indigo-700 transition-all duration-300
                          font-medium transform hover:scale-105 hover:shadow-lg"
              >
                Ver Projetos
              </button>

              <button
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent("sectionTransition", { detail: { targetSection: "contato" } })
                  )
                }
                className="border-2 border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400
                          px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500
                          transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg"
              >
                Entre em Contato
              </button>
            </div>

            {/* Social Links */}
            <div
              className="flex gap-6 mt-8 justify-center lg:justify-start fade-in-up animate"
              style={{ animationDelay: "1s" }}
            >
              <a
                href="https://github.com/angelosouza1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/angeloafsouza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://wakatime.com/@AAFS1981"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <Clock size={24} />
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex-shrink-0 scale-in animate" style={{ animationDelay: "1.2s" }}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 dark:from-blue-500 dark:via-indigo-600 dark:to-purple-700 p-2 animate-pulse-slow">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatar.jpg-iXu14OJlMS17iiv1IqlrBK50CNOLLB.jpeg"
                  alt="Angelo Souza"
                  width={320}
                  height={320}
                  className="w-full h-full rounded-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 dark:bg-green-400 w-12 h-12 rounded-full flex items-center justify-center animate-bounce">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              {/* Floating Ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-blue-400/30 dark:border-blue-500/30 animate-ping"
                style={{ animationDuration: "3s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
