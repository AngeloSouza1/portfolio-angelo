"use client"

import { useScrollAnimation, useStaggeredAnimation, useParallax } from "@/hooks/useScrollAnimation"
import { useTheme } from "next-themes"

export function Skills() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const { containerRef, visibleItems } = useStaggeredAnimation(4, 200)
  const parallaxOffset = useParallax()
  const { theme } = useTheme()

  const skillCategories = [
    {
      title: "Linguagens de Programação",
      skills: [
        { name: "Ruby", icon: "https://skillicons.dev/icons?i=ruby" },
        { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
        { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
        { name: "Go", icon: "https://skillicons.dev/icons?i=go" },
        { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
        { name: "C", icon: "https://skillicons.dev/icons?i=c" },
        { name: "Kotlin", icon: "https://skillicons.dev/icons?i=kotlin" },
      ],
    },
    {
      title: "Frameworks e Bibliotecas",
      skills: [
        { name: "Rails", icon: "https://skillicons.dev/icons?i=rails" },
        { name: "Bootstrap", icon: "https://skillicons.dev/icons?i=bootstrap" },
        { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
        { name: "Godot", icon: "https://skillicons.dev/icons?i=godot" },
      ],
    },
    {
      title: "Bancos de Dados",
      skills: [
        { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
        { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
        { name: "SQLite", icon: "https://skillicons.dev/icons?i=sqlite" },
        { name: "MongoDB",    icon: "https://skillicons.dev/icons?i=mongodb"  },
      ],
    },
    {
      title: "Ferramentas de Desenvolvimento",
      skills: [
        { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
        { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
        { name: "VSCode", icon: "https://skillicons.dev/icons?i=vscode" },
        { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
        { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
        { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
        {
          name: "DBeaver CE",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dbeaver/dbeaver-original.svg"
        },
      ],
    },
  ]

  return (
    <section ref={elementRef} id="habilidades" className="py-20 relative overflow-hidden">
      {/* Futuristic Tech Background */}
      <div className="absolute inset-0">
        {/* Cyberpunk Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 via-indigo-50 via-purple-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:via-blue-900/20 dark:via-indigo-900/20 dark:to-cyan-900/20" />

        {/* Advanced Circuit Board Pattern */}
        <div
          className="absolute inset-0 opacity-25 dark:opacity-15"
          style={{ transform: `translateY(${parallaxOffset * 0.1}px)` }}
        >
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={theme === "dark" ? "#60A5FA" : "#3B82F6"} stopOpacity="0.6" />
                <stop offset="25%" stopColor={theme === "dark" ? "#A78BFA" : "#6366F1"} stopOpacity="0.4" />
                <stop offset="50%" stopColor={theme === "dark" ? "#C084FC" : "#8B5CF6"} stopOpacity="0.6" />
                <stop offset="75%" stopColor={theme === "dark" ? "#F472B6" : "#EC4899"} stopOpacity="0.4" />
                <stop offset="100%" stopColor={theme === "dark" ? "#22D3EE" : "#06B6D4"} stopOpacity="0.6" />
              </linearGradient>
              <pattern id="advanced-circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                {/* Main nodes */}
                <circle cx="60" cy="60" r="4" fill="url(#circuit-gradient)" opacity="0.8" />
                <circle cx="20" cy="20" r="2" fill="url(#circuit-gradient)" opacity="0.6" />
                <circle cx="100" cy="20" r="2" fill="url(#circuit-gradient)" opacity="0.6" />
                <circle cx="20" cy="100" r="2" fill="url(#circuit-gradient)" opacity="0.6" />
                <circle cx="100" cy="100" r="2" fill="url(#circuit-gradient)" opacity="0.6" />

                {/* Connection lines */}
                <line x1="60" y1="60" x2="20" y2="20" stroke="url(#circuit-gradient)" strokeWidth="1" opacity="0.4" />
                <line x1="60" y1="60" x2="100" y2="20" stroke="url(#circuit-gradient)" strokeWidth="1" opacity="0.4" />
                <line x1="60" y1="60" x2="20" y2="100" stroke="url(#circuit-gradient)" strokeWidth="1" opacity="0.4" />
                <line x1="60" y1="60" x2="100" y2="100" stroke="url(#circuit-gradient)" strokeWidth="1" opacity="0.4" />

                {/* Micro circuits */}
                <rect
                  x="15"
                  y="15"
                  width="10"
                  height="10"
                  fill="none"
                  stroke="url(#circuit-gradient)"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
                <rect
                  x="95"
                  y="15"
                  width="10"
                  height="10"
                  fill="none"
                  stroke="url(#circuit-gradient)"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
                <rect
                  x="15"
                  y="95"
                  width="10"
                  height="10"
                  fill="none"
                  stroke="url(#circuit-gradient)"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
                <rect
                  x="95"
                  y="95"
                  width="10"
                  height="10"
                  fill="none"
                  stroke="url(#circuit-gradient)"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#advanced-circuit)" />
          </svg>
        </div>

        {/* Holographic Tech Icons */}
        <div className="absolute inset-0" style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}>
          {["⚡", "🚀", "💻", "🔧", "⚙️", "🌐", "📱", "🔒", "🛡️", "⭐"].map((icon, i) => (
            <div
              key={i}
              className="absolute text-4xl animate-float-tech opacity-20 dark:opacity-30"
              style={{
                left: `${3 + i * 9.5}%`,
                top: `${8 + (i % 5) * 18}%`,
                animationDelay: `${i * 0.9}s`,
                animationDuration: `${10 + (i % 4)}s`,
                textShadow: theme === "dark" ? "0 0 30px rgba(59, 130, 246, 0.6)" : "0 0 30px rgba(59, 130, 246, 0.8)",
                filter:
                  theme === "dark"
                    ? "drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))"
                    : "drop-shadow(0 0 15px rgba(59, 130, 246, 0.5))",
              }}
            >
              {icon}
            </div>
          ))}
        </div>

        {/* Hexagonal Matrix */}
        <div
          className="absolute inset-0 opacity-15 dark:opacity-10"
          style={{ transform: `translateY(${parallaxOffset * 0.15}px)` }}
        >
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="hex-matrix" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <polygon
                  points="40,10 60,25 60,55 40,70 20,55 20,25"
                  fill="none"
                  stroke={theme === "dark" ? "rgba(96, 165, 250, 0.5)" : "rgba(59, 130, 246, 0.3)"}
                  strokeWidth="1"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="2"
                  fill={theme === "dark" ? "rgba(167, 139, 250, 0.6)" : "rgba(99, 102, 241, 0.4)"}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-matrix)" />
          </svg>
        </div>

        {/* Glowing Orbs with Pulsing Effect */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"
            style={{
              transform: `translateY(${parallaxOffset * 0.25}px)`,
              boxShadow: theme === "dark" ? "0 0 100px rgba(59, 130, 246, 0.3)" : "0 0 100px rgba(59, 130, 246, 0.4)",
            }}
          />
          <div
            className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-br from-purple-400/30 to-pink-400/30 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"
            style={{
              transform: `translateY(${parallaxOffset * 0.3}px)`,
              boxShadow: theme === "dark" ? "0 0 120px rgba(139, 92, 246, 0.3)" : "0 0 120px rgba(139, 92, 246, 0.4)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-br from-indigo-400/30 to-blue-400/30 dark:from-indigo-500/20 dark:to-blue-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"
            style={{
              transform: `translateY(${parallaxOffset * 0.2}px) translateX(-50%)`,
              boxShadow: theme === "dark" ? "0 0 80px rgba(99, 102, 241, 0.3)" : "0 0 80px rgba(99, 102, 241, 0.4)",
            }}
          />
        </div>

        {/* Data Stream Effect */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-matrix-fall"
              style={{
                left: `${i * 7}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${12 + (i % 4)}s`,
              }}
            >
              <div className="text-cyan-500 dark:text-cyan-400 font-mono text-xs leading-tight opacity-60">
                {["01", "10", "11", "00", "01", "10", "11", "00"].map((code, j) => (
                  <div key={j} className="mb-1">
                    {code}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold text-center text-slate-800 dark:text-white mb-12 section-transition ${isVisible ? "visible" : ""}`}
          >
            Habilidades
          </h2>

          <div ref={containerRef} className="grid gap-12">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-700 border border-white/40 dark:border-slate-700/40 section-zoom ${visibleItems[index] ? "visible" : ""}`}
                style={{
                  boxShadow:
                    theme === "dark"
                      ? "0 25px 50px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                      : "0 25px 50px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
                }}
              >
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center">{category.title}</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`flex flex-col items-center group cursor-pointer transition-all duration-500 stagger-item ${visibleItems[index] ? "visible" : ""}`}
                      style={{ transitionDelay: `${skillIndex * 100}ms` }}
                    >
                      <div className="w-16 h-16 mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <img
                          src={skill.icon || "/placeholder.svg"}
                          alt={skill.name}
                          className="w-full h-full object-contain filter group-hover:drop-shadow-lg"
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-300 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
