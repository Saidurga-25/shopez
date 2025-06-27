const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: String,  // username of who placed the order
  productName: String,
  productId: Number,
  price: String,
  address: String,
  phone: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
