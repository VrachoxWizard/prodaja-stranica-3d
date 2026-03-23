import { siteContent } from "@/data/siteContent"
import { AlertCircle } from "lucide-react"

export function ProblemSection() {
  return (
    <section id="problemi" className="py-24 lg:py-32 bg-background relative border-t border-border-subtle">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          <div className="md:w-5/12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Zašto gubite klijente na internetu?
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              Loš digitalni nastup tiho uništava povjerenje prije nego što vas potencijalni klijent uopće kontaktira. Prepoznali ste simptome? Niste jedini.
            </p>
          </div>

          <div className="md:w-7/12 flex flex-col gap-4">
            {siteContent.problems.map((problem, i) => (
              <div key={i} className="flex items-start gap-5 p-6 rounded-2xl border border-transparent hover:border-border-subtle hover:bg-surface/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex-shrink-0 flex items-center justify-center mt-1">
                  <AlertCircle className="w-5 h-5 text-red-500/80" />
                </div>
                <p className="text-lg text-text-muted leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
