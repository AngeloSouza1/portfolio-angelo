"use client"

import { Github, Linkedin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-slate-800 dark:bg-slate-900 text-white py-40 md:py-48 min-h-[280px] md:min-h-[340px]"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Coluna 1 */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Angelo Souza
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Desenvolvedor Backend, sempre em busca de novos desafios e oportunidades
                de crescimento.
              </p>
            </div>

            {/* Coluna 2 */}
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4">
                Links Rápidos
              </h4>
              <nav className="space-y-2 md:space-y-2.5">
                <a href="#sobre" className="block text-slate-300 hover:text-white transition-colors">
                  Sobre
                </a>
                <a href="#habilidades" className="block text-slate-300 hover:text-white transition-colors">
                  Skills
                </a>
                <a href="#projetos" className="block text-slate-300 hover:text-white transition-colors">
                  Projetos
                </a>
                <a href="#contato" className="block text-slate-300 hover:text-white transition-colors">
                  Contato
                </a>
              </nav>
            </div>

            {/* Coluna 3 */}
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4">
                Redes Sociais
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/angelosouza1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 md:w-11 md:h-11 bg-slate-700 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-600 dark:hover:bg-slate-700 transition-colors"
                >
                  <Github size={20} className="md:size-[22px]" />
                </a>
                <a
                  href="https://linkedin.com/in/angeloafsouza"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 md:w-11 md:h-11 bg-slate-700 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-600 dark:hover:bg-slate-700 transition-colors"
                >
                  <Linkedin size={20} className="md:size-[22px]" />
                </a>
                <a
                  href="https://wakatime.com/@AAFS1981"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Wakatime"
                  className="w-10 h-10 md:w-11 md:h-11 bg-slate-700 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-600 dark:hover:bg-slate-700 transition-colors"
                >
                  <Clock size={20} className="md:size-[22px]" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-10 md:mt-12 pt-8 md:pt-10 text-center">
            <p className="text-slate-300 text-sm md:text-base">
              © {new Date().getFullYear()} Angelo Souza. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
