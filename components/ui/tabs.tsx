"use client"

import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as React from "react"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, onClick, onKeyUp, ...props }, ref) => {
  const centerActiveTrigger = React.useCallback((event: React.SyntheticEvent<HTMLElement>) => {
    const list = event.currentTarget

    requestAnimationFrame(() => {
      const activeTrigger = list.querySelector<HTMLElement>('[role="tab"][data-state="active"]')
      if (!activeTrigger) {
        return
      }

      const centeredLeft = activeTrigger.offsetLeft - list.clientWidth / 2 + activeTrigger.clientWidth / 2
      list.scrollTo({
        left: Math.max(0, centeredLeft),
        behavior: "smooth",
      })
    })
  }, [])

  return (
    <TabsPrimitive.List
      ref={ref}
      onClick={(event) => {
        onClick?.(event)
        centerActiveTrigger(event)
      }}
      onKeyUp={(event) => {
        onKeyUp?.(event)
        centerActiveTrigger(event)
      }}
      className={cn(
        "inline-flex scroll-px-4 items-center justify-center overflow-x-auto scroll-smooth rounded-full bg-white/65 dark:bg-white/[0.10] p-1 text-black/60 dark:text-white/60",
        className,
      )}
      {...props}
    />
  )
})
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-xs font-light outline-offset-2 transition-all hover:text-black dark:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-black/30 dark:focus-visible:outline-white/30 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#172033] data-[state=active]:text-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-[#8CB4FF] dark:data-[state=active]:text-[#061225]",
      className,
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn("outline-none", className)} {...props} />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsContent, TabsList, TabsTrigger }
