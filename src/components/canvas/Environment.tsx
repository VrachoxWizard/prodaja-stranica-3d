import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Grid, Float, Environment as DreiEnvironment, Edges } from '@react-three/drei'
import * as THREE from 'three'

function Scene({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const scrollY = window.scrollY
    const scrollMax = document.documentElement.scrollHeight - window.innerHeight
    const scrollNormalized = scrollMax > 0 ? scrollY / scrollMax : 0
    
    // Camera pulls forward down into the grid as you scroll
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 8 - scrollNormalized * 3, 0.05)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 2 - scrollNormalized * 1.5, 0.05)

    if (groupRef.current) {
      // Very gentle structural rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05 + scrollNormalized * 1.5
      groupRef.current.rotation.x = scrollNormalized * 0.5
    }
  })

  // Solid massive blocks need more ambient light so their dark faces don't blend completely into the background
  return (
    <>
      <color attach="background" args={['#06070a']} />
      <fog attach="fog" args={['#06070a', 8, 30]} />
      <DreiEnvironment preset="city" />
      
      {/* High-contrast rim lighting for the solid objects */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#d4af37" />
      <directionalLight position={[-10, 10, -5]} intensity={2.5} color="#1a1cf2" />

      {/* Infinite Digital Floor Grid - Matrix Style */}
      <Grid 
        position={[0, -2, 0]} 
        args={[50, 50]} 
        cellSize={1} 
        cellThickness={isMobile ? 0.6 : 0.8} 
        cellColor="#1a1cf2" 
        sectionSize={5} 
        sectionThickness={1.2} 
        sectionColor="#d4af37" 
        fadeDistance={25} 
        fadeStrength={1} 
      />

      {/* Floating UI Elements (Solid Blueprint/Matrix) */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
        {/* Pushed further back (-6) and lower (-1.5) to avoid intersecting entirely with the Hero text/CTA */}
        <group ref={groupRef} position={[0, -1.5, -6]}>
          
          {/* Main Content Layout Block */}
          {/* Solid materials so they occlude the grid behind them */}
          <mesh position={[0, 1, 0]}>
            <boxGeometry args={[4.5, 3, 0.2]} />
            <meshStandardMaterial color="#0A0D15" roughness={0.5} metalness={0.6} />
            <Edges linewidth={2} scale={1} threshold={15} color="#d4af37" />
          </mesh>

          {/* Sidebar / Nav Block */}
          <mesh position={[-3, 0.5, 1.5]}>
            <boxGeometry args={[1.5, 3.5, 0.2]} />
            <meshStandardMaterial color="#0D111A" roughness={0.4} metalness={0.7} />
            <Edges linewidth={2.5} scale={1} threshold={15} color="#1a1cf2" />
          </mesh>

          {/* Accent Header Block */}
          <mesh position={[2, 2.8, -0.5]}>
            <boxGeometry args={[3, 0.8, 0.2]} />
            <meshStandardMaterial color="#0A0D15" roughness={0.5} metalness={0.6} />
            <Edges linewidth={2} scale={1} threshold={15} color="#d4af37" />
          </mesh>

          {/* Core Server / Node Block - Lower Right */}
          <mesh position={[3, -0.5, 2]}>
            <boxGeometry args={[1.8, 1.8, 1.8]} />
            <meshStandardMaterial color="#0A0D15" roughness={0.3} metalness={0.8} />
            <Edges linewidth={3} scale={1} threshold={15} color="#1a1cf2" />
          </mesh>

        </group>
      </Float>
    </>
  )
}

export function BackgroundCanvas() {
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#06070a]" />;
  }

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#06070a]">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 45 }}
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        gl={{ antialias: false, powerPreference: "default", alpha: false }}
      >
        <Scene isMobile={isMobile} />
      </Canvas>
    </div>
  )
}
