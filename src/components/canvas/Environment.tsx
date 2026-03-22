import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, Environment as DreiEnvironment } from '@react-three/drei'
import * as THREE from 'three'

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    // Scroll-based camera movement effect
    const scrollY = window.scrollY
    const scrollMax = document.documentElement.scrollHeight - window.innerHeight
    const scrollNormalized = scrollMax > 0 ? scrollY / scrollMax : 0
    
    // Smooth camera interpolation based on scroll
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, -scrollNormalized * 10, 0.05)
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 5 + scrollNormalized * 5, 0.05)

    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05 + scrollNormalized * 2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08
    }
  })

  return (
    <>
      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#050505', 5, 30]} />
      <DreiEnvironment preset="city" />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#d4af37" />
      <directionalLight position={[-10, -10, -5]} intensity={2} color="#1c1f2e" />

      {/* Ethereal background stars/dust */}
      <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

      {/* Central abstracted wireframe geometry */}
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={meshRef} position={[0, -2, -5]} scale={1.5}>
          <icosahedronGeometry args={[2, 1]} />
          <meshStandardMaterial 
            color="#050505"
            wireframe
            emissive="#d4af37"
            emissiveIntensity={0.15}
            transparent
            opacity={0.5}
          />
        </mesh>
      </Float>
      
      {/* Accent floating orbs representing data/AI/premium touch */}
      <Float speed={2} rotationIntensity={2} floatIntensity={3}>
        <mesh position={[4, 2, -8]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#1a1cf2" emissive="#1a1cf2" emissiveIntensity={2} toneMapped={false} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-4, -8, -12]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={1} toneMapped={false} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[6, -15, -10]}>
          <torusGeometry args={[1.5, 0.4, 16, 100]} />
          <meshStandardMaterial color="#1c1f2e" emissive="#1c1f2e" emissiveIntensity={0.5} wireframe toneMapped={false} />
        </mesh>
      </Float>
    </>
  )
}

export function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#050505]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]} // Clamp pixel ratio for performance
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
