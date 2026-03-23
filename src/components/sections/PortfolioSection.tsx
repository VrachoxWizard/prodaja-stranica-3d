export function PortfolioSection() {
  const cases = [
    { 
      title: "Redizajn: Privatna ordinacija", 
      category: "Povećanje upita +120%", 
      desc: "Stara stranica nije bila prilagođena mobitelima i pacijenti su odustajali. Nova, iznimno brza stranica s jasnim \"naručite se\" gumbima udvostručila je broj narudžbi u samo mjesec dana." 
    },
    { 
      title: "Nova izrada: Kozmetički salon", 
      category: "Izgradnja povjerenja", 
      desc: "Klijentica je imala samo Instagram profil. Kreirali smo premium web stranicu koja odmah komunicira vrhunsku stručnost, štedeći joj sate odgovaranja na ista pitanja o cijenama i uslugama u DM-ovima." 
    },
    { 
      title: "Modernizacija: Kuća za odmor", 
      category: "Izravne rezervacije", 
      desc: "Smanjili smo ovisnost o Booking i Airbnb provizijama izradom brze višejezične stranice s kalendarom popunjenosti i jasnim WhatsAppCTA gumbom za direktne upite gostiju." 
    },
  ];

  return (
    <section className="py-32 lg:py-40 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Kako vaš web pretvaramo u prodajni alat
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Umjesto dizajna koji samo \"lijepo izgleda\", gradimo strategiju oko povjerenja i prikupljanja upita. Pogledajte primjere konkretnih rezultata:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-surface/40 backdrop-blur-2xl ring-1 ring-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)] hover:ring-primary/40 transition-all duration-500 hover:bg-surface/60 hover:-translate-y-1.5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors" />
              <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
              <p className="text-xs text-primary uppercase tracking-wider font-bold mb-4">{c.category}</p>
              <p className="text-sm text-text-muted leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
