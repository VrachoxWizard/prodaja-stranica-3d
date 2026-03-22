import { siteContent } from "@/data/siteContent"
import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const { headline, subheadline, primaryCta, secondaryCta } = siteContent.hero;

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-32 overflow-hidden bg-transparent">
      {/* Background elegant glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-primary/30 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center flex-1 flex flex-col justify-center mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 mb-8 mx-auto shadow-lg"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">Premium Web Dizajn & AI Rješenja</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 max-w-5xl mx-auto leading-[1.05] drop-shadow-2xl"
        >
          {headline}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-3xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          {subheadline}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <Button size="lg" className="w-full sm:w-auto text-base group px-8">
            {primaryCta}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto text-base backdrop-blur-md bg-white/5 border-white/10 hover:bg-white/10 px-8">
            {secondaryCta}
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-text-muted/50">Istražite</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-text-muted/50 to-transparent" />
      </motion.div>
    </section>
  )
}
