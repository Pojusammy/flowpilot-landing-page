"use client"

import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Header, HeroContent, PulsingCircle, ShaderBackground } from "@/components/ui/Flowpilot-hero-section"

const Logos3 = lazy(() => import("@/components/ui/logos3").then((module) => ({ default: module.Logos3 })))
const Features = lazy(() => import("@/components/ui/features-4").then((module) => ({ default: module.Features })))
const HowItWorks = lazy(() => import("@/components/ui/how-it-works").then((module) => ({ default: module.HowItWorks })))
const UseCases = lazy(() => import("@/components/ui/use-cases").then((module) => ({ default: module.UseCases })))
const Pricing2 = lazy(() => import("@/components/ui/pricing-cards").then((module) => ({ default: module.Pricing2 })))
const TestimonialsSplit = lazy(() =>
  import("@/components/ui/split-testimonial").then((module) => ({ default: module.TestimonialsSplit })),
)
const Faq5 = lazy(() => import("@/components/ui/faq-5").then((module) => ({ default: module.Faq5 })))
const FinalCta = lazy(() => import("@/components/ui/final-cta").then((module) => ({ default: module.FinalCta })))

function RenderWhenNear({ children, id, minHeight = 0 }: { children: ReactNode; id?: string; minHeight?: number }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [shouldRender, setShouldRender] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const element = ref.current
    if (!element || shouldRender) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true)
          observer.disconnect()
        }
      },
      { rootMargin: "900px 0px" },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [shouldRender])

  return (
    <div ref={ref} id={id} className={id ? "scroll-mt-8" : undefined} style={shouldRender ? undefined : { minHeight }}>
      {shouldRender ? (
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18, scale: 0.985, clipPath: "inset(3% 0% 0% 0%)" }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1, clipPath: "inset(0% 0% 0% 0%)" }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      ) : null}
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
      <Suspense fallback={null}>
        <RenderWhenNear minHeight={300}>
          <Logos3 />
        </RenderWhenNear>
        <RenderWhenNear id="features" minHeight={560}>
          <Features />
        </RenderWhenNear>
        <RenderWhenNear id="how-it-works" minHeight={620}>
          <HowItWorks />
        </RenderWhenNear>
        <RenderWhenNear minHeight={620}>
          <UseCases />
        </RenderWhenNear>
        <RenderWhenNear id="pricing" minHeight={640}>
          <Pricing2 />
        </RenderWhenNear>
        <RenderWhenNear minHeight={520}>
          <TestimonialsSplit />
        </RenderWhenNear>
        <RenderWhenNear minHeight={460}>
          <Faq5 />
        </RenderWhenNear>
        <RenderWhenNear minHeight={620}>
          <FinalCta />
        </RenderWhenNear>
      </Suspense>
    </>
  )
}
