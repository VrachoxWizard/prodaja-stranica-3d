import { useState, useEffect } from "react"
import { Button } from "@/components/ui/Button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tight flex items-center gap-2.5 relative z-50 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-light to-primary flex items-center justify-center text-black font-black text-sm shadow-sm border border-primary/20 group-hover:scale-105 transition-transform duration-300">
            S
          </div>
          <span className="text-text-main group-hover:text-white transition-colors">Studio<span className="text-primary">.</span></span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          <a href="#problemi" className="hover:text-white transition-colors">Pristup</a>
          <a href="#usluge" className="hover:text-white transition-colors">Usluge</a>
          <a href="#proces" className="hover:text-white transition-colors">Proces</a>
          <a href="#faq" className="hover:text-white transition-colors">Česta pitanja</a>
        </nav>
        
        <div className="flex items-center gap-4 relative z-50">
          <Button href="#contact" variant="primary" size="sm" className="hidden border-none sm:inline-flex text-xs px-5 h-9 font-semibold">
            Zatraži procjenu
          </Button>
          
          <button 
            className="md:hidden text-white p-3 -mr-3 transition-transform active:scale-95 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-background/98 backdrop-blur-2xl flex flex-col p-6 animate-in slide-in-from-top-4 duration-400 ease-out md:hidden overflow-y-auto border-t border-border-subtle">
          <nav className="flex flex-col gap-6 text-center mt-12">
            <a href="#problemi" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-text-muted hover:text-white transition-colors py-2">Pristup</a>
            <a href="#usluge" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-text-muted hover:text-white transition-colors py-2">Usluge</a>
            <a href="#proces" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-text-muted hover:text-white transition-colors py-2">Proces</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-text-muted hover:text-white transition-colors py-2">Česta pitanja</a>
          </nav>
          
          <div className="mt-auto mb-12 flex justify-center">
             <Button href="#contact" onClick={() => setIsMobileMenuOpen(false)} variant="primary" size="lg" className="w-full max-w-sm font-bold border-none">
                Zatražite usmenu ponudu
             </Button>
          </div>
        </div>
      )}
    </header>
  )
}
