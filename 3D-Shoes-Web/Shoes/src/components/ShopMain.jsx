// your imports
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

export default function ShopMain({ selectedCategory, setSelectedCategory, sortOrder, setSortOrder, productRef }) {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const categories = ['All', 'Men', 'Women', 'Unisex', 'Sports'];
  const suggestions = ['Men', 'Women', 'Unisex', 'Sports', 'Sneakers', 'Running', 'Casual'];

  const handleSort = (order) => {
    setSortOrder(order);
    setShowFilterMenu(false);
  };

  const handleReset = () => {
    setSelectedCategory('All');
    setSortOrder(null);
    setShowFilterMenu(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    triggerSearch(suggestion);
  };

  const handleSearchSubmit = () => {
    triggerSearch(searchQuery);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearchSubmit();
  };

  const triggerSearch = (query) => {
    const match = suggestions.find((sug) => sug.toLowerCase() === query.toLowerCase());
    if (match) {
      setSelectedCategory(match);
    }
    setShowSuggestions(false);
    setSearchQuery(match || query);
    setTimeout(() => {
      productRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="relative bg-black text-white">
      {/* Navbar */}
      <div className="sticky top-[64px] z-20 bg-white/10 backdrop-blur-md border-b border-white/20 flex justify-center py-3 px-4 flex-wrap gap-4 text-sm font-medium text-gray-100">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full transition ${
              selectedCategory === cat ? 'bg-white text-black font-semibold' : 'hover:bg-white hover:text-black'
            }`}
          >
            {cat}
          </button>
        ))}
        {/* Filter */}
        <div className="relative">
          <button
            onClick={() => setShowFilterMenu((prev) => !prev)}
            className="px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Filters
          </button>
          {showFilterMenu && (
            <div className="absolute top-12 right-0 bg-white text-black shadow-lg rounded-md w-48 z-30">
              <div className="p-3 border-b text-sm font-bold text-gray-800">Sort by Price</div>
              <button onClick={() => handleSort('low')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Low to High
              </button>
              <button onClick={() => handleSort('high')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                High to Low
              </button>
              <button
                onClick={handleReset}
                className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-100"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-[120px]">
        <img
          src="/images/ShopBg.jpg"
          alt="Shoe Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-25 z-0"
        />

        <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 max-w-5xl">
          {/* Search Bar */}
          <div className="relative w-[70%] max-w-3xl z-20 mb-2">
            <input
              type="search"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleKeyPress}
              placeholder="Search for shoes..."
              className="w-full py-4 px-6 text-xl rounded-full text-black border border-gray-300 
              shadow-[0_10px_20px_rgba(0,0,0,0.4),inset_0_2px_6px_rgba(255,255,255,0.5)]
              focus:outline-none focus:ring-4 focus:ring-pink-400
              placeholder:text-gray-800 placeholder:opacity-90 bg-white pr-14"
            />
            <button
              onClick={handleSearchSubmit}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-pink-600 hover:text-pink-800"
            >
              <FaSearch />
            </button>

            {showSuggestions && (
              <ul className="absolute left-0 right-0 top-[100%] mt-2 bg-white text-black rounded-md shadow-lg z-50">
                {suggestions
                  .filter((sug) => sug.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((sug) => (
                    <li
                      key={sug}
                      onClick={() => handleSuggestionClick(sug)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {sug}
                    </li>
                  ))}
              </ul>
            )}
          </div>

          {/* Hanging Text */}
<div className="relative flex flex-wrap justify-center items-end gap-6 min-h-[140px] z-10">
  {['Kick', 'Your', 'Fits'].map((word, wordIndex) => (
    <div key={wordIndex} className="flex gap-[2px] items-end">
      {word.split('').map((char, i) => {
        const isThread = (wordIndex === 0 && i === 0) || (wordIndex === 2 && i === word.length - 1);
        const globalIndex = wordIndex * 10 + i;
        const color = globalIndex % 2 === 0 ? 'text-red-500' : 'text-white';

        return (
          <motion.div
            key={i}
            className="relative flex flex-col items-center justify-end"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: globalIndex * 0.05, type: 'spring', stiffness: 200 }}
          >
            {isThread && (
              <div className="absolute -top-6 flex flex-col items-center">
                <div className="w-[2px] h-6 bg-red-500 mb-1" style={{ boxShadow: '0 0 6px rgba(255, 0, 0, 0.6)' }} />
                <div className="w-2 h-2 rounded-full bg-red-600" style={{ boxShadow: '0 0 10px rgba(255, 0, 0, 0.8)' }} />
              </div>
            )}
            <span
              className={`text-[48px] sm:text-[64px] font-extrabold ${color}`}
              style={{
                fontFamily: "'Luckiest Guy', cursive",
                textShadow: '2px 2px 0 rgba(0,0,0,0.8)',
              }}
            >
              {char}
            </span>
          </motion.div>
        );
      })}
    </div>
  ))}
</div>


          {/* Explore Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              productRef?.current?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-8"
          >
            <div className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full text-black font-extrabold shadow-lg transition cursor-pointer">
              Explore More
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}