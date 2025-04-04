// ProductDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function ProductDetails() {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <div>No product details found.</div>;
  }

  return (
    <div className="product-details">
      <h1>Product Details</h1>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
}

export default  ProductDetails;

