import React from 'react'

const Cards = ({ProductObj}) => {
    let{title, category,price,thumbnail,rating}= ProductObj;
  return (
    <div className="card bg-base-100 w-90 shadow-sm">
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
        <button className="btn btn-primary" onClick={()=>{console.log(ProductObj.id)}}>Buy Now</button>
      </div>
    </div>
  </div>
  )
}



export default Cards
