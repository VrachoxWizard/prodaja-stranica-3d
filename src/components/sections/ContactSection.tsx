import { useState } from "react"
import { siteContent } from "@/data/siteContent"
import { Button } from "@/components/ui/Button"
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
    <section id="contact" className="py-24 lg:py-32 relative bg-surface border-t border-border-subtle">
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto glass-panel p-8 md:p-12 relative overflow-hidden border-border-subtle shadow-xl">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center py-12 px-4 animate-in fade-in zoom-in duration-500">
              <CheckCircle2 className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Upit uspješno poslan!</h3>
              <p className="text-text-muted mb-8 font-medium">
                Hvala vam na interesu. Javit ćemo vam se s prijedlogom na ostavljeni kontakt unutar 24 sata.
              </p>
              <Button onClick={() => setStatus("idle")} variant="outline" className="w-full sm:w-auto font-medium">
                Pošaljite još informacija
              </Button>
            </div>
          ) : (
            <form className="space-y-8 animate-in fade-in" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-semibold text-text-muted uppercase tracking-wider">Ime i prezime tvrtke <span className="text-primary">*</span></label>
                  <input required id="name" name="name" type="text" className="w-full bg-background border border-border-subtle rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20 shadow-sm" placeholder="Npr. Ivan Horvat (Studio j.d.o.o.)" />
                </div>
                <div className="space-y-3">
                  <label htmlFor="contact" className="text-sm font-semibold text-text-muted uppercase tracking-wider">Email ili telefon <span className="text-primary">*</span></label>
                  <input required id="contact" name="contact" type="text" className="w-full bg-background border border-border-subtle rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20 shadow-sm" placeholder="Npr. 091 123 4567" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="intent" className="text-sm font-semibold text-text-muted uppercase tracking-wider">Kako vam možemo pomoći?</label>
                <div className="relative">
                  <select id="intent" name="intent" className="w-full bg-background border border-border-subtle rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer shadow-sm font-medium">
                    <option className="bg-background" value="nova">Trebam potpuno novu web stranicu</option>
                    <option className="bg-background" value="redizajn">Treba mi redizajn postojeće stare stranice</option>
                    <option className="bg-background" value="odrzavanje">Zanima me mjesečno održavanje</option>
                    <option className="bg-background" value="savjet">Samo se želim informirati i dogovoriti procjenu</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-text-muted">
                    <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><path d="M6 9l6 6 6-6"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-semibold text-text-muted uppercase tracking-wider">Dodatne napomene (opcionalno)</label>
                <textarea id="message" name="message" rows={4} className="w-full bg-background border border-border-subtle rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-white/20 shadow-sm font-medium" placeholder="Opišite ukratko vaše ciljeve ili zalijepite link na vašu trenutnu stranicu..."></textarea>
              </div>

              {status === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500/80 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-200">Došlo je do pogreške. Molimo pokušajte ponovno ili nas kontaktirajte izravno putem WhatsAppa.</p>
                </div>
              )}

              <div className="pt-4">
                <Button 
                  disabled={status === "loading"} 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full font-bold text-base shadow-sm border-none"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Slanje...
                    </>
                  ) : buttonText}
                </Button>
                <p className="text-center text-sm font-medium text-text-muted mt-5">
                  {microcopy}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 pt-8 border-t border-border-subtle">
                  <p className="text-sm font-medium text-text-muted">Ili zatražite ponudu putem poruke:</p>
                  <div className="flex items-center gap-4">
                    <a href="mailto:upiti@studio-web.hr" className="text-sm font-bold text-text-main hover:text-primary transition-colors underline decoration-border-subtle underline-offset-4">
                      Email upit
                    </a>
                    <span className="text-border-subtle">•</span>
                    <a href="https://wa.me/385900000000" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-text-main hover:text-primary transition-colors underline decoration-border-subtle underline-offset-4">
                      WhatsApp poruka
                    </a>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
