"use client"

import * as React from "react"
import { ArrowRight } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export type TabMedia = {
  value: string
  label: string
  src: string
  alt?: string
}

export type ShowcaseStep = {
  id: string
  title: string
  text: string
}

export type FeatureShowcaseProps = {
  eyebrow?: string
  title: string
  description?: string
  stats?: string[]
  steps?: ShowcaseStep[]
  tabs: TabMedia[]
  defaultTab?: string
  panelMinHeight?: number
  className?: string
}

export function FeatureShowcase({
  eyebrow = "How it works",
  title,
  description,
  stats = ["4 steps", "Quick setup", "Team-ready"],
  steps = [],
  tabs,
  defaultTab,
  panelMinHeight = 620,
  className,
}: FeatureShowcaseProps) {
  const initial = defaultTab ?? tabs[0]?.value ?? "tab-0"

  return (
    <section className={cn("relative overflow-hidden bg-[#F0F4FF] dark:bg-[#071426] text-[#172033] dark:text-[#EAF2FF]", className)}>
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:py-24 lg:gap-12">
        <div className="md:col-span-5">
          <Badge variant="outline" className="mb-6 backdrop-blur-sm">
            {eyebrow}
          </Badge>

          <h2 className="text-balance text-4xl font-light leading-tight tracking-tight md:text-5xl">
            How <span className="instrument italic">Flowpilot</span> works
          </h2>

          {description ? <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-black/55 dark:text-white/60">{description}</p> : null}

          {stats.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {stats.map((stat) => (
                <Badge key={stat} variant="outline" className="bg-white/55 dark:bg-white/[0.08] text-black/60 dark:text-white/60">
                  {stat}
                </Badge>
              ))}
            </div>
          )}

          <div className="mt-10 max-w-xl">
            <Accordion type="single" defaultValue={steps[0]?.id} className="w-full">
              {steps.map((step) => (
                <AccordionItem key={step.id} value={step.id}>
                  <AccordionTrigger>{step.title}</AccordionTrigger>
                  <AccordionContent>{step.text}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-[#172033] dark:bg-[#8CB4FF] text-xs font-light text-white dark:text-[#061225] hover:bg-[#22365f] dark:hover:bg-[#A8C6FF]">
                <a href="#pricing">
                  Start Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-black/15 dark:border-white/15 bg-transparent text-xs font-light text-[#172033] dark:text-[#EAF2FF] hover:bg-white/65 dark:hover:bg-white/[0.12] dark:bg-white/[0.10]"
              >
                <a href="#features">Explore features</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <Card
            className="relative overflow-hidden rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/55 dark:bg-white/[0.08] p-0 shadow-sm backdrop-blur-sm"
            style={{ height: panelMinHeight, minHeight: panelMinHeight }}
          >
            <Tabs defaultValue={initial} className="relative h-full w-full">
              <div className="relative h-full w-full">
                {tabs.map((tab, index) => (
                  <TabsContent
                    key={tab.value}
                    value={tab.value}
                    className="absolute inset-0 m-0 h-full w-full data-[state=inactive]:hidden"
                  >
                    <img
                      src={tab.src}
                      alt={tab.alt ?? tab.label}
                      className="h-full w-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                  </TabsContent>
                ))}
              </div>

              <div className="pointer-events-auto absolute inset-x-0 bottom-5 z-10 flex w-full justify-center px-4">
                <TabsList className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.12] p-1 backdrop-blur-md">
                  {tabs.map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value}>
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  )
}
