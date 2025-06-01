import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';
import Navbar from '../components/Navbar';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return; // Ensure the quantity is at least 1
    dispatch(updateQuantity({ id, quantity }));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2); // Ensure 2 decimal places
  };

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black text-white py-16 px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-10">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-xl">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-72 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold text-white">{item.name}</h2>
                <p className="text-gray-400 mt-1">${item.price}</p>

                {/* Choose Size */}
                <div className="mt-4">
                  <label className="text-white">Choose Size:</label>
                  <select
                    className="w-full mt-2 px-4 py-2 bg-gray-700 rounded-full text-white"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    <option value="">Select Size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                  </select>
                </div>

                {/* Choose Color */}
                <div className="mt-4">
                  <label className="text-white">Choose Color:</label>
                  <select
                    className="w-full mt-2 px-4 py-2 bg-gray-700 rounded-full text-white"
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                  >
                    <option value="">Select Color</option>
                    <option value="White">White</option>
                    <option value="Black">Black</option>
                    <option value="Red">Red</option>
                  </select>
                </div>

                {/* Item Description */}
                <div className="mt-4">
                  <p className="text-gray-300">
                    This is a premium quality product with excellent durability and comfort. Perfect for all-day wear.
                  </p>
                </div>

                {/* Quantity and Remove */}
                <div className="flex items-center space-x-4 mt-6">
                  <button
                    className="px-4 py-2 bg-red-600 rounded-full text-white font-semibold hover:bg-red-700 transition"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                  <div className="flex items-center">
                    <button
                      className="px-2 py-1 bg-gray-600 rounded-full text-white"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="mx-2 text-white">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-600 rounded-full text-white"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 text-center">
          <h2 className="text-2xl font-semibold">Total: ${calculateTotal()}</h2>
        </div>

        {/* Shipping Address and Delivery Date */}
        <div className="mt-8">
          <h3 className="text-xl text-white font-semibold mb-4">Shipping Details</h3>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Enter your address"
              className="px-4 py-2 bg-gray-700 rounded-md text-white"
            />
            <input
              type="date"
              className="px-4 py-2 bg-gray-700 rounded-md text-white"
            />
            <button className="px-6 py-2 bg-green-600 rounded-full text-white font-semibold hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
