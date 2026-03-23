import { siteContent } from "@/data/siteContent"
import { Button } from "@/components/ui/Button"
import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section id="usluge" className="py-24 lg:py-32 relative bg-background border-t border-border-subtle">
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Usluge prilagođene vašoj fazi rasta.
          </h2>
          <p className="text-lg text-text-muted">
            Jasna struktura i transparentna ulaganja. Nema neugodnih iznenađenja na kraju mjeseca.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {siteContent.packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative flex flex-col h-full rounded-2xl transition-all duration-500 ${pkg.highlight ? 'bg-surface border border-primary/30 shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] ring-1 ring-primary/20 md:-translate-y-4' : 'bg-surface/30 border border-border-subtle hover:bg-surface/60 hover:border-white/10'}`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-gradient-to-r from-primary-light to-primary text-black text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-sm">
                    {pkg.cta === "Preporučeni izbor" ? "Preporučeni Izbor" : "Najbolja Vrijednost"}
                  </span>
                </div>
              )}
              
              <div className="p-8 pb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                {('bestFit' in pkg) && (
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">{(pkg as any).bestFit}</p>
                )}
                <p className="text-sm text-text-muted leading-relaxed font-medium min-h-[40px]">{pkg.description}</p>
                
                <div className="mt-8 flex items-baseline gap-1">
                  <div className="text-3xl font-black text-white">{pkg.price}</div>
                </div>
                {('turnaround' in pkg) && (
                  <p className="text-xs text-text-muted mt-2 font-medium">Vrijeme: {(pkg as any).turnaround}</p>
                )}
              </div>
              
              <div className={`flex-1 p-8 pt-6 ${pkg.highlight ? 'bg-surface-raised/40 rounded-b-2xl' : 'bg-transparent border-t border-border-subtle'}`}>
                <p className="text-sm font-semibold text-white mb-4">Što je sve uključeno:</p>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.highlight ? 'text-primary' : 'text-text-muted'}`} />
                      <span className="text-text-muted text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  href="#contact"
                  variant={pkg.highlight ? "primary" : "outline"} 
                  size="lg" 
                  className="w-full font-bold shadow-none"
                >
                  {pkg.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
