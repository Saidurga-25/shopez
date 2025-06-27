import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile({ loggedInUser, setIsLoggedIn }) {
  const [userOrders, setUserOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const allOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const filtered = allOrders.filter(order => order.user === loggedInUser);
    setUserOrders(filtered);
  }, [loggedInUser]);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="profile-container">
      <h2>Welcome, {loggedInUser}!</h2>

      <h3>Your Orders</h3>
      {userOrders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <ul className="order-list">
          {userOrders.map((order, idx) => (
            <li key={idx} className="order-card">
              <strong>{order.product.name}</strong><br />
              ₹{order.product.price}<br />
              Address: {order.address}<br />
              Status: {order.status}<br />
              Placed on: {order.date}
            </li>
          ))}
        </ul>
      )}

      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
