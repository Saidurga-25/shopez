import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard({ userName }) {
  const navigate = useNavigate();
  const [view, setView] = useState(''); // view: 'products' | 'orders' | 'users'

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <p>Welcome, {userName}!</p>

      <div className="admin-buttons">
        <button onClick={() => setView('products')}>📦 View Products</button>
        <button onClick={() => setView('orders')}>🛒 Manage Orders</button>
        <button onClick={() => setView('users')}>👥 Manage Users</button>
      </div>

      {view === 'products' && (
        <div className="admin-section">
          <h3>📦 Products</h3>
          <ul>
            <li>Canon Camera</li>
            <li>Laptop</li>
            <li>Redmi Phone</li>
          </ul>
        </div>
      )}

      {view === 'orders' && (
        <div className="admin-section">
          <h3>🛒 Orders</h3>
          <ul>
            <li>Order #1001 - Canon - Shipped</li>
            <li>Order #1002 - Laptop - Processing</li>
          </ul>
        </div>
      )}

      {view === 'users' && (
        <div className="admin-section">
          <h3>👥 Users</h3>
          <ul>
            <li>user</li>
            <li>admin</li>
          </ul>
        </div>
      )}

      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default AdminDashboard;
