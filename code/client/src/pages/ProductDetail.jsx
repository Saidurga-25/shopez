import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products';
import './ProductDetail.css';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBuyNow = () => {
  const loggedInUser = localStorage.getItem('loggedInUser');

  if (!loggedInUser) {
    alert("Please login to place an order");
    return;
  }

  const address = prompt("Enter your delivery address:");
  if (!address) {
    alert("Order cancelled. Address is required.");
    return;
  }

  const newOrder = {
    user: loggedInUser,
    product,
    address,
    status: 'COD',
    date: new Date().toLocaleString()
  };

  const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
  existingOrders.push(newOrder);
  localStorage.setItem('orders', JSON.stringify(existingOrders));

  alert("Order placed successfully!");
};


  if (!product) return <p>Product not found</p>;

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      (prev + 1) % product.images.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      (prev - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className="product-detail">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

      <div className="image-slider">
        <button className="arrow left" onClick={handlePrevImage}>&lt;</button>
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="main-image"
        />
        <button className="arrow right" onClick={handleNextImage}>&gt;</button>
      </div>

      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>

      <div className="button-group">
        <button className="add-to-cart" onClick={() => addToCart(product)}>
          Add to Cart 🛒
        </button>
        <button className="buy-now">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetail;

