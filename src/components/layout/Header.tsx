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
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="font-bold text-2xl tracking-tight text-white flex items-center gap-2 relative z-50">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-black font-black text-lg">S</div>
          <span>Studio<span className="text-primary">.</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          <a href="#problemi" className="hover:text-white transition-colors">Pristup</a>
          <a href="#usluge" className="hover:text-white transition-colors">Usluge</a>
          <a href="#proces" className="hover:text-white transition-colors">Proces</a>
          <a href="#faq" className="hover:text-white transition-colors">Česta pitanja</a>
        </nav>
        
        <div className="flex items-center gap-4 relative z-50">
          <Button href="#contact" variant="primary" size="sm" className="hidden sm:inline-flex text-xs px-4 h-9">
            Zatraži ponudu
          </Button>
          
          <button 
            className="md:hidden text-white p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-background/95 backdrop-blur-xl border-t border-white/5 flex flex-col p-6 animate-in slide-in-from-top-4 duration-300 md:hidden overflow-y-auto">
          <nav className="flex flex-col gap-6 text-center mt-8">
            <a href="#problemi" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white py-2">Pristup</a>
            <a href="#usluge" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white py-2">Usluge</a>
            <a href="#proces" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white py-2">Proces</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white py-2">Česta pitanja</a>
          </nav>
          
          <div className="mt-12 flex justify-center">
             <Button href="#contact" onClick={() => setIsMobileMenuOpen(false)} variant="primary" size="lg" className="w-full max-w-sm font-bold shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                Zatražite besplatnu ponudu
             </Button>
          </div>
        </div>
      )}
    </header>
  )
}
