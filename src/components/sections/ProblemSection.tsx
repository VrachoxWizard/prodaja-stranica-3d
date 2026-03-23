import { siteContent } from "@/data/siteContent"
import { AlertCircle } from "lucide-react"

export function ProblemSection() {
  return (
    <section id="problemi" className="py-32 lg:py-40 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
            Zašto gubite klijente na internetu?
          </h2>
          <p className="text-lg text-text-muted">
            Prepoznali ste se u nečemu od ovoga? Niste jedini.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {siteContent.problems.map((problem, i) => (
            <div key={i} className="bg-surface/40 backdrop-blur-2xl rounded-2xl p-8 ring-1 ring-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)] hover:ring-white/20 transition-all duration-500 hover:bg-surface/60 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                <AlertCircle className="w-6 h-6 text-red-400" />
              </div>
              <p className="text-text-muted leading-relaxed font-medium">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
