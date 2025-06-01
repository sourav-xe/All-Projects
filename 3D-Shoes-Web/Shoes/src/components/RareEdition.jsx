import { motion } from 'framer-motion'
import React from 'react'

export default function RareEditionBanner() {
  return (
    <section className="relative w-full h-[60vh] md:h-[50vh] overflow-hidden">
      {/* Background Image */}
      
      <img
        src="/public/images/RareEdition.png" // Change to your actual image path
        alt="Rare Edition Shoes"
        className="w-full h-full object-cover"
      />

      {/* Animated Heading Overlay */}
    
    </section>
  )
}
