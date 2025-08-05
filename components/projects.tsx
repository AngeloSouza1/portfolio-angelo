"use client"

import { ExternalLink, Github } from "lucide-react"
import { useScrollAnimation, useStaggeredAnimation, useParallax } from "@/hooks/useScrollAnimation"
import { useTheme } from "next-themes"

export function Projects() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const { containerRef, visibleItems } = useStaggeredAnimation(4, 150)
  const parallaxOffset = useParallax()
  const { theme } = useTheme()

  const projects = [
    {
      title: "Pagamento-Gateway",
      description:
        "O Pagamento Gateway permite que usuários realizem pagamentos por meio de diferentes métodos, enquanto administradores podem visualizar e gerenciar os pagamentos realizados. A interface intuitiva facilita a navegação e proporciona uma experiência prática e eficiente para todos os envolvidos.",
      technologies: ["Ruby", "JavaScript", "HTML", "Dockerfile"],
      github: "https://github.com/AngeloSouza1/Pagamento-Gateway",
      demo: null,
    },
    {
      title: "WhatAutomat",
      description:
        "Este projeto foi criado para explorar o agendamento e envio automatizado de mensagens via WhatsApp. Ele combina várias tecnologias para oferecer uma experiência funcional, prática e com foco no aprendizado.",
      technologies: ["Python", "HTML", "TeX", "C++", "C", "Cython"],
      github: "https://github.com/AngeloSouza1/WhatAutomat",
      demo: null,
    },
    {
      title: "Amigo-Secreto-OBC",
      description:
        "Esta aplicação intuitiva facilita a organização de eventos de amigo oculto, oferecendo funcionalidades completas como criação de eventos, registro automatizado de participantes, sorteio de pares e envio de notificações por e-mail.",
      technologies: ["Python", "JavaScript", "CSS", "HTML"],
      github: "https://github.com/AngeloSouza1/Amigo-Secreto-OBC",
      demo: null,
    },
    {
      title: "Dashboard-Clima",
      description:
        "O Dashboard-Clima é uma aplicação web em Python que exibe a previsão do tempo e condições atuais de uma cidade, com visual intuitivo e estilizado para fácil acompanhamento.",
      technologies: ["Python", "JavaScript", "C++"],
      github: "https://github.com/AngeloSouza1/Dashboard-Clima",
      demo: null,
    },
  ]

  return (
    <section ref={elementRef} id="projetos" className="py-20 relative overflow-hidden">
      {/* Creative Showcase Background */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:via-blue-900/20 dark:to-indigo-900/20" />

        {/* Digital Canvas Effect */}
        <div className="absolute inset-0 opacity-20" style={{ transform: `translateY(${parallaxOffset * 0.1}px)` }}>
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="canvas-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={theme === "dark" ? "#60A5FA" : "#3B82F6"} stopOpacity="0.4" />
                <stop offset="33%" stopColor={theme === "dark" ? "#818CF8" : "#6366F1"} stopOpacity="0.2" />
                <stop offset="66%" stopColor={theme === "dark" ? "#A78BFA" : "#8B5CF6"} stopOpacity="0.4" />
                <stop offset="100%" stopColor={theme === "dark" ? "#F472B6" : "#EC4899"} stopOpacity="0.2" />
              </linearGradient>
              <pattern id="project-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  fill="none"
                  stroke="url(#canvas-gradient)"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
                <circle cx="50" cy="50" r="3" fill="url(#canvas-gradient)" opacity="0.6" />
                <circle cx="25" cy="25" r="1.5" fill="url(#canvas-gradient)" opacity="0.4" />
                <circle cx="75" cy="25" r="1.5" fill="url(#canvas-gradient)" opacity="0.4" />
                <circle cx="25" cy="75" r="1.5" fill="url(#canvas-gradient)" opacity="0.4" />
                <circle cx="75" cy="75" r="1.5" fill="url(#canvas-gradient)" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#project-grid)" />
          </svg>
        </div>

        {/* Code Matrix Rain */}
        <div className="absolute inset-0 opacity-8" style={{ transform: `translateY(${parallaxOffset * 0.05}px)` }}>
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-matrix-fall"
              style={{
                left: `${i * 4}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${15 + (i % 6)}s`,
              }}
            >
              <div className="text-green-500 dark:text-green-400 font-mono text-xs leading-tight opacity-40">
                {["function", "const", "let", "class", "import", "export", "async", "await"].map((code, j) => (
                  <div key={j} className="mb-2 opacity-60">
                    {code}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Project Elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-400/30 dark:border-blue-500/20 rounded-lg animate-spin-slow"
            style={{
              transform: `translateY(${parallaxOffset * 0.2}px) rotate(12deg)`,
              boxShadow:
                theme === "dark"
                  ? "0 0 40px rgba(59, 130, 246, 0.2), inset 0 0 40px rgba(59, 130, 246, 0.05)"
                  : "0 0 40px rgba(59, 130, 246, 0.3), inset 0 0 40px rgba(59, 130, 246, 0.1)",
            }}
          />
          <div
            className="absolute bottom-32 right-20 w-40 h-40 border border-indigo-400/30 dark:border-indigo-500/20 rounded-full animate-pulse"
            style={{
              transform: `translateY(${parallaxOffset * 0.25}px)`,
              boxShadow:
                theme === "dark"
                  ? "0 0 50px rgba(99, 102, 241, 0.2), inset 0 0 50px rgba(99, 102, 241, 0.05)"
                  : "0 0 50px rgba(99, 102, 241, 0.3), inset 0 0 50px rgba(99, 102, 241, 0.1)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 dark:from-purple-500/15 dark:to-pink-500/15 rounded-lg animate-bounce-slow"
            style={{
              transform: `translateY(${parallaxOffset * 0.15}px)`,
              boxShadow: theme === "dark" ? "0 0 30px rgba(139, 92, 246, 0.3)" : "0 0 30px rgba(139, 92, 246, 0.4)",
            }}
          />
          <div
            className="absolute bottom-20 left-1/3 w-28 h-28 border-2 border-cyan-400/30 dark:border-cyan-500/20 rounded-lg animate-spin-reverse"
            style={{
              transform: `translateY(${parallaxOffset * 0.3}px) rotate(-12deg)`,
              boxShadow:
                theme === "dark"
                  ? "0 0 35px rgba(6, 182, 212, 0.2), inset 0 0 35px rgba(6, 182, 212, 0.05)"
                  : "0 0 35px rgba(6, 182, 212, 0.3), inset 0 0 35px rgba(6, 182, 212, 0.1)",
            }}
          />
        </div>

        {/* Holographic Project Icons */}
        <div className="absolute inset-0 opacity-15" style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}>
          {["📱", "💻", "🌐", "⚡", "🔧", "📊", "🚀", "💡", "🎯", "⭐", "🔥", "💎"].map((icon, i) => (
            <div
              key={i}
              className="absolute text-3xl animate-float-project"
              style={{
                left: `${8 + i * 7.5}%`,
                top: `${12 + (i % 4) * 20}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${9 + (i % 4)}s`,
                textShadow: theme === "dark" ? "0 0 25px rgba(59, 130, 246, 0.5)" : "0 0 25px rgba(59, 130, 246, 0.6)",
                filter:
                  theme === "dark"
                    ? "drop-shadow(0 0 12px rgba(59, 130, 246, 0.3))"
                    : "drop-shadow(0 0 12px rgba(59, 130, 246, 0.4))",
              }}
            >
              {icon}
            </div>
          ))}
        </div>

        {/* Gradient Mesh Overlay */}
        <div className="absolute inset-0 opacity-50">
          <div
            className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/20 via-transparent to-transparent dark:from-blue-500/15 rounded-full blur-3xl"
            style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
          />
          <div
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-purple-300/20 via-transparent to-transparent dark:from-purple-500/15 rounded-full blur-3xl"
            style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-indigo-300/15 via-transparent to-transparent dark:from-indigo-500/10 rounded-full blur-3xl"
            style={{ transform: `translateY(${parallaxOffset * 0.15}px) translateX(-50%)` }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold text-center text-slate-800 dark:text-white mb-12 section-transition ${isVisible ? "visible" : ""}`}
          >
            Projetos
          </h2>

          <div ref={containerRef} className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-700 border border-white/40 dark:border-slate-700/40 group section-reveal ${visibleItems[index] ? "visible" : ""}`}
                style={{
                  boxShadow:
                    theme === "dark"
                      ? "0 30px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                      : "0 30px 60px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
                }}
              >
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300 stagger-item ${visibleItems[index] ? "visible" : ""}`}
                      style={{
                        transitionDelay: `${techIndex * 50}ms`,
                        boxShadow:
                          theme === "dark" ? "0 2px 8px rgba(59, 130, 246, 0.1)" : "0 2px 8px rgba(59, 130, 246, 0.15)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
                  >
                    <Github size={20} />
                    <span>Código</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
