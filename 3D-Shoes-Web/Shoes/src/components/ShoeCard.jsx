import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
import { addToCart, updateQuantity } from '../features/cart/cartSlice'; // Import actions
import { ShoppingCart } from 'lucide-react'; // Optional icon
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function ShoeCard({ shoe }) {
  const [isAdded, setIsAdded] = useState(false); // Track if item is added to cart
  const [quantity, setQuantity] = useState(1); // Track quantity of the shoe
  const cartItems = useSelector((state) => state.cart.items); // Get the cart items from Redux
  const dispatch = useDispatch(); // Dispatch actions to Redux store
  const navigate = useNavigate(); // Navigate to the cart page

  useEffect(() => {
    const itemInCart = cartItems.find((item) => item.id === shoe.id);
    if (itemInCart) {
      setIsAdded(true);
      setQuantity(itemInCart.quantity);
    }
  }, [cartItems, shoe.id]);

  const handleAddToCart = () => {
    dispatch(addToCart(shoe)); // Add shoe to the cart in Redux
    setIsAdded(true); // Change button to quantity controls
  };

  const handleBuyNow = () => {
    dispatch(addToCart(shoe)); // Add shoe to the cart in Redux
    navigate('/cart'); // Navigate to the cart page
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return; // Ensure quantity is at least 1
    setQuantity(newQuantity);
    dispatch(updateQuantity({ id: shoe.id, quantity: newQuantity })); // Update quantity in Redux
  };

  return (
    <motion.div
      className="bg-zinc-900 rounded-xl p-4 shadow-lg hover:scale-105 transition duration-300 ease-out transform"
      whileHover={{ scale: 1.03 }} // Reduced hover scale effect
    >
      <img
        src={shoe.image}
        alt={shoe.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-white text-xl font-semibold">{shoe.name}</h3>
      <p className="text-gray-400 mt-1">${shoe.price}</p>

      <div className="mt-4 flex flex-col gap-3">
        {isAdded ? (
          <>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="px-4 py-2 bg-gray-600 rounded-full text-white font-semibold hover:bg-gray-700"
              >
                -
              </button>
              <span className="text-white font-semibold">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="px-4 py-2 bg-gray-600 rounded-full text-white font-semibold hover:bg-gray-700"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="mt-3 px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-white font-semibold hover:brightness-110 transition"
            >
              Add More
            </button>
          </>
        ) : (
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-medium"
          >
            <ShoppingCart className="w-5 h-5" /> {/* Ensure the icon is properly sized */}
            Add to Cart
          </button>
        )}

        <button
          onClick={handleBuyNow}
          className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-medium"
        >
          Buy Now
        </button>
      </div>
    </motion.div>
  );
}
