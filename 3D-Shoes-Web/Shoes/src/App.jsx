import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart' // or './pages/Cart' if you rename the file
import About from './pages/About'
import User from './pages/User' // or './pages/User' if you rename the file

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/user" element={<User />} />
      {/* Add more routes as needed */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  )
}

export default App
