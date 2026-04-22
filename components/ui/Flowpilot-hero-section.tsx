"use client"

import { ArrowDown, Menu, X } from "lucide-react"
import type React from "react"
import { useEffect, useId, useRef, useState } from "react"

interface ShaderBackgroundProps {
  children: React.ReactNode
}

const HERO_BACKGROUND_URL = "https://i.pinimg.com/1200x/2b/98/88/2b9888c054781328a6ffad2370ead6f4.jpg"

export function ShaderBackground({ children }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div id="top" ref={containerRef} data-active={isActive} className="min-h-screen w-full relative overflow-hidden">
      {/* SVG Filters */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Background Image */}
      <img
        src={HERO_BACKGROUND_URL}
        alt=""
        className="hero-background-image absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.16),transparent_36%),linear-gradient(90deg,rgba(0,0,0,0.62),rgba(0,0,0,0.08)_58%,rgba(0,0,0,0.34))]" />

      {children}
    </div>
  )
}

function ScrollBadge({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  const circleId = useId()
  const pathRadius = compact ? 34 : 36
  const textLength = compact ? 214 : 226

  return (
    <div className={className}>
      <div className={`${compact ? "h-20 w-20" : "h-28 w-28"} relative flex items-center justify-center`}>
        <a
          href="#features"
          aria-label="Scroll to features"
          className={`${compact ? "h-9 w-9" : "h-12 w-12"} relative z-10 flex items-center justify-center rounded-full border border-white/25 bg-white/10 text-white shadow-[0_0_40px_rgba(255,255,255,0.12)] backdrop-blur-md transition duration-200 hover:bg-white/18 hover:border-white/40`}
        >
          <ArrowDown className={compact ? "h-4 w-4" : "h-5 w-5"} strokeWidth={1.75} />
        </a>

        {/* Rotating Text Around the Pulsing Border */}
        <svg
          className="rotating-circle-text absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
        >
          <defs>
            <path
              id={circleId}
              d={`M 50, 50 m -${pathRadius}, 0 a ${pathRadius},${pathRadius} 0 1,1 ${pathRadius * 2},0 a ${pathRadius},${pathRadius} 0 1,1 -${pathRadius * 2},0`}
            />
          </defs>
          <text className={`${compact ? "text-[8.5px]" : "text-[8.75px]"} fill-white/80 font-light tracking-normal`}>
            <textPath href={`#${circleId}`} startOffset="0%" textLength={textLength} lengthAdjust="spacing">
              Introducing Flowpilot • Introducing Flowpilot •
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  )
}

export function PulsingCircle() {
  return <ScrollBadge className="absolute bottom-8 right-8 z-30 hidden md:block" />
}

export function HeroContent() {
  return (
    <main className="absolute inset-x-0 bottom-6 z-20 px-6 md:bottom-8 md:left-8 md:right-auto md:max-w-lg md:px-0">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">Introducing Flowpilot</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl leading-tight tracking-tight font-light text-white mb-4 sm:text-5xl md:text-6xl md:leading-16">
          <span className="font-medium italic instrument">Run projects</span>
          <br />
          <span className="font-light tracking-tight text-white">without the chaos</span>
        </h1>

        {/* Description */}
        <p className="text-sm font-light text-white/70 mb-4 leading-relaxed">
          Flowpilot helps teams plan, track, and deliver work faster with AI-powered project management, automated
          updates, and one clear source of truth.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-3 flex-wrap sm:gap-4">
          <a
            href="#pricing"
            className="px-7 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer sm:px-8"
          >
            See Pricing
          </a>
          <a
            href="#pricing"
            className="px-7 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer sm:px-8"
          >
            Start Free
          </a>
        </div>
        <ScrollBadge className="ml-auto mt-4 w-fit md:hidden" compact />
      </div>
    </main>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navLinkClass =
    "text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"

  return (
    <header className="relative z-40 flex items-center justify-between p-6">
      {/* Logo */}
      <div className="flex items-center">
        <a href="#top" aria-label="Flowpilot home" className="inline-flex items-center">
          <img src="/flowpilot-logo.svg" alt="Flowpilot" className="h-8 w-auto brightness-0 invert" />
        </a>
      </div>

      {/* Navigation */}
      <nav className="hidden items-center space-x-2 md:flex">
        <a
          href="#features"
          className={navLinkClass}
        >
          Features
        </a>
        <a
          href="#pricing"
          className={navLinkClass}
        >
          Pricing
        </a>
        <a
          href="#how-it-works"
          className={navLinkClass}
        >
          How it works
        </a>
      </nav>

      {/* Login Button Group with Arrow */}
      <div id="gooey-btn" className="relative hidden items-center group md:flex" style={{ filter: "url(#gooey-filter)" }}>
        <button className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </button>
        <button className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10">
          Login
        </button>
      </div>

      <button
        type="button"
        aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen((open) => !open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-[0_0_28px_rgba(255,255,255,0.08)] backdrop-blur-md transition duration-200 hover:border-white/30 hover:bg-white/15 md:hidden"
      >
        {mobileMenuOpen ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
      </button>

      {mobileMenuOpen ? (
        <div className="absolute left-4 right-4 top-[calc(100%-0.5rem)] z-50 rounded-[1.5rem] border border-white/15 bg-black/45 p-3 shadow-2xl backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {[
              ["Features", "#features"],
              ["Pricing", "#pricing"],
              ["How it works", "#how-it-works"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full px-4 py-3 text-sm font-light text-white/80 transition duration-200 hover:bg-white/10 hover:text-white"
              >
                {label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 h-11 rounded-full bg-white px-5 text-sm font-light text-black transition duration-200 hover:bg-white/90"
            >
              Login
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
