import { BellDot, Bot, ClipboardList, Gauge, MessageSquareText, NotebookTabs } from "lucide-react"

const features = [
  {
    title: "AI Project Assistant",
    description: "Turn rough ideas into structured tasks, timelines, and action plans in seconds.",
    icon: Bot,
  },
  {
    title: "Smart Task Management",
    description: "Create, assign, prioritize, and track tasks with a simple workflow your whole team can follow.",
    icon: ClipboardList,
  },
  {
    title: "Automated Status Updates",
    description: "Flowpilot summarizes project progress automatically so everyone stays informed without chasing updates.",
    icon: BellDot,
  },
  {
    title: "Team Collaboration",
    description: "Comment on tasks, share feedback, tag teammates, and keep conversations connected to the work.",
    icon: MessageSquareText,
  },
  {
    title: "Docs and Decisions in One Place",
    description: "Store meeting notes, briefs, and key decisions where your team can actually find them.",
    icon: NotebookTabs,
  },
  {
    title: "Real-Time Dashboards",
    description: "See what is on track, what is blocked, and what needs attention from a single view.",
    icon: Gauge,
  },
]

export function Features() {
  return (
    <section className="relative overflow-hidden bg-[#F0F4FF] dark:bg-[#071426] pb-20 pt-6 text-[#172033] dark:text-[#EAF2FF] md:pb-24 md:pt-8">
      <div className="relative mx-auto max-w-6xl space-y-9 px-6 md:space-y-12">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <div className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-white/55 dark:bg-white/[0.08] px-3 py-1 backdrop-blur-sm">
            <span className="text-xs font-light text-black/70 dark:text-white/70">Flowpilot features</span>
          </div>
          <h2 className="text-balance text-4xl font-light tracking-tight text-[#172033] dark:text-[#EAF2FF] md:text-5xl">
            Everything your team needs to <span className="instrument italic">move faster</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm font-light leading-relaxed text-black/55 dark:text-white/60">
            From planning to delivery, Flowpilot keeps your team aligned without endless meetings, scattered docs, or
            status update fatigue.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/55 dark:bg-white/[0.08] shadow-sm backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className="group min-h-48 space-y-4 border-b border-black/10 p-8 transition duration-200 hover:bg-white/70 dark:border-white/10 dark:hover:bg-white/[0.14] sm:border-r lg:p-10 [&:nth-child(2n)]:sm:border-r-0 [&:nth-child(3n)]:lg:border-r-0 [&:nth-last-child(-n+2)]:sm:border-b-0 [&:nth-last-child(-n+3)]:lg:border-b-0"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[#F0F4FF] text-[#2D69FF] transition duration-200 group-hover:border-[#2D69FF]/25 group-hover:bg-white dark:border-white/10 dark:bg-[#071426] dark:hover:bg-white/[0.14]">
                  <Icon className="size-4" strokeWidth={1.75} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium tracking-tight text-[#172033] dark:text-[#EAF2FF]">{feature.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-black/55 dark:text-white/60">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
