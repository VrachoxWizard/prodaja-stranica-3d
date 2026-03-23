import { siteContent } from "@/data/siteContent"
import { Lightbulb } from "lucide-react"

export function SolutionSection() {
  return (
    <section className="py-32 lg:py-40 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
            Postoji bolji način.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {siteContent.solutions.map((solution, i) => (
            <div key={i} className="bg-surface/40 backdrop-blur-2xl rounded-2xl p-8 ring-1 ring-primary/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_30px_rgba(212,175,55,0.05)] hover:ring-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <p className="text-white font-medium leading-relaxed">{solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
