import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import React from 'react'
import PostPhone from './pages/PostPhone'
import './index.css'
import PhoneDetails from './pages/PhoneDetails'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post" element={<PostPhone />} />
      <Route path="/phone/:id" element={<PhoneDetails />} />
    </Routes>
  )
}

export default App
