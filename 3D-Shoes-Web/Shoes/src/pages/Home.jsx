import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Hero2 from '../components/Hero2'
import RareEdition from '../components/RareEdition'
import Offer from '../components/Offer'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
       <Hero />
      <Hero2 />
      <RareEdition />
      <Offer />
      <Footer />
    </div>
  )
}

export default Home
