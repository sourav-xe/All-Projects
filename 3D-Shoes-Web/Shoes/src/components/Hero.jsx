import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function ShoeModel() {
  const { scene } = useGLTF('/models/shoe/scene.gltf');
  const shoeRef = useRef();
  
  const minRotation = 0; // 0 degrees (initial position)
  const maxRotation = Math.PI / 6; // 30 degrees in radians (forward position)
  
  // Using useFrame hook to create forward rotation between 0 and 30 degrees
  useFrame(() => {
    if (shoeRef.current) {
      // Create smooth oscillation between 0° and 30° (in radians)
      shoeRef.current.rotation.y = minRotation + (Math.sin(Date.now() / 1000) * (maxRotation - minRotation));
    }
  });

  return <primitive ref={shoeRef} object={scene} scale={2} position={[2.2, -1.2, 0]} />;
}

useGLTF.preload('/models/shoe/scene.gltf');

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulating loading completion (You can replace this with actual loading logic)
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Shoe will drop after 1 second
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-black to-gray-900 text-white font-sans relative overflow-hidden">
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 4, 5]} intensity={1.2} />
          {isLoaded && (
            <motion.group 
              initial={{ y: -200 }}  // Start above the screen
              animate={{ y: 0 }} // Drop to its final position
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <ShoeModel />
            </motion.group>
          )}
          <Environment preset="city" />
          <ContactShadows position={[0, -1.4, 0]} opacity={0.35} scale={10} blur={2} far={4.5} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col justify-center h-full p-8 md:p-16 max-w-2xl">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 text-white"
          style={{
            fontFamily: "'Poppins', sans-serif", // Updated font
            textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(0,255,255,0.3)',
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Get Ready to
          Step Into the Future
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-6"
          style={{
            fontFamily: "'Roboto', sans-serif", // New font for description
            textShadow: '0 0 8px rgba(255,255,255,0.2)',
            opacity: 0.9
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Discover our latest tech-driven sneakers designed for performance and style.
        </motion.p>

        {/* Shop Now Button with Color Animation */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/shop">
            <motion.button 
              className="relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg overflow-hidden hover:scale-105 transition-transform"
              style={{
                boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="relative z-10">Shop Now</span>
              <span className="absolute inset-0 bg-white opacity-10 animate-pulse" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
