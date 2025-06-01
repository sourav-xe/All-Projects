import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 bg-gradient-to-r from-[#1e1e2f] to-[#0f0f1a] pt-20 pb-10 px-6 text-white"
    >
      {/* Curved Top */}
      <div className="absolute -top-10 left-0 w-full h-20 bg-gradient-to-r from-[#1e1e2f] to-[#0f0f1a] rounded-t-[100%]"></div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8 relative z-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold text-purple-300">Rare Edition</h2>
          <p className="text-gray-400 mt-2 text-sm">Step into something legendary. Crafted for the rare ones.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-purple-200">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><a href="#" className="hover:text-purple-400">Home</a></li>
            <li><a href="#" className="hover:text-purple-400">About</a></li>
            <li><a href="#" className="hover:text-purple-400">Shop</a></li>
            <li><a href="#" className="hover:text-purple-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-purple-200">Get in Touch</h4>
          <p className="text-sm text-gray-400">123 Rare Street, Sneaker City</p>
          <p className="text-sm text-gray-400 mt-1">Email: support@rareedition.com</p>
          <p className="text-sm text-gray-400">Phone: +91 98765 43210</p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-semibold text-purple-200">Follow Us</h4>
          <div className="flex gap-4 text-xl text-gray-400">
            {[FaInstagram, FaTwitter, FaFacebookF, FaLinkedin].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, color: '#c084fc' }}
                className="hover:text-purple-300 transition"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10">
        Made with ❤️ by <span className="text-purple-300 font-medium">ShoeVerse</span> · © {new Date().getFullYear()}
      </div>
    </motion.footer>
  )
}
