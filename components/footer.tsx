"use client"

import { Github, Linkedin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Angelo Souza</h3>
              <p className="text-slate-300 leading-relaxed">
                Desenvolvedor Backend, sempre em busca de novos desafios e oportunidades
                de crescimento.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <div className="space-y-2">
                <button
                  onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Sobre
                </button>
                <button
                  onClick={() => document.getElementById("habilidades")?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Skills
                </button>
                <button
                  onClick={() => document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Projetos
                </button>
                <button
                  onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Contato
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/angelosouza1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-600 dark:hover:bg-slate-700 transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/angeloafsouza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-600 dark:hover:bg-slate-700 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://wakatime.com/@AAFS1981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-600 dark:hover:bg-slate-700 transition-colors duration-200"
                >
                  <Clock size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-300">© 2025 Angelo Souza. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
