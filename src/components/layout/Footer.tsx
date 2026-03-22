export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="font-bold text-2xl tracking-tight text-white flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-black font-black text-lg">S</div>
          <span>Studio<span className="text-primary">.</span></span>
        </div>
        <p className="text-text-muted mb-8 max-w-sm mx-auto">
          Premium web dizajn & AI rješenja za moderne profesionalce.
        </p>
        <div className="text-sm text-text-muted/50">
          © {new Date().getFullYear()} Studio. Sva prava pridržana.
        </div>
      </div>
    </footer>
  )
}
