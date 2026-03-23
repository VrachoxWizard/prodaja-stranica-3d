export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface/50 py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="md:col-span-5">
            <a href="#" className="font-bold text-2xl tracking-tight flex items-center gap-3 mb-6 inline-flex">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-light to-primary flex items-center justify-center text-black font-black text-lg shadow-sm border border-primary/20">
                S
              </div>
              <span className="text-white">Studio<span className="text-primary">.</span></span>
            </a>
            <p className="text-text-muted leading-relaxed max-w-sm mb-8 font-medium">
              Ekskluzivan web dizajn i digitalna strategija za hrvatske obrtnike i poduzetnike. Pomažemo vam izgraditi povjerenje i ostvariti konkretne upite bez stresa.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6">Naše Usluge</h4>
            <ul className="space-y-4">
              <li><a href="#usluge" className="text-text-muted hover:text-white transition-colors font-medium">Izrada web stranica</a></li>
              <li><a href="#usluge" className="text-text-muted hover:text-white transition-colors font-medium">Redizajn postojećih stranica</a></li>
              <li><a href="#usluge" className="text-text-muted hover:text-white transition-colors font-medium">Održavanje i sigurnost</a></li>
              <li><a href="#usluge" className="text-text-muted hover:text-white transition-colors font-medium">SEO optimizacija</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-white font-bold mb-6">Kontakt</h4>
            <ul className="space-y-4 mb-8">
              <li>
                <a href="mailto:upiti@studio.hr" className="text-text-muted hover:text-primary transition-colors flex items-center gap-3 font-medium">
                  <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  upiti@studio-web.hr
                </a>
              </li>
              <li>
                <a href="https://wa.me/385900000000" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors flex items-center gap-3 font-medium">
                  <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  +385 90 000 0000 (WhatsApp)
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border-subtle text-sm text-text-muted/60 font-medium">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Studio Web Design. Sva prava pridržana.
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Uvjeti korištenja</a>
            <a href="#" className="hover:text-white transition-colors">Politika privatnosti</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
