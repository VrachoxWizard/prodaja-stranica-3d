import { siteContent } from "@/data/siteContent"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

export function ContactSection() {
  const { title, subtitle, buttonText, microcopy } = siteContent.contact;

  return (
    <section id="kontakt" className="py-32 relative overflow-hidden bg-transparent">
      {/* Ambient 3D glow bleed */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-text-muted">
            {subtitle}
          </p>
        </div>

        <Card className="p-8 border-white/10 bg-surface/20 backdrop-blur-2xl shadow-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Ime i prezime</label>
                <input type="text" className="w-full bg-surface/40 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" placeholder="Vaše ime" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Email ili telefon</label>
                <input type="text" className="w-full bg-surface/40 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" placeholder="Vaš kontakt" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Zanimljiv mi je paket (opcionalno)</label>
              <div className="relative">
                <select className="w-full bg-surface/40 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors appearance-none">
                  <option className="bg-background">Trebam savjet / Nisam siguran</option>
                  <option className="bg-background">Starter (Od 490 €)</option>
                  <option className="bg-background">Business (Od 890 €)</option>
                  <option className="bg-background">Business + AI (Od 1.290 €)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-muted">
                  <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><path d="M6 9l6 6 6-6"></path></svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Opišite ukratko što vam treba</label>
              <textarea rows={4} className="w-full bg-surface/40 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none" placeholder="Npr. Trebam modernu stranicu za svoj novi apartman..."></textarea>
            </div>

            <div className="pt-2">
              <Button variant="primary" size="lg" className="w-full font-bold text-base shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                {buttonText}
              </Button>
              <p className="text-center text-xs text-text-muted mt-4">
                {microcopy}
              </p>
            </div>
          </form>
        </Card>
      </div>
    </section>
  )
}
