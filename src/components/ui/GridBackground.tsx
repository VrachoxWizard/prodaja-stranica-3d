import { motion } from "framer-motion"

export function GridBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#050810] overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Vignette / Radial Fade for depth */}
      <div className="absolute inset-0 bg-[#050810]/60 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_80%)]" />
      
      {/* Gentle Floating Auroras/Orbs for Premium Polish */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.25, 0.1],
          x: [0, 40, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[15%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[130px]"
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
          x: [0, -30, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[30%] -right-[15%] w-[45%] h-[60%] rounded-full bg-[#1a1cf2]/30 blur-[150px]"
      />
    </div>
  )
}
