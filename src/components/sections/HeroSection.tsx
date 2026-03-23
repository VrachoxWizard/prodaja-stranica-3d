import { siteContent } from "@/data/siteContent"
import { Button } from "@/components/ui/Button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const { headline, subheadline, primaryCta, secondaryCta, trustBullets, responseMarker } = siteContent.hero;

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-12 items-center">
          
          {/* Left Content Side */}
          <div className="text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-8 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{responseMarker}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.05] font-serif"
            >
              {headline}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-text-muted mb-10 max-w-xl leading-relaxed font-light"
            >
              {subheadline}
            </motion.p>
    
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-16"
            >
              <Button href="#contact" size="lg" className="w-full sm:w-auto text-base font-bold group px-10 border-none rounded-full">
                {primaryCta}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="#proces" variant="ghost" size="lg" className="w-full sm:w-auto font-semibold text-base px-8 text-text-main hover:bg-white/5 rounded-full">
                {secondaryCta}
              </Button>
            </motion.div>

            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.6 }}
               className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/5 pt-8"
            >
               {trustBullets.map((bullet, index) => (
                 <div key={index} className="flex gap-3 items-start">
                   <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                   <span className="text-[13px] font-medium text-text-dim leading-tight">{bullet}</span>
                 </div>
               ))}
            </motion.div>
          </div>

          {/* Right Visual Proof Side (Placeholder Portals) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* The "Main" product preview mockup */}
            <div className="glass-panel overflow-hidden border-white/10 shadow-2xl relative aspect-[4/3] group cursor-default">
               {/* Simplified UI representation */}
               <div className="w-full h-full bg-surface-raised flex flex-col">
                  <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                  </div>
                  <div className="flex-1 p-8 flex flex-col gap-6">
                    <div className="h-6 w-1/3 bg-white/10 rounded-md" />
                    <div className="h-12 w-full bg-white/5 rounded-lg border border-white/5" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="aspect-video bg-primary/20 rounded-lg animate-pulse" />
                      <div className="aspect-video bg-white/5 rounded-lg" />
                    </div>
                    <div className="h-4 w-2/3 bg-white/5 rounded-md" />
                    <div className="mt-auto h-10 w-1/4 bg-primary rounded-full ml-auto" />
                  </div>
               </div>
               
               {/* Labeling/Audit Badge */}
               <div className="absolute top-6 right-6 flex flex-col items-end">
                  <div className="bg-background/80 backdrop-blur-xl border border-primary font-bold text-[10px] text-primary px-3 py-1 rounded-full shadow-lg">
                    PREMIUM DIZAJN
                  </div>
               </div>

               {/* Metric Pop-over */}
               <div className="absolute -bottom-6 -left-10 glass-card p-5 border-white/10 shadow-2xl animate-bounce-subtle">
                  <div className="text-primary font-black text-2xl mb-1">+140%</div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-text-muted">Više upita</div>
               </div>
            </div>
            
            {/* Decorative organic shape behind */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
