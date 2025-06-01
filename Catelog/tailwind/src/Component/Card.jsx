import React from 'react'

const Cards = ({productObj}) => {
    let{title, category,price,thumbnail,rating}= productObj;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img
        src={thumbnail}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p><span className='badge badge-primary'>{category}</span></p>
      <p className='text-black'>{rating}</p>
      <p className='text-xl font-bold text-black'>${price}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  )
}



export default Cards
