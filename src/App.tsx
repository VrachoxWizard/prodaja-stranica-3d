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
import { BackgroundCanvas } from "./components/canvas/Environment"
import { FadeIn } from "./components/ui/FadeIn"

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Expose scroll progress for potential 3D camera tying later
  useScroll({ target: containerRef })

  return (
    <>
      <BackgroundCanvas />
      
      <div 
        ref={containerRef}
        className="min-h-screen text-text-main flex flex-col selection:bg-primary/30 selection:text-white font-sans relative z-10 bg-transparent"
      >
        <Header />
        <main className="flex-1 w-full overflow-hidden">
          <FadeIn><HeroSection /></FadeIn>
          <FadeIn><ProblemSection /></FadeIn>
          <FadeIn><SolutionSection /></FadeIn>
          <FadeIn><AudienceSection /></FadeIn>
          <FadeIn><PricingSection /></FadeIn>
          <FadeIn><ProcessSection /></FadeIn>
          <FadeIn><PortfolioSection /></FadeIn>
          <FadeIn><FaqSection /></FadeIn>
          <FadeIn><ContactSection /></FadeIn>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App;
