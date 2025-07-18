"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Suspense } from "react"

function JewelryModel() {
  return (
    <mesh rotation={[0, 0, 0]} position={[0, 0, 0]}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshStandardMaterial color="#ec4899" metalness={0.8} roughness={0.2} />
    </mesh>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-900 via-rose-800 to-pink-900 overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />

      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <JewelryModel />
            <Environment preset="studio" />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-responsive py-12 sm:py-16 lg:py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-300 to-rose-300 bg-clip-text text-transparent">
          Aahaanya Creatives
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-pink-100 max-w-4xl mx-auto px-4">
          Discover exquisite handcrafted jewelry and metal art that tells your unique story
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/products">Shop Collection</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
