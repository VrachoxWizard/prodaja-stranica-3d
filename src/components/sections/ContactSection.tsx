import { useState } from "react"
import { siteContent } from "@/data/siteContent"
import { Button } from "@/components/ui/Button"
import { CheckCircle2 } from "lucide-react"


export function ContactSection() {
  const { microcopy } = siteContent.contact;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
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
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[1fr_550px] gap-20 items-start">
          
          {/* Persuasion Block */}
          <div>
            <div className="inline-block text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-6">Sljedeći Korak</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 font-serif leading-[1.1]">
              Osigurajte <span className="italic">besplatnu</span> vizualnu strategiju.
            </h2>
            <p className="text-xl text-text-muted mb-12 max-w-xl leading-relaxed font-light">
              Bez pritiska prodaje. Dobit ćete konkretne preporuke za vaše poslovanje i jasnu strukturu ulaganja — spremno za klijente u 10 dana.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 border-t border-white/5 pt-10">
               <div>
                  <div className="text-primary font-bold text-lg mb-2 font-serif">Brz Odgovor</div>
                  <p className="text-sm text-text-dim leading-relaxed">Na upite odgovaramo unutar 4h tijekom radnog tjedna. Cijenimo vaše vrijeme.</p>
               </div>
               <div>
                  <div className="text-primary font-bold text-lg mb-2 font-serif">Nula Rizika</div>
                  <p className="text-sm text-text-dim leading-relaxed">Strategija vas ne obvezuje na kupnju. Služi isključivo vašem informiranju.</p>
               </div>
            </div>
          </div>

          {/* Form Block */}
          <div className="glass-panel p-2 shadow-raised">
            <div className="bg-surface rounded-xl p-8 md:p-12 relative overflow-hidden border border-white/5">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                  <CheckCircle2 className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-2 font-serif">Upit zaprimljen!</h3>
                  <p className="text-text-muted mb-8 font-medium">
                    Provjerit ćemo vaše podatke i javiti se uskoro.
                  </p>
                  <Button onClick={() => setStatus("idle")} variant="outline" className="rounded-full px-10">
                    Pošaljite još informacija
                  </Button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-bold text-text-dim uppercase tracking-widest">Ime i tvrtka</label>
                    <input required id="name" name="name" type="text" className="w-full bg-background/50 border border-white/5 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-white/10" placeholder="Vaše ime" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="contact" className="text-[10px] font-bold text-text-dim uppercase tracking-widest">Email ili Telefon</label>
                    <input required id="contact" name="contact" type="text" className="w-full bg-background/50 border border-white/5 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-white/10" placeholder="Kako da vas kontaktiramo?" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="intent" className="text-[10px] font-bold text-text-dim uppercase tracking-widest">Vrsta projekta</label>
                    <select id="intent" name="intent" className="w-full bg-background/50 border border-white/5 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer">
                      <option value="nova">Novi projekt iz nule</option>
                      <option value="redizajn">Redizajn postojećeg weba</option>
                      <option value="odrzavanje">Održavanje & Podrška</option>
                    </select>
                  </div>

                  <div className="pt-6">
                    <Button 
                      disabled={status === "loading"} 
                      type="submit" 
                      size="lg" 
                      className="w-full font-bold text-sm shadow-xl border-none rounded-full py-7"
                    >
                      {status === "loading" ? "Slanje upita..." : "Zatraži besplatnu strategiju"}
                    </Button>
                    <p className="text-center text-[10px] font-medium text-text-dim mt-6 uppercase tracking-widest">
                      {microcopy}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
