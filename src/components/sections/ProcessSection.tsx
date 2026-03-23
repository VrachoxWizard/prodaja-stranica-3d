import { siteContent } from "@/data/siteContent"

export function ProcessSection() {
  return (
    <section id="proces" className="py-24 lg:py-32 bg-transparent relative border-t border-border-subtle">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Jednostavan proces do novog weba.
          </h2>
          <p className="text-lg text-text-muted">
            Zaboravite na kompliciranje, duga čekanja i tehnički žargon. Mi cijenimo vaše vrijeme. Ovako izgleda suradnja:
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line connecting steps */}
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-border-subtle hidden md:block" />
          
          <div className="space-y-8 md:space-y-12">
            {siteContent.processSteps.map((step, i) => (
              <div key={i} className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start group">
                <div className="flex-shrink-0 w-14 h-14 rounded-full border border-border-subtle bg-surface flex items-center justify-center text-primary font-black text-xl shadow-sm z-10 transition-colors group-hover:bg-primary/5 group-hover:border-primary/40 relative">
                  {i + 1}
                </div>
                <div className="md:pt-3 bg-surface/30 border border-border-subtle rounded-2xl p-8 flex-1 transition-colors hover:bg-surface/50 shadow-sm">
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">{step.title}</h3>
                  <p className="text-text-muted leading-relaxed font-medium">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
