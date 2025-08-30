import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { SectionWrapper } from "@/components/section-wrapper"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const About = dynamic(() => import("@/components/about").then((m) => m.About))
const Skills = dynamic(() => import("@/components/skills").then((m) => m.Skills))
const Projects = dynamic(() => import("@/components/projects").then((m) => m.Projects))
const Contact = dynamic(() => import("@/components/contact").then((m) => m.Contact))

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
        <SectionWrapper id="contato" className="pb-0">
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
