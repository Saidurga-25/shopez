import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import products from '../data/products';
import './SearchResults.css';

function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get('q')?.toLowerCase() || '';

  const matchedProduct = products.find(
    (product) => product.name.toLowerCase().includes(query)
  );

  const relatedProducts = matchedProduct
    ? products.filter(
        (product) =>
          product.category === matchedProduct.category && product.id !== matchedProduct.id
      )
    : [];

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="search-results-container">
      <button className="back-btn" onClick={() => navigate('/')}>⬅ Back to Home</button>

      <h2>Search Results for: <span style={{ color: 'red' }}>{query}</span></h2>

      {matchedProduct ? (
        <>
          <div className="product-card" onClick={() => handleProductClick(matchedProduct.id)}>
            <img src={matchedProduct.images[0]} alt={matchedProduct.name} />
            <h4>{matchedProduct.name}</h4>
            <p>₹{matchedProduct.price}</p>
            <button className="btn-buy">Buy Now</button>
            <button className="btn-cart">Add to Cart</button>
          </div>

          <h3>Related Products</h3>
          <div className="related-products">
            {relatedProducts.map((product) => (
              <div key={product.id} className="product-card" onClick={() => handleProductClick(product.id)}>
                <img src={product.images[0]} alt={product.name} />
                <h4>{product.name}</h4>
                <p>₹{product.price}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="no-product">No product found with that name.</p>
      )}
    </div>
  );
}

export default SearchResults;
