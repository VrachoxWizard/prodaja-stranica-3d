import { siteContent } from "@/data/siteContent"
import { Button } from "@/components/ui/Button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const { headline, subheadline, primaryCta, secondaryCta, trustBullets } = siteContent.hero;

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-24 overflow-hidden bg-transparent">
      {/* Subtle, refined background glow instead of intense neon spot */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] opacity-15 pointer-events-none mix-blend-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.25)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center flex-1 flex flex-col justify-center max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center rounded-full border border-border-subtle bg-surface/50 backdrop-blur-md px-5 py-2 mb-10 mx-auto shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-primary mr-3 animate-pulse" />
          <span className="text-xs font-semibold text-text-muted uppercase tracking-widest">Samo Za Male Poduzetnike</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-8 max-w-4xl mx-auto leading-[1.1] text-gradient"
        >
          {headline}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          {subheadline}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button href="#contact" size="lg" className="w-full sm:w-auto text-base font-semibold group px-8 border-none">
            {primaryCta}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button href="#usluge" variant="outline" size="lg" className="w-full sm:w-auto font-medium text-base backdrop-blur-md px-8 text-text-main border-border-subtle hover:border-white/20">
            {secondaryCta}
          </Button>
        </motion.div>

        {/* Immediate Trust / Credibility Band */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
           className="glass-panel py-6 px-4 md:px-12 mx-auto w-full max-w-4xl"
        >
           <ul className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 text-sm font-medium text-text-muted">
             {trustBullets.map((bullet, index) => (
               <li key={index} className="flex items-center gap-3">
                 <CheckCircle2 className="w-5 h-5 text-primary" />
                 <span className="text-left leading-tight">{bullet}</span>
               </li>
             ))}
           </ul>
        </motion.div>
      </div>
    </section>
  )
}
