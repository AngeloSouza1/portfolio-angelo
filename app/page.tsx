import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { SectionWrapper } from "@/components/section-wrapper"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const About = dynamic(
  () => import("@/components/about").then((m) => ({ default: m.About })),
  { ssr: false },
)
const Skills = dynamic(
  () => import("@/components/skills").then((m) => ({ default: m.Skills })),
  { ssr: false },
)
const Projects = dynamic(
  () => import("@/components/projects").then((m) => ({ default: m.Projects })),
  { ssr: false },
)
const Contact = dynamic(
  () => import("@/components/contact").then((m) => ({ default: m.Contact })),
  { ssr: false },
)

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 relative">
      <Header />

      {/* Container para seções sobrepostas */}
      <div className="relative min-h-screen">
        <SectionWrapper id="hero" component={Hero} />

        <SectionWrapper id="sobre" component={About} />

        <SectionWrapper id="habilidades" component={Skills} />

        <SectionWrapper id="projetos" component={Projects} />

        <SectionWrapper id="contato" component={Contact} className="pb-0" />
      </div>

      {/* Footer sempre visível */}
      <div className="relative z-30">
        <Footer />
      </div>

      <ScrollToTop />
    </main>
  )
}
