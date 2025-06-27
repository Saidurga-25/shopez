import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isLoggedIn, role }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Hide nav items on login page
  const hideNavItems = location.pathname === '/login';

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
  <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '24px' }}>
    <span style={{ color: 'Red' }}>Shop</span><span style={{ color: 'White' }}>EZ</span>
  </Link>
</div>


      {!hideNavItems && (
        <>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress} // Enter key support
            />
            <button className="search-btn" onClick={handleSearch}>Search</button>
          </div>

          <div className="nav-buttons">
            {isLoggedIn && (
              <Link to="/profile">
                <button className="nav-btn">Profile</button>
              </Link>
            )}
            {!isLoggedIn && (
              <Link to="/login">
                <button className="nav-btn">Login</button>
              </Link>
            )}
            <Link to="/cart">
              <button className="nav-btn">Cart 🛒</button>
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
