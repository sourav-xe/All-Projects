// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import React from 'react';

// function App() {
//   const [phone, setPhone] = useState({ name: '', color: '', image: '' });
//   const [tracking, setTracking] = useState([]);
//   const handleChange = e => setPhone({ ...phone, [e.target.name]: e.target.value });
//   const handleSubmit = async e => {
//     e.preventDefault();
//     await axios.post('http://localhost:5000/api/phones', phone);
//     alert('Phone posted!');
//   };

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/phones').then(res => setTracking(res.data));
//   }, []);

//   return (
//     <div className="p-6 max-w-2xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Post a Phone</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
//         <input name="name" onChange={handleChange} placeholder="Phone Name" className="p-2 border" />
//         <input name="color" onChange={handleChange} placeholder="Color" className="p-2 border" />
//         <input name="image" onChange={handleChange} placeholder="Image URL" className="p-2 border" />
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
//       </form>

//       <h2 className="text-xl font-semibold mb-2">Order Tracking</h2>
//       <div className="space-y-4">
//         {tracking.map(phone => (
//           <div key={phone._id} className="border p-4 rounded shadow">
//             <img src={phone.image} alt={phone.name} className="w-32 h-32 object-cover mb-2" />
//             <div><strong>Name:</strong> {phone.name}</div>
//             <div><strong>Color:</strong> {phone.color}</div>
//             <div><strong>Status:</strong> {phone.status || 'Ordered'}</div>
//             <div className="flex space-x-2 mt-2">
//               {['Ordered', 'Packed', 'Shipped', 'Delivered'].map(step => (
//                 <div key={step} className={`text-xs px-2 py-1 rounded-full ${step === phone.status ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>{step}</div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
