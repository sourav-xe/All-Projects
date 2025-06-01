import React, { useEffect, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function ShoeModel() {
  const { scene } = useGLTF('/models/Offer/scene.gltf')
  return (
    <motion.group
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <primitive
        object={scene}
        scale={1.85}
        rotation={[0, Math.PI / 2, 0]}
        position={[0.2, -0.8, 0]}
      />
    </motion.group>
  )
}

useGLTF.preload('/models/Offer/scene.gltf')

function CountdownTimer({ targetTime }) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetTime))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetTime))
    }, 1000)
    return () => clearInterval(interval)
  }, [targetTime])

  function getTimeRemaining(endTime) {
    const total = Date.parse(endTime) - Date.parse(new Date())
    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
    const days = Math.floor(total / (1000 * 60 * 60 * 24))
    return { total, days, hours, minutes, seconds }
  }

  if (timeLeft.total <= 0) {
    return <p className="text-red-500 text-xl mt-4 font-bold">Offer expired!</p>
  }

  return (
    <div className="flex gap-5 text-2xl font-['Chakra_Petch'] justify-center">
      <div><span className="font-extrabold text-white">{timeLeft.days}</span>d</div>
      <div><span className="font-extrabold text-white">{timeLeft.hours}</span>h</div>
      <div><span className="font-extrabold text-white">{timeLeft.minutes}</span>m</div>
      <div><span className="font-extrabold text-white">{timeLeft.seconds}</span>s</div>
    </div>
  )
}

export default function Offer() {
  const offerEndTime = new Date()
  offerEndTime.setHours(offerEndTime.getHours() + 12)

  const navigate = useNavigate()

  const stockLeft = 9
  const shoeName = "Ait Max Akatsuki"
  const shoePrice = "$249"

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-[#1a0003] to-[#330000] text-white px-4 py-16 flex flex-col items-center font-['Chakra_Petch']">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-black text-center bg-gradient-to-r from-[#ff0000] to-[#68222a] bg-clip-text text-transparent tracking-wide mb-4"
      >
        Today’s Offer
      </motion.h1>
      <p className="text-lg text-white/80 mt-2 mb-12 max-w-xl text-center italic">
        Don't miss this once-in-a-lifetime drop of the Ait Max Akatsuki edition.
      </p>

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl">
        {/* 3D Shoe Model */}
        <div className="w-full h-[60vh] md:w-3/5 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,0,0,0.2)] transition-all duration-500">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[2, 5, 2]} intensity={2} />
            <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={1.5} />
            <Environment preset="studio" />
            <Suspense fallback={null}>
              <ShoeModel />
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        {/* Right Side */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="backdrop-blur-3xl bg-white/10 border border-white/20 rounded-3xl px-10 py-8 w-full max-w-sm text-center md:text-left shadow-[inset_0_0_30px_rgba(255,255,255,0.05),_0_10px_30px_rgba(255,0,0,0.1)]"
          >
            <h2 className="text-3xl font-black mb-2 tracking-wide text-white drop-shadow-lg">{shoeName}</h2>
            <p className="text-red-500 text-2xl font-bold mb-4">{shoePrice}</p>
            <CountdownTimer targetTime={offerEndTime} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-red-400 tracking-wider font-semibold shadow-md"
          >
            Hurry — only {stockLeft} pairs left!
          </motion.p>

          <motion.button
            onClick={() => navigate('/shop')}
            whileHover={{ scale: 1.1, boxShadow: '0 0 15px 5px rgba(255, 0, 0, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-red-700 to-black text-white text-lg font-black rounded-full shadow-[0_0_30px_rgba(255,0,0,0.5)] hover:shadow-[0_0_50px_rgba(255,0,0,0.7)] transition-all duration-300 w-full max-w-sm"
          >
            Buy Now
          </motion.button>
        </div>
      </div>
    </section>
  )
}
