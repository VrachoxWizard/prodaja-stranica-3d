export function PortfolioSection() {
  const principles = [
    { title: "Jasna navigacija", category: "Korisničko iskustvo (UX)", desc: "Posjetitelj u 3 sekunde mora shvatiti što nudite i kako vas kontaktirati." },
    { title: "Moderan vizual", category: "Prvi dojam", desc: "Dizajn koji sugerira kvalitetu vaše usluge i izdvaja vas od konkurencije." },
    { title: "Prilagođeno mobitelima", category: "Tehnička izvedba", desc: "Više od 70% posjeta danas dolazi putem mobilnih uređaja. Vaša stranica mora raditi savršeno na svakom ekranu." },
  ];

  return (
    <section className="py-24 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Što svaku našu stranicu čini uspješnom?
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Glavni cilj vaše stranice nije samo da izgleda lijepo, već da pretvara posjetitelje u stvarne klijente. Ovo su temelji na kojima gradimo svaki projekt:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-surface/20 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:bg-surface/30">
              <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-4">{p.category}</p>
              <p className="text-sm text-text-muted leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
