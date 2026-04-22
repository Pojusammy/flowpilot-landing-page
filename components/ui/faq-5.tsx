import { Badge } from "@/components/ui/badge"

export interface FaqItem {
  question: string
  answer: string
}

export interface Faq5Props {
  badge?: string
  heading?: string
  description?: string
  faqs?: FaqItem[]
}

const defaultFaqs: FaqItem[] = [
  {
    question: "Can I use Flowpilot for free?",
    answer: "Yes. The free plan is great for individuals or small teams getting started.",
  },
  {
    question: "Do I need technical knowledge to use it?",
    answer: "No. Flowpilot is built for both technical and non-technical teams.",
  },
  {
    question: "Can I upgrade later?",
    answer: "Yes. You can start free and upgrade whenever your team needs more features.",
  },
  {
    question: "Is there a free trial for paid plans?",
    answer: "Yes. Pro comes with a free trial so your team can test it before committing.",
  },
]

export const Faq5 = ({
  badge = "FAQ",
  heading = "Frequently asked questions",
  description,
  faqs = defaultFaqs,
}: Faq5Props) => {
  return (
    <section className="relative overflow-hidden bg-[#F0F4FF] dark:bg-[#071426] px-6 py-16 text-[#172033] dark:text-[#EAF2FF] md:py-24">
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <Badge variant="outline" className="bg-white/55 dark:bg-white/[0.08] backdrop-blur-sm">
            {badge}
          </Badge>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-4xl font-light tracking-tight md:text-5xl">
            Frequently asked <span className="instrument italic">questions</span>
          </h2>
          {description ? <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-black/55 dark:text-white/60">{description}</p> : null}
        </div>

        <div className="mx-auto mt-9 max-w-3xl rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/55 dark:bg-white/[0.08] p-6 shadow-sm backdrop-blur-sm md:mt-10 md:p-8">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="flex gap-4 border-b border-black/10 dark:border-white/10 py-6 last:border-b-0">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-[#F0F4FF] dark:bg-[#071426] font-mono text-xs text-[#2D69FF]">
                {index + 1}
              </span>
              <div>
                <h3 className="mb-2 text-sm font-medium tracking-tight text-[#172033] dark:text-[#EAF2FF]">{faq.question}</h3>
                <p className="text-sm font-light leading-relaxed text-black/55 dark:text-white/60">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
