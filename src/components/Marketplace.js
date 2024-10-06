// Marketplace.js
import React from 'react';
import './styles/Marketplace.css';

function Marketplace() {
  return (
    <div className="marketplace">
      <h2 className="section-title">Marketplace</h2>
      <div className="product-list">
        <div className="product-item">
          <img src="/assets/product1.jpg" alt="Product 1" />
          <button className="buy-now button-hover">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
