import { ArrowRight } from "lucide-react"

import { AnimatedShaderBackground } from "@/components/ui/animated-shader-background"
import { Component as Footer } from "@/components/ui/footer-taped-design"

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#F0F4FF] dark:bg-[#071426] px-6 pt-8 text-center md:pt-10">
      <div className="relative overflow-hidden rounded-t-[2rem] bg-[#172033] px-6 py-16 text-white isolation-isolate dark:bg-[#081221] md:rounded-t-[3rem] md:px-10 md:py-24">
        <div className="absolute inset-0 overflow-hidden rounded-t-[2rem] md:rounded-t-[3rem]">
          <AnimatedShaderBackground />
          <div className="absolute inset-0 rounded-t-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.18),transparent_36%),linear-gradient(180deg,rgba(23,32,51,0.28),rgba(23,32,51,0.94))] md:rounded-t-[3rem]" />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-light text-white/80 backdrop-blur-sm">
            Ready when your team is
          </p>
          <h2 className="text-balance text-4xl font-light tracking-tight md:text-6xl">
            Bring clarity to your <span className="instrument italic">workflow</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-white/70">
            Stop juggling tasks, updates, and scattered information. Flowpilot helps your team stay aligned and keep work
            moving.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-xs font-light text-[#172033] transition duration-200 hover:bg-white/90 dark:bg-[#8CB4FF] dark:text-[#061225] dark:hover:bg-[#A8C6FF]"
            >
              Start Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center rounded-full border border-white/25 bg-transparent px-8 py-3 text-xs font-light text-white transition duration-200 hover:border-white/45 hover:bg-white/10"
            >
              See Pricing
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  )
}
