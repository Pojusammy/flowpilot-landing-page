"use client"

import { useState } from "react"
import { ArrowRight, CircleCheck } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ShineBorder } from "@/components/ui/shine-border"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

interface PricingFeature {
  text: string
}

interface PricingPlan {
  id: string
  name: string
  description: string
  monthlyPrice: string
  yearlyPrice: string
  priceSuffix: string
  features: PricingFeature[]
  button: {
    text: string
    url: string
  }
}

const plans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    description: "For individuals getting started",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    priceSuffix: "/ month",
    features: [
      { text: "Up to 2 projects" },
      { text: "Basic task management" },
      { text: "AI task generation" },
      { text: "1 team member" },
      { text: "Limited history" },
    ],
    button: {
      text: "Get Started Free",
      url: "#pricing",
    },
  },
  {
    id: "pro",
    name: "Pro",
    description: "For growing teams that need more speed",
    monthlyPrice: "$19",
    yearlyPrice: "$15",
    priceSuffix: "/ user / month",
    features: [
      { text: "Unlimited projects" },
      { text: "Unlimited tasks" },
      { text: "AI project assistant" },
      { text: "Automated status updates" },
      { text: "Team collaboration tools" },
      { text: "Real-time dashboards" },
    ],
    button: {
      text: "Start Pro Trial",
      url: "#pricing",
    },
  },
  {
    id: "business",
    name: "Business",
    description: "For teams that need scale, control, and visibility",
    monthlyPrice: "$49",
    yearlyPrice: "$39",
    priceSuffix: "/ user / month",
    features: [
      { text: "Everything in Pro" },
      { text: "Advanced permissions" },
      { text: "Workflow automations" },
      { text: "Admin controls" },
      { text: "Priority support" },
      { text: "Custom reporting" },
    ],
    button: {
      text: "Talk to Sales",
      url: "#contact",
    },
  },
]

export function Pricing2() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="relative overflow-hidden bg-[#F0F4FF] px-6 py-16 text-[#172033] md:py-24">
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Badge variant="outline" className="bg-white/55 backdrop-blur-sm">
            Pricing
          </Badge>
          <h2 className="text-balance text-4xl font-light tracking-tight md:text-5xl">
            Simple pricing for teams of <span className="instrument italic">every size</span>
          </h2>
          <p className="max-w-xl text-sm font-light leading-relaxed text-black/55">
            Start free, upgrade when you need more control and collaboration.
          </p>

          <div className="mt-2 flex items-center gap-3 rounded-full border border-black/10 bg-white/55 px-4 py-2 text-xs font-light text-black/60 backdrop-blur-sm">
            <Label htmlFor="billing-cycle" className={cn("text-xs font-light", !isYearly && "text-[#172033]")}>
              Monthly
            </Label>
            <Switch id="billing-cycle" checked={isYearly} onCheckedChange={setIsYearly} />
            <Label htmlFor="billing-cycle" className={cn("text-xs font-light", isYearly && "text-[#172033]")}>
              Yearly
            </Label>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:mt-10 lg:grid-cols-3">
          {plans.map((plan) => {
            const isFeatured = plan.id === "pro"
            const pricingCard = (
              <Card
                className={cn(
                  "flex min-h-[36rem] flex-col overflow-hidden rounded-[2rem] border-black/10 bg-white/55 text-left shadow-sm backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:bg-white/70",
                  isFeatured && "border-transparent bg-white/75 ring-1 ring-[#2D69FF]/10",
                )}
              >
                <CardHeader className="space-y-5 p-8">
                  <div className="flex items-center justify-between gap-4">
                    <CardTitle className="text-2xl font-light tracking-tight text-[#172033]">{plan.name}</CardTitle>
                    {isFeatured ? (
                      <Badge variant="outline" className="bg-[#172033] text-white">
                        Popular
                      </Badge>
                    ) : null}
                  </div>
                  <p className="min-h-10 text-sm font-light leading-relaxed text-black/55">{plan.description}</p>
                  <div>
                    <span className="text-5xl font-light tracking-tight text-[#172033]">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="ml-2 text-sm font-light text-black/50">{plan.priceSuffix}</span>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 px-8">
                  <Separator className="mb-6" />
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex gap-3 text-sm font-light leading-relaxed text-black/65">
                        <CircleCheck className="mt-0.5 size-4 shrink-0 text-[#2D69FF]" strokeWidth={1.75} />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="p-8 pt-4">
                  <Button
                    asChild
                    className={cn(
                      "w-full rounded-full text-xs font-light",
                      isFeatured
                        ? "bg-[#172033] text-white hover:bg-[#22365f]"
                        : "border border-black/15 bg-transparent text-[#172033] hover:bg-white/80",
                    )}
                    variant={isFeatured ? "default" : "outline"}
                    size="lg"
                  >
                    <a href={plan.button.url}>
                      {plan.button.text}
                      <ArrowRight className="ml-2 size-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            )

            return isFeatured ? (
              <ShineBorder
                key={plan.id}
                borderRadius={32}
                borderWidth={2}
                duration={7}
                color={["#2D69FF", "#F0F4FF", "#172033", "#8CB4FF"]}
                className="rounded-[2rem] bg-white/40 shadow-sm"
              >
                {pricingCard}
              </ShineBorder>
            ) : (
              <div key={plan.id}>{pricingCard}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
