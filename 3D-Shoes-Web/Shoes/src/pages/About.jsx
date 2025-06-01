import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
        {/* Hero Section */}
        <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
          <motion.div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 80 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-center"
              style={{
                fontFamily: "'Poppins', sans-serif",
                textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(0,255,255,0.3)',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Our Story: Where Innovation Meets Style
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Discover the journey behind our brand and our mission to revolutionize the world of footwear.
            </motion.p>
          </motion.div>
        </div>

        {/* Brand Values Section */}
        <section className="px-8 py-16 bg-black bg-opacity-70">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Innovation', 'Quality', 'Customer Satisfaction'].map((value, idx) => (
              <motion.div
                className="p-6 bg-gray-800 rounded-xl shadow-xl hover:scale-105 transition-transform"
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + idx * 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-4">{value}</h3>
                <p className="text-gray-400">
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam fugiat dignissimos accusantium exercitationem provident eveniet neque tempora, eligendi illum, corrupti aut dolor recusandae suscipit pariatur quasi quis ratione ad harum.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fugiat dignissimos accusantium exercitationem provident eveniet neque tempora, eligendi illum, corrupti aut dolor recusandae suscipit pariatur quasi quis ratione ad harum.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
       <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
  <motion.h2
    className="text-3xl md:text-4xl font-bold text-center mb-12"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
    What Our Customers Are Saying
  </motion.h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Testimonial 1 */}
    <motion.div
      className="bg-black bg-opacity-70 text-white p-8 rounded-xl shadow-xl hover:scale-105 transition-transform"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 }}
    >
      <p className="text-lg mb-4">
        "Hands down the best purchase I made this year. These shoes feel custom-made for my feet."
      </p>
      <div className="text-right font-semibold">- Ayesha K.</div>
    </motion.div>

    {/* Testimonial 2 */}
    <motion.div
      className="bg-black bg-opacity-70 text-white p-8 rounded-xl shadow-xl hover:scale-105 transition-transform"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <p className="text-lg mb-4">
        "Stylish, lightweight, and durable — I wear them every day and get compliments constantly."
      </p>
      <div className="text-right font-semibold">- Leo R.</div>
    </motion.div>

    {/* Testimonial 3 */}
    <motion.div
      className="bg-black bg-opacity-70 text-white p-8 rounded-xl shadow-xl hover:scale-105 transition-transform"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6 }}
    >
      <p className="text-lg mb-4">
        "The support these shoes offer is unmatched. My morning walks have never been this enjoyable."
      </p>
      <div className="text-right font-semibold">- Priya S.</div>
    </motion.div>

    {/* Testimonial 4 */}
    <motion.div
      className="bg-black bg-opacity-70 text-white p-8 rounded-xl shadow-xl hover:scale-105 transition-transform"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7 }}
    >
      <p className="text-lg mb-4">
        "From gym workouts to weekend outings, these shoes are perfect for every occasion."
      </p>
      <div className="text-right font-semibold">- Marcus W.</div>
    </motion.div>

    {/* Testimonial 5 */}
    <motion.div
      className="bg-black bg-opacity-70 text-white p-8 rounded-xl shadow-xl hover:scale-105 transition-transform"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8 }}
    >
      <p className="text-lg mb-4">
        "The cushioning and grip are phenomenal. I feel confident and supported with every step."
      </p>
      <div className="text-right font-semibold">- Nina L.</div>
    </motion.div>

    {/* Testimonial 6 */}
    <motion.div
      className="bg-black bg-opacity-70 text-white p-8 rounded-xl shadow-xl hover:scale-105 transition-transform"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.9 }}
    >
      <p className="text-lg mb-4">
        "These kicks elevated my wardrobe game instantly. Plus, they’re so comfy!"
      </p>
      <div className="text-right font-semibold">- Ethan J.</div>
    </motion.div>
  </div>
</section>

      </div>
      <Footer />
    </>
  );
}
