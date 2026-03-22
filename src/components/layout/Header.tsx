import { Button } from "@/components/ui/Button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="font-bold text-2xl tracking-tight text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-black font-black text-lg">S</div>
          <span>Studio<span className="text-primary">.</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          <a href="#problemi" className="hover:text-white transition-colors">Pristup</a>
          <a href="#paketi" className="hover:text-white transition-colors">Paketi</a>
          <a href="#proces" className="hover:text-white transition-colors">Proces</a>
          <a href="#faq" className="hover:text-white transition-colors">Česta pitanja</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="primary" size="md" className="hidden sm:inline-flex">Zatraži ponudu</Button>
        </div>
      </div>
    </header>
  )
}
