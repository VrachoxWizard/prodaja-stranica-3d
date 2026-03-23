import { siteContent } from "@/data/siteContent"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export function SolutionSection() {
  return (
    <section className="section-padding relative bg-surface overflow-hidden">
      {/* Editorial background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/[0.02] border-l border-white/[0.03] hidden lg:block" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="lg:w-1/2">
            <div className="inline-block text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-6">Naš Pristup</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-10 leading-[1.1] font-serif">
              Postoji jasniji put do <span className="italic">prave</span> publike.
            </h2>
            <div className="space-y-10">
              {siteContent.solutions.map((solution, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-6 h-6 rounded-full border border-primary/30 flex-shrink-0 flex items-center justify-center mt-1 group-hover:bg-primary/10 transition-colors">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-xl text-text-muted leading-relaxed font-light group-hover:text-text-main transition-colors duration-500">
                    {solution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="glass-panel p-2 overflow-hidden border-white/5 shadow-raised">
               <div className="bg-background rounded-xl p-8 lg:p-12 border border-white/5">
                  <div className="flex items-center gap-4 mb-10">
                     <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <div className="w-5 h-5 text-primary">✨</div>
                     </div>
                     <div>
                        <div className="text-white font-bold text-lg leading-none mb-1 font-serif">Studio Outcome v4</div>
                        <div className="text-text-dim text-xs uppercase tracking-widest font-bold">Standard Kvalitete</div>
                     </div>
                  </div>
                  <div className="space-y-4">
                     {[1, 2, 3].map((item) => (
                       <div key={item} className="h-1.5 w-full bg-white/5 rounded-full relative overflow-hidden">
                          <motion.div 
                            initial={{ x: "-100%" }}
                            whileInView={{ x: "0%" }}
                            transition={{ duration: 1.5, delay: item * 0.2 }}
                            className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-primary/20 to-primary/60" 
                          />
                       </div>
                     ))}
                  </div>
                  <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-end">
                     <div>
                        <div className="text-text-muted text-xs mb-1">Status Projekta</div>
                        <div className="text-primary font-bold">Aktivna Konverzija</div>
                     </div>
                     <div className="text-right">
                        <div className="text-4xl font-black text-white font-serif">100%</div>
                        <div className="text-text-dim text-[10px] uppercase font-bold">Transparentnost</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
