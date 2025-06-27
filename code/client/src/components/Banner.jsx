import React, { useState, useEffect } from 'react';
import './Banner.css';

const images = [
  '/images/banner1.jpg',
  '/images/banner2.jpg',
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="banner">
      <img src={images[current]} alt={`Banner ${current + 1}`} className="banner-img" />
    </div>
  );
};

export default Banner;
