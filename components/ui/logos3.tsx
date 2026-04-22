"use client"

import { Atom, Boxes, Component, Database, Figma, Layers3, Triangle, Wind } from "lucide-react"

import { cn } from "@/lib/utils"

interface Logo {
  id: string
  description: string
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
}

interface Logos3Props {
  heading?: string
  logos?: Logo[]
  className?: string
}

const Logos3 = ({
  heading = "Trusted by teams that run cleaner projects",
  logos = [
    {
      id: "logo-1",
      description: "Astro",
      icon: Triangle,
    },
    {
      id: "logo-2",
      description: "Figma",
      icon: Figma,
    },
    {
      id: "logo-3",
      description: "Next.js",
      icon: Layers3,
    },
    {
      id: "logo-4",
      description: "React",
      icon: Atom,
    },
    {
      id: "logo-5",
      description: "shadcn/ui",
      icon: Component,
    },
    {
      id: "logo-6",
      description: "Supabase",
      icon: Database,
    },
    {
      id: "logo-7",
      description: "Tailwind CSS",
      icon: Wind,
    },
    {
      id: "logo-8",
      description: "Vercel",
      icon: Boxes,
    },
  ],
  className,
}: Logos3Props) => {
  return (
    <section className={cn("relative overflow-hidden bg-[#F0F4FF] dark:bg-[#071426] py-16 text-[#172033] dark:text-[#EAF2FF] md:py-20", className)}>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
        <div
          className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-white/55 dark:bg-white/[0.08] px-3 py-1 backdrop-blur-sm"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <span className="relative z-10 text-xs font-light text-black/70 dark:text-white/70">Trusted by operators and builders</span>
        </div>
        <h2 className="my-6 max-w-2xl text-4xl font-light tracking-tight text-[#172033] dark:text-[#EAF2FF] md:text-5xl">
          <span className="instrument italic">Trusted</span> by teams moving faster
        </h2>
        <p className="max-w-xl text-sm font-light leading-relaxed text-black/55 dark:text-white/60">{heading}</p>
      </div>
      <div className="relative pt-8 md:pt-10">
        <div className="relative mx-auto flex max-w-5xl items-center justify-center px-6">
          <div className="w-full overflow-hidden">
            <div className="logo-marquee-track flex w-max">
              {[0, 1].map((setIndex) => (
                <div key={setIndex} className="flex gap-4 pr-4 sm:gap-5 sm:pr-5" aria-hidden={setIndex === 1}>
                  {logos.map((logo) => (
                    <div
                      key={`${logo.id}-${setIndex}`}
                      className="flex h-16 w-[11.75rem] shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/65 px-5 shadow-sm backdrop-blur-sm transition duration-200 hover:border-black/20 hover:bg-white dark:border-white/10 dark:bg-white/[0.10] dark:hover:border-white/20 dark:hover:bg-white/[0.14] sm:w-[12.75rem] sm:px-6 md:w-[13.5rem]"
                    >
                      <logo.icon className="mr-2 h-5 w-5 shrink-0 text-black/45 dark:text-white/45" strokeWidth={1.75} />
                      <span className="min-w-0 truncate whitespace-nowrap text-lg font-light tracking-tight text-black/60 dark:text-white/60">{logo.description}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F0F4FF] to-transparent dark:from-[#071426]" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F0F4FF] to-transparent dark:from-[#071426]" />
        </div>
      </div>
    </section>
  )
}

export { Logos3 }
