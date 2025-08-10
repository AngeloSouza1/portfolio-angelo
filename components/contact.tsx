"use client"

import { Mail, MapPin } from "lucide-react"
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation"
import { useTheme } from "next-themes"
import { useState } from "react"



export function Contact() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const parallaxOffset = useParallax()
  const { theme } = useTheme()
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle")

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch("https://formspree.io/f/mpwazajq", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: data
      })
      const json = await res.json()
      if (json.ok === false && json.error) throw new Error(json.error)
      // se chegou aqui, deu certo:
      setStatus("sent")
      form.reset()              // ← limpa os campos
      setTimeout(() => setStatus("idle"), 3000)
    } catch (err) {
      console.error(err)
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }




  
    // obtém o basePath (em dev será vazio, em produção será "/portfolio-angelo")
  
  return (
    <section ref={elementRef} id="contato" className="py-40 relative overflow-hidden">
      {/* Ultra-Modern Contact Background */}
      <div className="absolute inset-0">
        {/* Sophisticated Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 via-indigo-50 via-purple-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:via-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20" />

        {/* Advanced Network Visualization */}
        <div className="absolute inset-0 opacity-25" style={{ transform: `translateY(${parallaxOffset * 0.1}px)` }}>
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={theme === "dark" ? "#60A5FA" : "#3B82F6"} stopOpacity="0.8" />
                <stop offset="50%" stopColor={theme === "dark" ? "#818CF8" : "#6366F1"} stopOpacity="0.4" />
                <stop offset="100%" stopColor={theme === "dark" ? "#A78BFA" : "#8B5CF6"} stopOpacity="0" />
              </radialGradient>
              <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={theme === "dark" ? "#60A5FA" : "#3B82F6"} stopOpacity="0.6" />
                <stop offset="50%" stopColor={theme === "dark" ? "#818CF8" : "#6366F1"} stopOpacity="0.3" />
                <stop offset="100%" stopColor={theme === "dark" ? "#A78BFA" : "#8B5CF6"} stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Dynamic Network Nodes */}
            {Array.from({ length: 20 }).map((_, i) => {
              const x = 80 + (i % 5) * 240
              const y = 120 + Math.floor(i / 5) * 160
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="6" fill="url(#node-glow)" className="animate-pulse" />
                  <circle cx={x} cy={y} r="25" fill="url(#node-glow)" opacity="0.3" className="animate-pulse" />
                  <circle cx={x} cy={y} r="40" fill="url(#node-glow)" opacity="0.1" className="animate-pulse" />

                  {/* Connection lines to adjacent nodes */}
                  {i < 19 && (i + 1) % 5 !== 0 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={x + 240}
                      y2={y}
                      stroke="url(#connection-gradient)"
                      strokeWidth="2"
                      opacity="0.4"
                      className="animate-pulse"
                    />
                  )}
                  {i < 15 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={x}
                      y2={y + 160}
                      stroke="url(#connection-gradient)"
                      strokeWidth="2"
                      opacity="0.4"
                      className="animate-pulse"
                    />
                  )}

                  {/* Diagonal connections */}
                  {i < 15 && (i + 1) % 5 !== 0 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={x + 240}
                      y2={y + 160}
                      stroke="url(#connection-gradient)"
                      strokeWidth="1"
                      opacity="0.2"
                      className="animate-pulse"
                    />
                  )}
                </g>
              )
            })}
          </svg>
        </div>

        {/* Holographic Communication Icons */}
        <div className="absolute inset-0 opacity-20" style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}>
          {["📧", "📱", "💬", "🌐", "📞", "✉️", "📡", "🔗", "💌", "📨", "🔔", "⚡"].map((icon, i) => (
            <div
              key={i}
              className="absolute text-4xl animate-float-contact"
              style={{
                left: `${6 + i * 8}%`,
                top: `${15 + (i % 4) * 20}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${8 + (i % 4)}s`,
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

        {/* Quantum Field Effect */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/25 to-cyan-400/25 dark:from-blue-500/15 dark:to-cyan-500/15 rounded-full blur-3xl animate-pulse-slow"
            style={{
              transform: `translateY(${parallaxOffset * 0.25}px)`,
              boxShadow:
                theme === "dark"
                  ? "0 0 120px rgba(59, 130, 246, 0.3), inset 0 0 120px rgba(59, 130, 246, 0.05)"
                  : "0 0 120px rgba(59, 130, 246, 0.4), inset 0 0 120px rgba(59, 130, 246, 0.1)",
            }}
          />
          <div
            className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-400/25 to-pink-400/25 dark:from-purple-500/15 dark:to-pink-500/15 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"
            style={{
              transform: `translateY(${parallaxOffset * 0.3}px)`,
              boxShadow:
                theme === "dark"
                  ? "0 0 140px rgba(139, 92, 246, 0.3), inset 0 0 140px rgba(139, 92, 246, 0.05)"
                  : "0 0 140px rgba(139, 92, 246, 0.4), inset 0 0 140px rgba(139, 92, 246, 0.1)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-indigo-400/25 to-blue-400/25 dark:from-indigo-500/15 dark:to-blue-500/15 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"
            style={{
              transform: `translateY(${parallaxOffset * 0.2}px) translateX(-50%)`,
              boxShadow:
                theme === "dark"
                  ? "0 0 100px rgba(99, 102, 241, 0.3), inset 0 0 100px rgba(99, 102, 241, 0.05)"
                  : "0 0 100px rgba(99, 102, 241, 0.4), inset 0 0 100px rgba(99, 102, 241, 0.1)",
            }}
          />
        </div>

        {/* Geometric Elements with Neon Glow */}
        <div className="absolute inset-0">
          <div
            className="absolute top-32 right-32 w-32 h-32 border-2 border-blue-400/40 dark:border-blue-500/30 rounded-lg animate-spin-slow"
            style={{
              transform: `translateY(${parallaxOffset * 0.15}px) rotate(45deg)`,
              boxShadow:
                theme === "dark"
                  ? "0 0 50px rgba(59, 130, 246, 0.4), inset 0 0 50px rgba(59, 130, 246, 0.1)"
                  : "0 0 50px rgba(59, 130, 246, 0.5), inset 0 0 50px rgba(59, 130, 246, 0.2)",
            }}
          />
          <div
            className="absolute bottom-32 left-32 w-28 h-28 border-2 border-indigo-400/40 dark:border-indigo-500/30 rounded-full animate-pulse"
            style={{
              transform: `translateY(${parallaxOffset * 0.25}px)`,
              boxShadow:
                theme === "dark"
                  ? "0 0 45px rgba(99, 102, 241, 0.4), inset 0 0 45px rgba(99, 102, 241, 0.1)"
                  : "0 0 45px rgba(99, 102, 241, 0.5), inset 0 0 45px rgba(99, 102, 241, 0.2)",
            }}
          />
          <div
            className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-purple-400/40 dark:border-purple-500/30 rounded-lg animate-bounce-slow"
            style={{
              transform: `translateY(${parallaxOffset * 0.2}px) rotate(30deg)`,
              boxShadow:
                theme === "dark"
                  ? "0 0 40px rgba(139, 92, 246, 0.4), inset 0 0 40px rgba(139, 92, 246, 0.1)"
                  : "0 0 40px rgba(139, 92, 246, 0.5), inset 0 0 40px rgba(139, 92, 246, 0.2)",
            }}
          />
        </div>

        {/* Data Particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-random"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 12}s`,
                animationDuration: `${18 + Math.random() * 12}s`,
                transform: `translateY(${parallaxOffset * (0.1 + Math.random() * 0.25)}px)`,
              }}
            >
              <div
                className={`w-1 h-1 ${["bg-blue-400/70", "bg-indigo-400/70", "bg-purple-400/70", "bg-cyan-400/70"][Math.floor(Math.random() * 4)]} dark:${["bg-blue-500/50", "bg-indigo-500/50", "bg-purple-500/50", "bg-cyan-500/50"][Math.floor(Math.random() * 4)]} rounded-full blur-sm`}
                style={{
                  boxShadow: `0 0 20px ${["#3B82F6", "#6366F1", "#8B5CF6", "#06B6D4"][Math.floor(Math.random() * 4)]}${theme === "dark" ? "70" : "90"}`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl font-bold text-center text-slate-800 dark:text-white mb-12 section-transition ${isVisible ? "visible" : ""}`}
          >
            Entre em Contato
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className={`section-slide-left ${isVisible ? "visible" : ""}`}>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Vamos conversar!</h3>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem uma ideia ou precisa de
                ajuda com desenvolvimento backend, não hesite em entrar em contato.
              </p>

              <div className="space-y-4">
                <div className={`flex items-center gap-4 group stagger-item ${isVisible ? "visible" : ""}`}>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 dark:text-white">Email</p>
                    <a
                      href="mailto:angeloafdesouza@gmail.com"
                      className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      angeloafdesouza@gmail.com
                    </a>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-4 group stagger-item ${isVisible ? "visible" : ""}`}
                  style={{ transitionDelay: "0.1s" }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 dark:text-white">Localização</p>
                    <p className="text-slate-600 dark:text-slate-300">Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot anti-spam opcional */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />
          <input type="hidden" name="_subject" value="📨 Nova mensagem do Portfólio!!!" />
         {/* Nome */}
          <div className="space-y-1">
            <label htmlFor="name">Nome</label>
            <div
              className={`
                rounded-lg p-px
                ${theme === 'dark'
                  ? 'bg-gradient-to-r from-blue-400 to-indigo-400'
                  : 'bg-gradient-to-r from-blue-200 to-cyan-200'}
              `}
            >
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Seu nome"
                className={`
                  w-full
                  bg-white dark:bg-slate-800
                  rounded-md
                  px-4 py-3
                  border-none
                  focus:outline-none focus:ring-0
                  transition
                  ${theme === 'dark'
                    ? 'shadow-[0_0_10px_rgba(59,130,246,0.7)]'
                    : 'shadow-[0_0_15px_rgba(96,165,250,0.3)]'
                  }
                `}
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label htmlFor="email">Email</label>
            <div
              className={`
                rounded-lg p-px
                ${theme === 'dark'
                  ? 'bg-gradient-to-r from-blue-400 to-indigo-400'
                  : 'bg-gradient-to-r from-blue-200 to-cyan-200'}
              `}
            >
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="seu@email.com"
                className={`
                  w-full
                  bg-white dark:bg-slate-800
                  rounded-md
                  px-4 py-3
                  border-none
                  focus:outline-none focus:ring-0
                  transition
                  ${theme === 'dark'
                    ? 'shadow-[0_0_10px_rgba(59,130,246,0.7)]'
                    : 'shadow-[0_0_15px_rgba(96,165,250,0.3)]'
                  }
                `}
              />
            </div>
          </div>

          {/* Mensagem */}
          <div className="space-y-1">
            <label htmlFor="message">Mensagem</label>
            <div
              className={`
                rounded-lg p-px
                ${theme === 'dark'
                  ? 'bg-gradient-to-r from-blue-400 to-indigo-400'
                  : 'bg-gradient-to-r from-blue-200 to-cyan-200'}
              `}
            >
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Sua mensagem..."
                className={`
                  w-full
                  bg-white dark:bg-slate-800
                  rounded-md
                  px-4 py-3
                  border-none
                  focus:outline-none focus:ring-0
                  transition
                  ${theme === 'dark'
                    ? 'shadow-[0_0_10px_rgba(59,130,246,0.7)]'
                    : 'shadow-[0_0_15px_rgba(96,165,250,0.3)]'
                  }
                `}
              />
            </div>
          </div>



          {/* Feedback de sucesso/erro acima do form */}
          {status === "sent" && (
            <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
              Mensagem enviada com sucesso!
            </div>
          )}
          {status === "error" && (
            <div className="mb-4 p-3 bg-red-100 text-red-800 rounded">
              Ocorreu um erro. Tente novamente.
            </div>
          )}
          
          {/* Botão */}
          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className={`
              w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg
              ${status === "sending" ? "opacity-50 cursor-wait" : ""}
              ${status === "sent" ? "opacity-75 cursor-default" : "hover:scale-105 hover:shadow-lg"}
            `}
          >
            {status === "sending" && "Enviando…"}
            {status === "sent"     && "Enviado!"}
            {status === "idle"     && "Enviar Mensagem"}
          </button>
        </form>





            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
