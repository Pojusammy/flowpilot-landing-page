"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    id: 1,
    quote:
      "Flowpilot helped us cut down project confusion almost immediately. We spend less time asking for updates and more time actually shipping.",
    role: "Product Lead",
    company: "Product team",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    quote: "It feels like project management without the usual overhead. Simple, fast, and actually useful.",
    role: "Operations Manager",
    company: "Operations team",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
]

export function TestimonialsSplit() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const active = testimonials[activeIndex]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="relative overflow-hidden bg-[#F0F4FF] px-6 py-16 text-[#172033] md:py-24">
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-9 flex flex-col items-center gap-4 text-center md:mb-10">
          <Badge variant="outline" className="bg-white/55 backdrop-blur-sm">
            Testimonials
          </Badge>
          <h2 className="max-w-2xl text-balance text-4xl font-light tracking-tight md:text-5xl">
            What teams are <span className="instrument italic">saying</span>
          </h2>
        </div>

        <div
          className="group relative grid cursor-pointer gap-10 overflow-hidden rounded-[2rem] border border-black/10 bg-white/55 p-8 shadow-sm backdrop-blur-sm md:grid-cols-[1fr_auto] md:items-center md:gap-12 md:p-12"
          onClick={nextTestimonial}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.company}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2 text-xs font-light uppercase tracking-[0.18em] text-black/45"
              >
                <span className="h-px w-8 bg-black/25" />
                {active.company}
              </motion.div>
            </AnimatePresence>

            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={active.id}
                  initial={{ opacity: 0, y: 34 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -34 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-3xl text-3xl font-light leading-tight tracking-tight text-[#172033] md:text-5xl"
                >
                  “{active.quote}”
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.role}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="flex items-center gap-4"
              >
                <div className="h-px w-10 bg-black/20" />
                <p className="text-sm font-medium text-[#172033]">{active.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative h-64 w-full md:h-72 md:w-52">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, filter: "blur(18px)", scale: 1.04 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, filter: "blur(18px)", scale: 0.96 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <div className="h-full w-full overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#DCE8FF]">
                  <img src={active.image} alt={active.role} className="h-full w-full object-cover grayscale" />
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div
              animate={{
                opacity: isHovering ? 1 : 0,
                scale: isHovering ? 1 : 0.9,
              }}
              transition={{ duration: 0.2 }}
              className="absolute -bottom-9 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-light text-black/50 md:flex"
            >
              <span>Next</span>
              <ArrowUpRight className="h-3 w-3" />
            </motion.div>
          </div>

          <div className="flex items-center gap-3 md:absolute md:bottom-8 md:left-12">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  setActiveIndex(index)
                }}
                className="relative p-1"
                aria-label={`Show testimonial ${index + 1}`}
              >
                <span
                  className={`block h-2 w-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "scale-100 bg-[#172033]" : "scale-75 bg-black/25 hover:scale-100"
                  }`}
                />
                {index === activeIndex ? (
                  <motion.span
                    layoutId="activeTestimonialDot"
                    className="absolute inset-0 rounded-full border border-black/25"
                    transition={{ duration: 0.3 }}
                  />
                ) : null}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
