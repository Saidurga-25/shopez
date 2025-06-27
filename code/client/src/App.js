import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FlashSale from './pages/FlashSale';
import ProductDetail from './pages/ProductDetail';
import SearchResults from './pages/SearchResults';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (!exists) {
      setCartItems(prev => [...prev, product]);
    }
  };

  const removeFromCart = (id) => {
  setCartItems(cartItems.filter(item => item.id !== id));
};

const [isLoggedIn, setIsLoggedIn] = useState(false);
const [userRole, setUserRole] = useState('');
const [userName, setUserName] = useState('');
const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('loggedInUser') || '');



  

  return (
    <Router>
      {/* 🔁 Pass state to Navbar */}
      <Navbar isLoggedIn={isLoggedIn} role={userRole} />
      <Routes>
        
        <Route path="/" element={<FlashSale />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
<Route
  path="/profile"
  element={
    <Profile
      isLoggedIn={isLoggedIn}
      userName={userName}
      setIsLoggedIn={setIsLoggedIn}
      setUserRole={setUserRole}
      setUserName={setUserName}
    />
  }
/>

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/search" element={<SearchResults />} />
<Route
  path="/login"
  element={
    <Login
      setIsLoggedIn={setIsLoggedIn}
      setUserRole={setUserRole}
      setUserName={setUserName}
    />
  }
/>

      </Routes>
    </Router>
  );
}

export default App;
