import { useRef } from "react"
import { useScroll } from "framer-motion"
import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { HeroSection } from "./components/sections/HeroSection"
import { ProblemSection } from "./components/sections/ProblemSection"
import { SolutionSection } from "./components/sections/SolutionSection"
import { AudienceSection } from "./components/sections/AudienceSection"
import { PricingSection } from "./components/sections/PricingSection"
import { ProcessSection } from "./components/sections/ProcessSection"
import { PortfolioSection } from "./components/sections/PortfolioSection"
import { FaqSection } from "./components/sections/FaqSection"
import { ContactSection } from "./components/sections/ContactSection"
import { FadeIn } from "./components/ui/FadeIn"
import { siteContent } from "./data/siteContent"
import { GridBackground } from "./components/ui/GridBackground"

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Expose scroll progress for potential 3D camera tying later
  useScroll({ target: containerRef })

  return (
    <>
      <GridBackground />
      
      <div 
        ref={containerRef}
        className="min-h-screen text-text-main flex flex-col selection:bg-primary/30 selection:text-white font-sans relative z-10 bg-transparent"
      >
        <Header />
        <main className="flex-1 w-full overflow-hidden">
          <FadeIn><HeroSection /></FadeIn>
          <FadeIn><ProblemSection /></FadeIn>
          <FadeIn><SolutionSection /></FadeIn>
          <FadeIn><PricingSection /></FadeIn>
          <FadeIn><PortfolioSection /></FadeIn>
          <FadeIn><ProcessSection /></FadeIn>
          <FadeIn><AudienceSection /></FadeIn>
          <FadeIn><FaqSection /></FadeIn>
          <FadeIn><ContactSection /></FadeIn>
        </main>
        <Footer />
        
        {/* Sticky Mobile CTA Background Bar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 pb-6 border-t border-white/5 bg-background/80 backdrop-blur-xl z-50 animate-in slide-in-from-bottom-10 fade-in duration-500 delay-[2000ms]">
          <a 
            href="#contact" 
            className="flex items-center justify-center gap-2 bg-primary text-black font-extrabold px-6 py-4 rounded-xl shadow-[0_10px_40px_rgba(212,175,55,0.4)] border border-primary/50 text-base whitespace-nowrap active:scale-95 transition-transform"
          >
            {siteContent.hero.primaryCta}
          </a>
        </div>
      </div>
    </>
  )
}

export default App;
