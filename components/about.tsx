"use client";

import { useTimedAnimation, useParallax, useFocusAnimation } from "@/hooks/useScrollAnimation"
import { useTheme } from "next-themes"


export function About() {
  const { containerRef, visibleItems } = useTimedAnimation(4, 300, 150)
  const { elementRef: focusRef, isFocused } = useFocusAnimation()
    
  const parallaxOffset = useParallax()
  const { theme } = useTheme()

  return (
    <section ref={focusRef} id="sobre" className="min-h-screen flex flex-col justify-center">
      {/* Organic About Background */}
      <div className="absolute inset-0">
        {/* Layered Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:via-blue-900 dark:to-indigo-900" />

        {/* Organic Blob Shapes */}
        <div className="absolute inset-0 opacity-60">
          <div
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full filter blur-3xl animate-blob"
            style={{
              transform: `translateY(${parallaxOffset * 0.2}px)`,
              clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"
            style={{
              transform: `translateY(${parallaxOffset * 0.3}px)`,
              clipPath: "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
            }}
          />
        </div>

        {/* Liquid Wave Animation */}
        <div className="absolute inset-0 opacity-30" style={{ transform: `translateY(${parallaxOffset * 0.1}px)` }}>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <linearGradient id="liquid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--wave-color-start, #3B82F6)" stopOpacity="0.15" />
                <stop offset="25%" stopColor="var(--wave-color-mid1, #6366F1)" stopOpacity="0.1" />
                <stop offset="50%" stopColor="var(--wave-color-mid2, #8B5CF6)" stopOpacity="0.15" />
                <stop offset="75%" stopColor="var(--wave-color-mid3, #EC4899)" stopOpacity="0.1" />
                <stop offset="100%" stopColor="var(--wave-color-end, #06B6D4)" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <path
              d="M0,300 C200,250 400,350 600,300 C800,250 1000,350 1200,300 L1200,800 L0,800 Z"
              fill="url(#liquid-gradient)"
              className="animate-wave"
            />
            <path
              d="M0,400 C300,350 500,450 800,400 C900,375 1100,425 1200,400 L1200,800 L0,800 Z"
              fill="url(#liquid-gradient)"
              className="animate-wave-reverse"
            />
            <path
              d="M0,500 C250,475 450,525 700,500 C850,485 1050,515 1200,500 L1200,800 L0,800 Z"
              fill="url(#liquid-gradient)"
              className="animate-wave"
              style={{ animationDelay: "1s" }}
            />
          </svg>
        </div>

        {/* Floating Code Symbols with Glow */}
        <div className="absolute inset-0 opacity-15" style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}>
          {["</>", "{}", "[]", "()", "&&", "||", "=>", "!=", "===", "++"].map((symbol, i) => (
            <div
              key={i}
              className="absolute text-blue-600 dark:text-blue-400 font-mono text-3xl animate-float-code"
              style={{
                left: `${5 + i * 9}%`,
                top: `${15 + (i % 4) * 20}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${8 + (i % 4)}s`,
                textShadow: theme === "dark" ? "0 0 20px rgba(59, 130, 246, 0.4)" : "0 0 20px rgba(59, 130, 246, 0.5)",
                filter:
                  theme === "dark"
                    ? "drop-shadow(0 0 10px rgba(59, 130, 246, 0.2))"
                    : "drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))",
              }}
            >
              {symbol}
            </div>
          ))}
        </div>

        {/* Geometric Patterns with Neon Effect */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-400/40 dark:border-blue-500/30 rounded-lg animate-spin-slow"
            style={{
              transform: `translateY(${parallaxOffset * 0.15}px) rotate(45deg)`,
              boxShadow:
                theme === "dark"
                  ? "0 0 30px rgba(59, 130, 246, 0.3), inset 0 0 30px rgba(59, 130, 246, 0.05)"
                  : "0 0 30px rgba(59, 130, 246, 0.4), inset 0 0 30px rgba(59, 130, 246, 0.1)",
            }}
          />
          <div
            className="absolute bottom-32 left-32 w-24 h-24 border-2 border-indigo-400/40 dark:border-indigo-500/30 rounded-full animate-pulse"
            style={{
              transform: `translateY(${parallaxOffset * 0.25}px)`,
              boxShadow:
                theme === "dark"
                  ? "0 0 25px rgba(99, 102, 241, 0.3), inset 0 0 25px rgba(99, 102, 241, 0.05)"
                  : "0 0 25px rgba(99, 102, 241, 0.4), inset 0 0 25px rgba(99, 102, 241, 0.1)",
            }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-purple-400/30 to-pink-400/30 dark:from-purple-500/20 dark:to-pink-500/20 rounded-lg animate-bounce-slow"
            style={{
              transform: `translateY(${parallaxOffset * 0.2}px)`,
              boxShadow: theme === "dark" ? "0 0 20px rgba(139, 92, 246, 0.4)" : "0 0 20px rgba(139, 92, 246, 0.5)",
            }}
          />
        </div>

        {/* Particle System */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-random"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
                transform: `translateY(${parallaxOffset * (0.1 + Math.random() * 0.2)}px)`,
              }}
            >
              <div
                className={`w-2 h-2 ${["bg-blue-400/60", "bg-indigo-400/60", "bg-purple-400/60"][Math.floor(Math.random() * 3)]} dark:${["bg-blue-500/40", "bg-indigo-500/40", "bg-purple-500/40"][Math.floor(Math.random() * 3)]} rounded-full blur-sm`}
                style={{
                  boxShadow:
                    theme === "dark"
                      ? `0 0 15px ${["#3B82F6", "#6366F1", "#8B5CF6"][Math.floor(Math.random() * 3)]}60`
                      : `0 0 15px ${["#3B82F6", "#6366F1", "#8B5CF6"][Math.floor(Math.random() * 3)]}80`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2
           className={`text-4xl font-bold text-center text-slate-800 dark:text-white mb-12 focus-transition ${
                         isFocused ? "focused" : ""
                       }`}
          >
            Sobre mim
          </h2>

          <div ref={containerRef} className="grid md:grid-cols-2 gap-12  items-center mt-8 mb-0">
            <div className={`space-y-6 cascade-item ${visibleItems[0] ? "visible" : ""}`}>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Olá! Meu nome é Angelo Souza, sou Desenvolvedor Backend e Graduando em Análise e Desenvolvimento de
                Sistemas. 
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Atuo principalmente com Ruby on Rails, mas também possuo experiência com outras linguagens
              como Python, JavaScript e Kotlin, o que me permite colaborar em projetos diversos e de diferentes
              naturezas. Valorizo a cordialidade e o respeito nas relações interpessoais, e acredito no poder do
              diálogo para compartilhar conhecimento, construir conexões significativas e aprender com as experiências
              de outras pessoas.
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Sou Estudante e Desenvolvedor Autônomo, sempre em busca de novos desafios e oportunidades de
                crescimento.
              </p>
            </div>

            <div
              className={`bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-700 border border-white/30 dark:border-slate-700/30 morph-transition ${visibleItems[1] ? "visible" : ""}`}
              style={{
                boxShadow:
                  theme === "dark"
                    ? "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)"
                    : "0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.5)",
              }}
            >
              <h3 className="text-2xl font-bold text-slate-1000 dark:text-white mb-6">Interesses</h3>
              <div className="space-y-4">
                {[
                  { icon: "☕", text: "Café e inovação" },
                  { icon: "🎵", text: "Música" },
                  { icon: "🎮", text: "Jogos" },
                  { icon: "💡", text: "Tecnologia" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 group cascade-item ${visibleItems[2] ? "visible" : ""}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {item.icon} {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
