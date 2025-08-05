"use client"

import { useSectionTransition } from "@/hooks/useSectionTransition"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

const sectionComponents = {
  hero: Hero,
  sobre: About,
  habilidades: Skills,
  projetos: Projects,
  contato: Contact,
}

export function SectionContainer() {
  const { currentSection, getTransitionClass } = useSectionTransition()

  return (
    <div className="relative min-h-screen overflow-hidden">
      {Object.entries(sectionComponents).map(([sectionId, Component]) => (
        <div
          key={sectionId}
          id={sectionId}
          className={`absolute inset-0 w-full min-h-screen ${getTransitionClass(sectionId)}`}
        >
          <Component />
        </div>
      ))}
    </div>
  )
}
