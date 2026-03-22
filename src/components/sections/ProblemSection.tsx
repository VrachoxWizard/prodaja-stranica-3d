import { siteContent } from "@/data/siteContent"
import { AlertCircle } from "lucide-react"

export function ProblemSection() {
  return (
    <section id="problemi" className="py-24 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Zašto gubite klijente na internetu?
          </h2>
          <p className="text-lg text-text-muted">
            Prepoznali ste se u nečemu od ovoga? Niste jedini.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {siteContent.problems.map((problem, i) => (
            <div key={i} className="bg-surface/20 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-white/20 transition-all duration-500 hover:bg-surface/30 group shadow-lg">
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
