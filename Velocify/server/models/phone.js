const mongoose = require('mongoose')

const phoneSchema = new mongoose.Schema({
  name: String,
  color: String,
  description: String,
  imageUrl: String,
  status: {
    type: String,
    enum: ['Order Placed', 'Processed', 'Shipped', 'Out for Delivery', 'Delivered'],
    default: 'Order Placed',
  },
  timestamps: {
    placed: Date,
    processed: Date,
    shipped: Date,
    outForDelivery: Date,
    delivered: Date,
  }
})

module.exports = mongoose.model('Phone', phoneSchema)
