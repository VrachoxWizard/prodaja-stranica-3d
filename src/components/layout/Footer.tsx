export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="font-bold text-2xl tracking-tight text-white flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-black font-black text-lg">S</div>
          <span>Studio<span className="text-primary">.</span></span>
        </div>
        <p className="text-base text-text-muted mb-6 max-w-md mx-auto">
          Izrada modernih web stranica koje vašem poslovanju osiguravaju veći broj upita i ozbiljan profesionalni dojam online.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a href="mailto:info@vasatvrtka.hr" className="text-sm text-text-muted hover:text-white transition-colors flex items-center gap-2">
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            info@vasatvrtka.hr
          </a>
          <a href="https://wa.me/385912345678" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted hover:text-white transition-colors flex items-center gap-2">
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            +385 91 234 5678
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-text-muted/60">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Studio. Surađujemo s klijentima diljem Hrvatske.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Uvjeti poslovanja</a>
            <a href="#" className="hover:text-white transition-colors">Politika privatnosti</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
