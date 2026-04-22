import { FeatureShowcase, type TabMedia } from "@/components/ui/feature-showcase"

const tabs: TabMedia[] = [
  {
    value: "workspace",
    label: "Workspace",
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Team collaborating around a workspace table",
  },
  {
    value: "planning",
    label: "Planning",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    alt: "Team planning project goals on a board",
  },
  {
    value: "ai-updates",
    label: "AI updates",
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    alt: "Project team reviewing updates on laptops",
  },
  {
    value: "delivery",
    label: "Delivery",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    alt: "Analytics dashboard showing project progress",
  },
]

export function HowItWorks() {
  return (
    <FeatureShowcase
      title="How Flowpilot works"
      description="Flowpilot is designed to fit the way your team already works, so you can get started quickly without a heavy setup process."
      stats={[]}
      steps={[
        {
          id: "step-1",
          title: "Step 1",
          text: "Add your team and create your workspace.",
        },
        {
          id: "step-2",
          title: "Step 2",
          text: "Set up projects, goals, and timelines.",
        },
        {
          id: "step-3",
          title: "Step 3",
          text: "Let AI organize tasks and generate updates.",
        },
        {
          id: "step-4",
          title: "Step 4",
          text: "Track progress and deliver with confidence.",
        },
      ]}
      tabs={tabs}
      defaultTab="planning"
      panelMinHeight={620}
    />
  )
}
