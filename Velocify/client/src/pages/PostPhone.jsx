import { useState } from 'react'
import React from 'react'

function PostPhone() {
  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [image, setImage] = useState(null)

const handleSubmit = async (e) => {
  e.preventDefault()
  const formData = new FormData()
  formData.append('name', name)
  formData.append('color', color)
  formData.append('image', image)

  try {
    const res = await fetch('http://localhost:5000/api/phones', {
      method: 'POST',
      body: formData,
    })

    const contentType = res.headers.get('content-type')

    if (res.ok && contentType && contentType.includes('application/json')) {
      const data = await res.json()
      console.log('Success:', data)
    } else {
      const text = await res.text() // capture raw response to inspect
      console.error('Unexpected response:', text)
    }
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}


  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <input
        type="text"
        placeholder="Phone Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mb-4"
        required
      />
      <input
        type="text"
        placeholder="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="border p-2 w-full mb-4"
        required
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="mb-4"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Post Phone
      </button>
    </form>
  )
}

export default PostPhone
