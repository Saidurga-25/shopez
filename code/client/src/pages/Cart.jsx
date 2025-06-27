// src/pages/Cart.jsx
import React from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + parseInt(item.price.replace(/,/g, '')), 0);
  };

  const handlePlaceOrder = () => {
    alert('Your order has been placed!');
    // You can clear cartItems here if needed
  };

  return (
    <div className="cart-container">
      <button className="back-button" onClick={() => navigate('/')}>← Back</button>
      <h2>Your Cart</h2>
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.images[0]} alt={item.name} />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                  <button className="buy-btn">Buy Now</button>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="price-summary">
            <h3>Price Details</h3>
            <p>Total MRP: ₹{getTotalPrice()}</p>
            <p>Discount on MRP: ₹0</p>
            <p>Delivery Charges: ₹0</p>
            <hr />
            <h4>Final Price: ₹{getTotalPrice()}</h4>
            <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
