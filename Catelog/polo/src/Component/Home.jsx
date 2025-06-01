import React from 'react'
import Card from './Card'
import {Product} from './Product'


const Home = () => {
  return (
    <div className='flex justify-center flex-wrap gap-3 mt-5 '>
    {Product.map((Product)=>{
      return<Card key={Product.id} ProductObj={Product}/>
    })}
  </div>
  )
}

export default Home
