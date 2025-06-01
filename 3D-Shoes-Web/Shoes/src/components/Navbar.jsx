import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/logo.png';

const Navbar = () => {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login state on load
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginStatus === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/user'); // Redirect to login page
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <span
            className="text-xl font-bold tracking-widest"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            NeoKicks
          </span>
        </div>

        {/* Nav Links */}
        <ul
          className="flex space-x-10 text-sm md:text-base font-semibold"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <li>
            <Link
              to="/"
              className="hover:text-cyan-400 transition duration-300 hover:drop-shadow-[0_0_6px_cyan]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="hover:text-cyan-400 transition duration-300 hover:drop-shadow-[0_0_6px_cyan]"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="relative hover:text-cyan-400 transition duration-300 hover:drop-shadow-[0_0_6px_cyan]"
            >
              Cart
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 text-xs sm:text-sm bg-red-600 text-white rounded-full px-2 py-0.5">
                  {totalItems}
                </span>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-cyan-400 transition duration-300 hover:drop-shadow-[0_0_6px_cyan]"
            >
              About
            </Link>
          </li>
          <li>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="hover:text-red-500 transition duration-300 hover:drop-shadow-[0_0_6px_red]"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/user"
                className="hover:text-cyan-400 transition duration-300 hover:drop-shadow-[0_0_6px_cyan]"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
