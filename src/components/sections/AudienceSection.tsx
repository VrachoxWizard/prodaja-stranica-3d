import { siteContent } from "@/data/siteContent"
import { Users, Code, Scissors, Briefcase, Key } from "lucide-react"

const icons = [Briefcase, Users, Scissors, Key, Code];

export function AudienceSection() {
  return (
    <section className="py-24 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-4 text-center max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12">
          Kome su namijenjeni naši paketi?
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {siteContent.audiences.map((audience, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="inline-flex items-center gap-3 bg-surface/20 backdrop-blur-md px-6 py-4 rounded-xl border border-white/10 hover:border-white/20 hover:bg-surface/40 transition-all duration-300 shadow-sm">
                <Icon className="w-5 h-5 text-primary" />
                <span className="font-medium text-text-main">{audience}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
