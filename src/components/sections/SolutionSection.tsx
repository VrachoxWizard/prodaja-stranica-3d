import { siteContent } from "@/data/siteContent"
import { CheckCircle2 } from "lucide-react"

export function SolutionSection() {
  return (
    <section className="py-24 lg:py-32 relative bg-surface">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="glass-panel p-8 md:p-12 lg:p-16 relative overflow-hidden border-primary/20">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12 text-gradient-primary">
              Postoji bolji i sigurniji način.
            </h2>
            
            <div className="flex flex-col gap-8">
              {siteContent.solutions.map((solution, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1 shadow-glow opacity-90">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg md:text-xl text-text-main leading-relaxed font-medium">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
