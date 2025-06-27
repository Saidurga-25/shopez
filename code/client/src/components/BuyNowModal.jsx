import React, { useState } from 'react';
import './BuyNowModal.css';

function BuyNowModal({ product, onClose, onOrderPlaced, username }) {
  const [name, setName] = useState(username || '');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      productId: product.id,
      productName: product.name,
      productPrice: product.price,
      customerName: name,
      address,
      phone,
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    existingOrders.push(order);
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    alert('Order successfully placed!');
    onOrderPlaced(order);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Enter Delivery Details</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Address" required value={address} onChange={(e) => setAddress(e.target.value)} />
          <input type="text" placeholder="Phone Number" required value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button type="submit">Confirm (COD)</button>
          <button type="button" onClick={onClose} className="cancel">Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default BuyNowModal;
