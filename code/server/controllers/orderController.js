const Order = require('../models/Order');

const placeOrder = async (req, res) => {
  const { user, productName, productId, price, address, phone } = req.body;

  try {
    const order = new Order({ user, productName, productId, price, address, phone });
    await order.save();
    res.status(201).json({ message: 'Order placed successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to place order' });
  }
};

const getUserOrders = async (req, res) => {
  const { username } = req.params;

  try {
    const orders = await Order.find({ user: username });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch all orders' });
  }
};

module.exports = { placeOrder, getUserOrders, getAllOrders };
