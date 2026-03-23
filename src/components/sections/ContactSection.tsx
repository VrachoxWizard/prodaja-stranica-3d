import { useState } from "react"
import { siteContent } from "@/data/siteContent"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"

export function ContactSection() {
  const { title, subtitle, buttonText, microcopy } = siteContent.contact;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    // TODO: Zamijeniti s pravim Web3Forms access key-em
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
      } else {
        console.error("Form submission error", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Network error on form submission", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-transparent">
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

        <Card className="p-8 border-white/10 bg-surface/20 backdrop-blur-2xl shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col justify-center">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center py-8 px-4 animate-in fade-in zoom-in duration-500">
              <CheckCircle2 className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Upit uspješno poslan!</h3>
              <p className="text-text-muted mb-8">
                Hvala vam na interesu. Javit ćemo vam se s prijedlogom na ostavljeni kontakt unutar 24 sata.
              </p>
              <Button onClick={() => setStatus("idle")} variant="outline" className="w-full sm:w-auto">
                Pošaljite novi upit
              </Button>
            </div>
          ) : (
            <form className="space-y-6 animate-in fade-in" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Ime i prezime <span className="text-primary">*</span></label>
                  <input required name="name" type="text" className="w-full bg-surface/40 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors placeholder:text-white/30" placeholder="Npr. Ivan Horvat" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Email ili telefon <span className="text-primary">*</span></label>
                  <input required name="contact" type="text" className="w-full bg-surface/40 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors placeholder:text-white/30" placeholder="Npr. ivan@tvrtka.hr" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Što vam točno treba?</label>
                <div className="relative">
                  <select name="intent" className="w-full bg-surface/40 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors appearance-none cursor-pointer">
                    <option className="bg-background" value="nova">Nova web stranica</option>
                    <option className="bg-background" value="redizajn">Redizajn postojeće stranice</option>
                    <option className="bg-background" value="odrzavanje">Održavanje / dorade</option>
                    <option className="bg-background" value="seo">SEO optimizacija</option>
                    <option className="bg-background" value="savjet">Nisam siguran, trebam savjet</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-muted">
                    <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><path d="M6 9l6 6 6-6"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Dodatne informacije (opcionalno)</label>
                <textarea name="message" rows={4} className="w-full bg-surface/40 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none placeholder:text-white/30" placeholder="Opišite ukratko vaše ciljeve ili podijelite link na trenutnu stranicu..."></textarea>
              </div>

              {status === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-200">Došlo je do pogreške. Molimo pokušajte ponovno ili nas kontaktirajte izravno.</p>
                </div>
              )}

              <div className="pt-2">
                <Button 
                  disabled={status === "loading"} 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full font-bold text-base shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Slanje u tijeku...
                    </>
                  ) : buttonText}
                </Button>
                <p className="text-center text-xs text-text-muted mt-4">
                  {microcopy}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 pt-6 border-t border-white/5">
                  <p className="text-sm text-text-muted">Ili nam se javite direktno:</p>
                  <div className="flex items-center gap-4">
                    <a href="mailto:info@vasatvrtka.hr" className="text-sm font-medium text-white hover:text-primary transition-colors">
                      info@vasatvrtka.hr
                    </a>
                    <span className="text-white/20">•</span>
                    <a href="https://wa.me/385912345678" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-primary transition-colors">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Card>
      </div>
    </section>
  )
}
