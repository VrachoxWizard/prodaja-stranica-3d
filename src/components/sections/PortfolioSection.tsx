export function PortfolioSection() {
  const mockProjects = [
    { title: "Stomatološka Ordinacija", category: "Usluge" },
    { title: "Boutique Hotel", category: "Turizam" },
    { title: "Pravni Konzultant", category: "Konzalting" },
  ];

  return (
    <section className="py-24 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Primjeri iz prakse.
          </h2>
          <p className="text-lg text-text-muted">
            Stvarne reference dodaju se ovdje.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mockProjects.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-surface/20 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden mb-4 relative shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
                  <span className="text-text-muted/50 font-medium">Render {i + 1}</span>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-sm text-text-muted">{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
