import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

export function PortfolioSection() {
  const cases = [
    { 
      title: "Dental Studio Croatia", 
      metric: "+140% upita", 
      problem: "Zastarjeli dizajn odbijao je mlađu publiku i otežavao bukiranja na mobitelu.",
      result: "Potpuna digitalna transformacija s fokusom na brzinu i mobilnu konverziju.",
      tag: "DENTALNA MEDICINA"
    },
    { 
      title: "L'Art Beauty Center", 
      metric: "Ušteda ~10h tjedno", 
      problem: "Sate su gubili na ručno odgovaranje na Instagramu bez jasnog prodajnog lijevka.",
      result: "Integriran sustav rezervacija i premium vizualni autoritet koji prodaje sam.",
      tag: "BEAUTY & WELLNESS"
    },
    { 
      title: "Villa Mediterranean", 
      metric: "Direct Booking +80%", 
      problem: "Ovisnost o platformama s visokim provizijama. Nedostatak vlastitog brenda.",
      result: "Visoko-konvertibilna stranica s direktnim upitima i nula provizija.",
      tag: "TURIZAM & NAJAM"
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <div className="inline-block text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-6">Rezultati & Dokazi</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 font-serif">
              Web stranice koje <span className="text-primary italic">zapravo</span> rade za vas.
            </h2>
          </div>
          <div className="lg:mb-2 max-w-sm">
             <p className="text-text-muted leading-relaxed font-light">
               Ne radimo dekoraciju. Radimo strateški alat koji vaš telefon pretvara u izvor novih poslova.
             </p>
          </div>
        </div>

        <div className="space-y-12">
          {cases.map((c, i) => (
            <div key={i} className="group relative">
               <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center p-8 lg:p-12 glass-card hover:bg-surface-raised transition-all duration-500 overflow-hidden">
                  
                  {/* Text Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                       <span className="text-[10px] font-bold text-primary border border-primary/30 px-3 py-1 rounded-full">{c.tag}</span>
                       <div className="h-px flex-1 bg-white/5" />
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 font-serif">{c.title}</h3>
                    
                    <div className="grid md:grid-cols-2 gap-12 mb-10">
                       <div>
                          <div className="text-[10px] font-bold text-text-dim uppercase tracking-widest mb-3">Izazov</div>
                          <p className="text-text-muted leading-relaxed text-sm">{c.problem}</p>
                       </div>
                       <div>
                          <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3">Rezultat</div>
                          <p className="text-text-main leading-relaxed text-sm font-medium">{c.result}</p>
                       </div>
                    </div>

                    <div className="flex items-baseline gap-4">
                       <div className="text-4xl md:text-5xl font-black text-primary font-serif">{c.metric}</div>
                       <div className="text-[10px] font-bold text-text-dim uppercase tracking-widest">Mjerljivi Napredak</div>
                    </div>
                  </div>

                  {/* Visual Portal Placeholder */}
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-xl bg-surface-raised border border-white/5 overflow-hidden relative shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
                       {/* Abstract placeholder for case study */}
                       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-px bg-primary/20 rotate-45" />
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-px bg-primary/20 -rotate-45" />
                       <div className="absolute top-4 right-4 text-[9px] font-bold text-text-dim p-2 uppercase">Povjerljivo</div>
                    </div>
                    
                    {/* Floating Decorative */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 blur-3xl pointer-events-none" />
                  </div>
               </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
           <Button href="#contact" variant="outline" className="rounded-full px-12 py-6 text-sm font-bold border-white/10 hover:border-primary/50 group">
              Želim sličnu transformaciju
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
           </Button>
        </div>
      </div>
    </section>
  )
}
