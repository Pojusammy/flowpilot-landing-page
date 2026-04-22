"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Header, HeroContent, PulsingCircle, ShaderBackground } from "@/components/ui/Flowpilot-hero-section"
import { Logos3 } from "@/components/ui/logos3"
import { Features } from "@/components/ui/features-4"
import { HowItWorks } from "@/components/ui/how-it-works"
import { UseCases } from "@/components/ui/use-cases"
import { Pricing2 } from "@/components/ui/pricing-cards"
import { TestimonialsSplit } from "@/components/ui/split-testimonial"
import { Faq5 } from "@/components/ui/faq-5"
import { FinalCta } from "@/components/ui/final-cta"

function RevealSection({ children, id }: { children: ReactNode; id?: string }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div id={id} className={id ? "scroll-mt-8" : undefined}>
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18, scale: 0.985, clipPath: "inset(3% 0% 0% 0%)" }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1, clipPath: "inset(0% 0% 0% 0%)" }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <ShaderBackground>
        <Header />
        <HeroContent />
        <PulsingCircle />
      </ShaderBackground>
      <RevealSection>
        <Logos3 />
      </RevealSection>
      <RevealSection id="features">
        <Features />
      </RevealSection>
      <RevealSection id="how-it-works">
        <HowItWorks />
      </RevealSection>
      <RevealSection>
        <UseCases />
      </RevealSection>
      <RevealSection id="pricing">
        <Pricing2 />
      </RevealSection>
      <RevealSection>
        <TestimonialsSplit />
      </RevealSection>
      <RevealSection>
        <Faq5 />
      </RevealSection>
      <RevealSection id="contact">
        <FinalCta />
      </RevealSection>
    </>
  )
}
