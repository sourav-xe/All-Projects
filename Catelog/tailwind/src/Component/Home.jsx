import React from 'react'
import Card from './Card'

const Home = () => {
  return (
    <div className='flex justify-around flex-wrap gap-15 p-4'>
      {products.map((product)=>{
        <Card key= {product.id} productObj={product}/>
      })}
    </div>
  )
}

export default Home
