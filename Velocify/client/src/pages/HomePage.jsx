import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'

function HomePage() {
  const [phones, setPhones] = useState([])

  useEffect(() => {
    fetch('YOUR_BACKEND_API/phones')
      .then(res => res.json())
      .then(data => setPhones(data))
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {phones.map(phone => (
        <Link to={`/phone/${phone._id}`} key={phone._id} className="border rounded p-4 hover:shadow-lg">
          <img src={phone.imageUrl} alt={phone.name} className="w-full h-48 object-cover mb-2" />
          <h2 className="text-lg font-semibold">{phone.name}</h2>
          <p>Color: {phone.color}</p>
        </Link>
      ))}
    </div>
  )
}

export default HomePage
