"use client"

import type React from "react"
import { Building2, Megaphone, Rocket, Shapes } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type UseCase = {
  value: string
  icon: React.ReactNode
  label: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

const useCases: UseCase[] = [
  {
    value: "product",
    icon: <Shapes className="h-auto w-4 shrink-0" />,
    label: "Product Teams",
    title: "Product Teams",
    description: "Plan launches, manage backlogs, and keep everyone aligned.",
    imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Product team planning a launch",
  },
  {
    value: "marketing",
    icon: <Megaphone className="h-auto w-4 shrink-0" />,
    label: "Marketing Teams",
    title: "Marketing Teams",
    description: "Coordinate campaigns, timelines, and content production in one place.",
    imageSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Marketing team coordinating campaign work",
  },
  {
    value: "agencies",
    icon: <Building2 className="h-auto w-4 shrink-0" />,
    label: "Agencies",
    title: "Agencies",
    description: "Track client work, deadlines, and internal collaboration without the mess.",
    imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Agency team collaborating on client work",
  },
  {
    value: "startups",
    icon: <Rocket className="h-auto w-4 shrink-0" />,
    label: "Startups",
    title: "Startups",
    description: "Move fast with a lightweight system that grows with your team.",
    imageSrc: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Startup team working together",
  },
]

export function UseCases() {
  return (
    <section className="relative overflow-hidden bg-[#F0F4FF] dark:bg-[#071426] px-6 py-16 text-[#172033] dark:text-[#EAF2FF] md:py-24">
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="bg-white/55 dark:bg-white/[0.08] backdrop-blur-sm">
            Use cases
          </Badge>
          <h2 className="max-w-2xl text-balance text-4xl font-light tracking-tight md:text-5xl">
            Built for teams that need <span className="instrument italic">clarity</span>
          </h2>
          <p className="max-w-2xl text-sm font-light leading-relaxed text-black/55 dark:text-white/60 md:max-w-[980px]">
            No matter how your team works, Flowpilot helps you stay on track and get things done{" "}
            <span className="md:block">without the usual friction.</span>
          </p>
        </div>

        <Tabs defaultValue={useCases[0].value} className="mt-8 md:mt-10">
          <TabsList className="mx-auto flex w-full max-w-full justify-start gap-2 rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/55 dark:bg-white/[0.08] p-2 backdrop-blur-sm sm:w-fit sm:justify-center">
            {useCases.map((useCase) => (
              <TabsTrigger
                key={useCase.value}
                value={useCase.value}
                className="shrink-0 gap-2"
              >
                {useCase.icon}
                {useCase.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/55 dark:bg-white/[0.08] p-6 shadow-sm backdrop-blur-sm lg:p-10">
            {useCases.map((useCase) => (
              <TabsContent
                key={useCase.value}
                value={useCase.value}
                className="grid gap-10 data-[state=inactive]:hidden lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
              >
                <div className="flex flex-col items-start gap-5">
                  <Badge variant="outline" className="bg-[#F0F4FF] dark:bg-[#071426]">
                    {useCase.label}
                  </Badge>
                  <h3 className="text-3xl font-light tracking-tight md:text-5xl">{useCase.title}</h3>
                  <p className="max-w-md text-sm font-light leading-relaxed text-black/55 dark:text-white/60">{useCase.description}</p>
                  <Button className="mt-2 rounded-full bg-[#172033] dark:bg-[#8CB4FF] text-xs font-light text-white dark:text-[#061225] hover:bg-[#22365f] dark:hover:bg-[#A8C6FF]" size="lg">
                    Learn more
                  </Button>
                </div>
                <div className="relative min-h-72 overflow-hidden rounded-[1.5rem] border border-black/10 dark:border-white/10 bg-[#DCE8FF] dark:bg-[#102238]">
                  <img src={useCase.imageSrc} alt={useCase.imageAlt} className="h-full min-h-72 w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/10" />
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}
