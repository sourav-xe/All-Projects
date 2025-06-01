import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei'
import { motion } from 'framer-motion'
import React from 'react'

function ShoeModel() {
  const { scene } = useGLTF('/models/air_jordan_1/scene.gltf')
  return (
    <primitive
      object={scene}
      scale={0.12}
      position={[0, -0.3, 0]}
      rotation={[0.1, Math.PI / 2.5, 0]}
    />
  )
}

useGLTF.preload('/models/nike_shoes/scene.gltf')

export default function Hero2() {
  return (
    <section className="w-full min-h-[130vh] bg-gradient-to-br from-black to-gray-900 text-white font-sans overflow-hidden relative flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-6">

     {/* Hanging Heading */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <div className="w-1 h-12 bg-gray-300"></div> {/* Simulated Rope */}
        <motion.h2
          className="text-white text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent shadow-md"
          initial={{ rotate: -5 }}
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          Trends
        </motion.h2>
      </div>
      
      
      {/* Canvas - 70% Width */}
      <div className="w-full md:w-[70%] h-[70vh] md:h-[100vh] relative z-0">
        <Canvas
          camera={{ position: [1, 0.5, 5], fov: 40 }}
          gl={{ toneMappingExposure: 1.75 }}
        >
          <ambientLight intensity={0.9} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1.2}
            castShadow
          />
          <ShoeModel />
          <Environment preset="studio" />
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.5}
            scale={10}
            blur={2}
            far={4.5}
          />
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>

      {/* Text - 30% Width */}
      <div className="w-full md:w-[40%] relative z-10 text-left md:pl-12 mt-10 md:mt-0">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4"
          style={{
            textShadow: '0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(0,255,255,0.2)',
            lineHeight: '1.2'
          }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Air Jordan 1<br />
          <span className="text-xl font-medium text-gray-300">Elevate Your Stride</span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed"
          style={{
            textShadow: '0 0 8px rgba(255,255,255,0.2)',
            opacity: 0.9,
          }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          Engineered with next-gen materials, NeoKicks adapts to your lifestyle — futuristic, fearless, and fast.
          Get Your favorite pairs and Slay in your style.
        </motion.p>

        <motion.button
          className="relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg overflow-hidden hover:scale-105 transition-transform"
          style={{
            boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
          }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <span className="relative z-10">Explore Collection</span>
          <span className="absolute inset-0 bg-white opacity-10 animate-pulse" />
        </motion.button>
      </div>
    </section>
  )
}
