import { ArrowRight } from "lucide-react"

export function PortfolioSection() {
  const cases = [
    { 
      title: "Privatna stomatološka ordinacija", 
      metric: "+120% upita tjedno", 
      problem: "Stara stranica nije bila responzivna. Pacijenti su odustajali prije nego što bi pronašli broj telefona.",
      solution: "Iznimno brza web stranica sa snažnim fokusom na povjerenje (slike tima) i jasnim 'Rezerviraj termin' gumbima na mobitelu." 
    },
    { 
      title: "Lokalni kozmetički salon", 
      metric: "Ušteda vremena", 
      problem: "Klijentica je gubila sate dnevno odgovarajući na ista pitanja o cijenama i uslugama u Instagram DM-ovima.",
      solution: "Premium dizajn koji trenutačno komunicira stručnost, uz integriran digitalni cjenik i direktno prosljeđivanje na WhatsApp." 
    },
    { 
      title: "Luksuzna kuća za odmor", 
      metric: "Više direktnih rezervacija", 
      problem: "Ovisnost o Booking i Airbnb provizijama. Gosti nisu imali gdje provjeriti kredibilitet ponude.",
      solution: "Brza višejezična stranica, sa zadivljujućom galerijom fotografija i jednostavnim procesom direktnog slanja upita." 
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-surface relative border-t border-border-subtle">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 md:flex justify-between items-end gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Kako vaš web pretvaramo u opipljiv poslovni rezultat
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              Ne radimo umjetnička djela za galerije. Dizajniramo s jednom svrhom – da vaš telefon zvoni češće, a vaš inbox bude pun ciljanih upita.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="flex flex-col bg-background border border-border-subtle rounded-2xl overflow-hidden hover:border-white/10 transition-colors">
              <div className="p-8 border-b border-border-subtle bg-surface-raised bg-opacity-30">
                 <div className="text-primary text-2xl font-black mb-2">{c.metric}</div>
                 <h3 className="text-lg font-bold text-white leading-tight">{c.title}</h3>
              </div>
              <div className="p-8 flex flex-col gap-6 flex-1">
                 <div>
                   <p className="text-xs uppercase tracking-wider text-text-muted font-bold mb-2">Izazov</p>
                   <p className="text-sm text-text-muted leading-relaxed">{c.problem}</p>
                 </div>
                 <div className="w-full h-px bg-border-subtle" />
                 <div>
                   <p className="text-xs uppercase tracking-wider text-primary font-bold mb-2">Rješenje</p>
                   <p className="text-sm text-text-main leading-relaxed font-medium">{c.solution}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors group px-6 py-3 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/10">
              Želite slične rezultate? <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </a>
        </div>
      </div>
    </section>
  )
}
