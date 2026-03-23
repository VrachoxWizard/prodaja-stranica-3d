import { siteContent } from "@/data/siteContent"
import { Button } from "@/components/ui/Button"


export function PricingSection() {
  return (
    <section id="usluge" className="section-padding bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <div className="inline-block text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-6">Paketi & Ulaganja</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 font-serif">
              Struktura koja <span className="italic">ne skriva</span> ništa.
            </h2>
          </div>
          <div className="lg:mb-2 max-w-sm">
             <p className="text-text-muted leading-relaxed font-light">
               Precizno definirani opsezi rada. Bez skrivenih troškova ili kompleksnih ugovora. Samo rezultat.
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {siteContent.packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative flex flex-col h-full transition-all duration-500 bg-surface border border-white/5 group hover:border-primary/20 ${pkg.highlight ? 'shadow-raised lg:-translate-y-4' : ''}`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span className="bg-primary text-black text-[10px] font-black uppercase tracking-[0.2em] py-2 px-6 rounded-full">
                    NAJVIŠE UPITA
                  </span>
                </div>
              )}
              
              <div className="p-10 border-b border-white/5">
                <div className="flex justify-between items-start mb-6">
                   <h3 className="text-2xl font-bold text-white font-serif">{pkg.name}</h3>
                   {('turnaround' in pkg) && (
                     <div className="text-[10px] font-bold text-text-dim uppercase tracking-widest px-2 py-1 border border-white/5 font-sans">
                        {(pkg as any).turnaround}
                     </div>
                   )}
                </div>
                
                <p className="text-sm text-text-muted leading-relaxed mb-10 h-10 font-light">
                  {pkg.description}
                </p>
                
                <div className="flex items-baseline gap-1">
                  <div className="text-5xl font-black text-white font-serif tracking-tight">{pkg.price}</div>
                  <div className="text-[10px] font-bold text-text-dim uppercase tracking-widest ml-2">Fixno</div>
                </div>
              </div>
              
              <div className="flex-1 p-10">
                <ul className="space-y-6 mb-12">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 flex-shrink-0" />
                      <span className="text-text-muted text-sm leading-snug font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                    <Button 
                      href="#contact"
                      variant={pkg.highlight ? "primary" : "outline"} 
                      size="lg" 
                      className={`w-full font-bold text-xs uppercase tracking-[0.2em] rounded-none py-8 ${!pkg.highlight ? 'border-white/10 hover:border-primary/50' : 'border-none'}`}
                    >
                      {pkg.cta}
                    </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
