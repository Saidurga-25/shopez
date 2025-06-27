// src/components/ProductSlider.jsx
import React from 'react';
import './ProductSlider.css';
import { useNavigate } from 'react-router-dom';

function ProductSlider({ products }) {
  const navigate = useNavigate();

  return (
    <div className="slider-container">
      {products.map((product) => (
        <div
          key={product.id}
          className="slider-card"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <img src={product.images[0]} alt={product.name} />
          <h4>{product.name}</h4>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductSlider;
