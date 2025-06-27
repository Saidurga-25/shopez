import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../data/products';
import './FlashSale.css';
import Banner from '../components/Banner'; // ✅ Top banner

function FlashSale() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleClearFilters = () => {
    setSelectedCategory('');
    setSortBy('');
    const radios = document.querySelectorAll('input[type=radio]');
    radios.forEach((radio) => (radio.checked = false));
  };

  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory && product.category !== selectedCategory) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'lowToHigh') return parseInt(a.price.replace(/,/g, '')) - parseInt(b.price.replace(/,/g, ''));
      if (sortBy === 'highToLow') return parseInt(b.price.replace(/,/g, '')) - parseInt(a.price.replace(/,/g, ''));
      return 0;
    });

  return (
    <div>
      {/* ✅ Banner at top */}
      <Banner />
     

      {/* ✅ Main layout */}
      <div className="flash-sale-container">
        {/* Sidebar Filters */}
        <aside className="filter-sidebar">
          <h3>Filters</h3>

          <div className="filter-group">
            <h4>Sort By</h4>
            <label>
              <input type="radio" name="sort" onChange={() => setSortBy('lowToHigh')} />
              Price (low to high)
            </label>
            <label>
              <input type="radio" name="sort" onChange={() => setSortBy('highToLow')} />
              Price (high to low)
            </label>
          </div>

          <div className="filter-group">
            <h4>Categories</h4>
            <label>
              <input type="radio" name="category" onChange={() => setSelectedCategory('fashion')} />
              Fashion
            </label>
            <label>
              <input type="radio" name="category" onChange={() => setSelectedCategory('electronics')} />
              Electronics
            </label>
            <label>
              <input type="radio" name="category" onChange={() => setSelectedCategory('car')} />
              Car
            </label>
          </div>

          <button className="clear-filter-btn" onClick={handleClearFilters}>
            Remove Filters
          </button>
        </aside>

        {/* Product Grid */}
        <div className="products-section">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product.id)}
            >
              <img src={product.images[0]} alt={product.name} />
              <h4>{product.name}</h4>
              <p>₹{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlashSale;
