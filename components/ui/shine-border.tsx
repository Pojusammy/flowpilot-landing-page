"use client"

import type React from "react"
import { cn } from "@/lib/utils"

type ColorProp = string | string[]

interface ShineBorderProps {
  borderRadius?: number
  borderWidth?: number
  duration?: number
  color?: ColorProp
  className?: string
  children: React.ReactNode
}

function ShineBorder({
  borderRadius = 32,
  borderWidth = 2,
  duration = 8,
  color = "#2D69FF",
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
          "--border-width": `${borderWidth}px`,
          "--shine-pulse-duration": `${duration}s`,
          "--mask-linear-gradient": "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          "--background-radial-gradient": `radial-gradient(transparent, transparent, ${
            Array.isArray(color) ? color.join(", ") : color
          }, transparent, transparent)`,
        } as React.CSSProperties
      }
      className={cn(
        "relative h-full w-full rounded-[var(--border-radius)] p-[var(--border-width)] before:absolute before:inset-0 before:rounded-[var(--border-radius)] before:p-[var(--border-width)] before:content-[''] before:[background-image:var(--background-radial-gradient)] before:[background-size:300%_300%] before:[mask:var(--mask-linear-gradient)] before:[mask-composite:exclude] before:![-webkit-mask-composite:xor] motion-safe:before:animate-shine-pulse",
        className,
      )}
    >
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  )
}

export { ShineBorder }
