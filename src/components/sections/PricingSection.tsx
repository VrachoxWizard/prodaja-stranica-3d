import { siteContent } from "@/data/siteContent"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export function PricingSection() {
  return (
    <section id="usluge" className="py-32 lg:py-40 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
            Usluge prilagođene vašoj fazi rasta.
          </h2>
          <p className="text-lg text-text-muted">
            Bez obzira trebate li prvu stranicu ili ozbiljan redizajn, imamo rješenje koje radi za vas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {siteContent.packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={cn(
                "relative p-8 lg:p-10 flex flex-col h-full bg-surface/40 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500",
                pkg.highlight 
                  ? "ring-1 ring-primary/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_50px_rgba(212,175,55,0.15)] md:-translate-y-4" 
                  : "ring-1 ring-white/5 hover:ring-white/20 hover:bg-surface/60 hover:-translate-y-1"
              )}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-black text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                    Najčešći odabir
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">{pkg.name}</h3>
                {('bestFit' in pkg) && (
                  <p className="text-xs text-primary font-bold uppercase tracking-wider mb-3">{(pkg as { bestFit?: string }).bestFit}</p>
                )}
                <p className="text-sm text-text-muted min-h-[40px] leading-relaxed mb-4">{pkg.description}</p>
                {('turnaround' in pkg) && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-white/80 font-medium">
                    <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span>{(pkg as { turnaround?: string }).turnaround}</span>
                  </div>
                )}
              </div>
              
              <div className="mb-8 pb-8 border-b border-white/10">
                <div className="flex items-baseline gap-1">
                  <div className="text-2xl font-bold text-white">{pkg.price}</div>
                </div>
                <div className="text-xs font-medium text-text-muted mt-2 uppercase tracking-wide">Jasno ulaganje</div>
              </div>
              
              <ul className="flex-1 space-y-5 mb-10">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-text-muted text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                href="#contact"
                variant={pkg.highlight ? "primary" : "secondary"} 
                size="lg" 
                className="w-full font-bold text-base"
              >
                {pkg.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
