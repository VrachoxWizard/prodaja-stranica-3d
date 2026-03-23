export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-20 mb-32">
          
          <div>
            <a href="#" className="flex items-center gap-3 mb-10 group">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-black font-black text-xl shadow-raised group-hover:scale-105 transition-transform duration-500">
                S
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-serif tracking-tighter">Studio<span className="text-primary italic">.</span></span>
            </a>
            <p className="text-text-muted leading-relaxed max-w-sm mb-12 font-light text-lg">
              Ekskluzivna digitalna rješenja za tvrtke koje cijene preciznost, autoritet i mjerljive poslovne rezultate.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-10">Usluge</h4>
            <ul className="space-y-6">
              <li><a href="#usluge" className="text-text-dim hover:text-primary transition-colors text-sm font-medium tracking-wide">Web Razvoj</a></li>
              <li><a href="#usluge" className="text-text-dim hover:text-primary transition-colors text-sm font-medium tracking-wide">Digitalna Strategija</a></li>
              <li><a href="#usluge" className="text-text-dim hover:text-primary transition-colors text-sm font-medium tracking-wide">UX Redizajn</a></li>
              <li><a href="#usluge" className="text-text-dim hover:text-primary transition-colors text-sm font-medium tracking-wide">SEO Autoritet</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-10">Kontakt</h4>
            <ul className="space-y-6">
              <li>
                <a href="mailto:upiti@studio-web.hr" className="text-text-dim hover:text-white transition-colors text-sm font-medium">
                  upiti@studio-web.hr
                </a>
              </li>
              <li>
                <a href="https://wa.me/385900000000" target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-white transition-colors text-sm font-medium">
                  WhatsApp Direct
                </a>
              </li>
              <li className="text-text-dim text-sm italic">Zagreb, Hrvatska</li>
            </ul>
          </div>

          <div className="lg:text-right">
             <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-10">Dostupnost</h4>
             <div className="inline-flex items-center gap-3 bg-white/5 border border-white/5 px-4 py-2 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest">Slobodni Termini: Travanj</span>
             </div>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 text-[10px] text-text-dim font-bold uppercase tracking-widest">
          <div className="mb-6 md:mb-0">
            © {new Date().getFullYear()} Studio Antigravity Design. Premium Standard.
          </div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Uvjeti</a>
            <a href="#" className="hover:text-white transition-colors">Privatnost</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
