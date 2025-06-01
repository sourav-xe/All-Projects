import React, { useEffect, useState, useRef } from 'react';
import ShoeCard from '../components/ShoeCard';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import dummyShoes from '../data/dummyShoes';
import ShopMain from '../components/ShopMain';

export default function Shoes() {
  const [shoes, setShoes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState(null);
  const productRef = useRef();

  useEffect(() => {
    const fetchShoes = async () => {
      await new Promise((res) => setTimeout(res, 300));
      setShoes(dummyShoes);
    };
    fetchShoes();
  }, []);

  const filteredShoes = shoes
    .filter((shoe) =>
      selectedCategory === 'All'
        ? true
        : shoe.category?.toLowerCase() === selectedCategory.toLowerCase()
    )
    .sort((a, b) => {
      if (sortOrder === 'low') return a.price - b.price;
      if (sortOrder === 'high') return b.price - a.price;
      return 0;
    });

  return (
    <>
      <Navbar />
      <ShopMain
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        productRef={productRef}
      />

      <section
        ref={productRef}
        className="min-h-screen bg-black text-white py-16 px-6"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Explore the Collection
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {filteredShoes.map((shoe) => (
            <ShoeCard key={shoe.id} shoe={shoe} />
          ))}
        </div>
      </section>
    </>
  );
}