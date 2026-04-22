"use client"

import AutoScroll from "embla-carousel-auto-scroll"
import { Atom, Boxes, Component, Database, Figma, Layers3, Triangle, Wind } from "lucide-react"

import { cn } from "@/lib/utils"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

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
    <section className={cn("relative overflow-hidden bg-[#F0F4FF] py-16 text-[#172033] md:py-20", className)}>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
        <div
          className="inline-flex items-center rounded-full border border-black/10 bg-white/55 px-3 py-1 backdrop-blur-sm"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <span className="relative z-10 text-xs font-light text-black/70">Trusted by operators and builders</span>
        </div>
        <h2 className="my-6 max-w-2xl text-4xl font-light tracking-tight text-[#172033] md:text-5xl">
          <span className="instrument italic">Trusted</span> by teams moving faster
        </h2>
        <p className="max-w-xl text-sm font-light leading-relaxed text-black/55">{heading}</p>
      </div>
      <div className="relative pt-8 md:pt-10">
        <div className="relative mx-auto flex max-w-5xl items-center justify-center px-6">
          <Carousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: true, speed: 0.8 })]} className="w-full">
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem key={logo.id} className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <div className="mx-6 flex h-16 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/65 px-8 shadow-sm backdrop-blur-sm transition duration-200 hover:border-black/20 hover:bg-white">
                    <logo.icon className="mr-2 h-5 w-5 text-black/45" strokeWidth={1.75} />
                    <span className="whitespace-nowrap text-lg font-light tracking-tight text-black/60">{logo.description}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F0F4FF] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F0F4FF] to-transparent" />
        </div>
      </div>
    </section>
  )
}

export { Logos3 }
