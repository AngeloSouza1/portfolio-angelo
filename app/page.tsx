import { Header } from "@/components/header"
import { SectionWrapper } from "@/components/section-wrapper"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 relative">
      <Header />

      {/* Container para seções sobrepostas */}
      <div className="relative min-h-screen">
        <SectionWrapper id="hero">
          <Hero />
        </SectionWrapper>

        <SectionWrapper id="sobre">
          <About />
        </SectionWrapper>

        <SectionWrapper id="habilidades">
          <Skills />
        </SectionWrapper>

        <SectionWrapper id="projetos">
          <Projects />
        </SectionWrapper>

        <SectionWrapper id="contato">
          <Contact />
        </SectionWrapper>
      </div>

      {/* Footer sempre visível */}
      <div className="relative z-30">
        <Footer />
      </div>

      <ScrollToTop />
    </main>
  )
}
