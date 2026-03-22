import { siteContent } from "@/data/siteContent"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export function PricingSection() {
  return (
    <section id="paketi" className="py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Jednostavni paketi bez skrivenih troškova.
          </h2>
          <p className="text-lg text-text-muted">
            Odaberite paket koji odgovara vašim trenutnim potrebama. Nadogradite bilo kada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {siteContent.packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={cn(
                "relative p-8 lg:p-10 flex flex-col h-full bg-surface/20 backdrop-blur-2xl transition-all duration-500",
                pkg.highlight 
                  ? "border-primary/40 shadow-[0_0_50px_rgba(212,175,55,0.15)] md:-translate-y-4 ring-1 ring-primary/30" 
                  : "border-white/5 hover:border-white/20 hover:bg-surface/30"
              )}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-black text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                    Najbolja vrijednost
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">{pkg.name}</h3>
                <p className="text-sm text-text-muted min-h-[40px] leading-relaxed">{pkg.description}</p>
              </div>
              
              <div className="mb-8 pb-8 border-b border-white/10">
                <div className="flex items-baseline gap-1">
                  <div className="text-4xl font-extrabold text-white">{pkg.price}</div>
                </div>
                <div className="text-sm font-medium text-text-muted mt-2">Jednokratno plaćanje</div>
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
