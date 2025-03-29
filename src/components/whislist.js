import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Wishlist() {
  const location = useLocation();
  const navigate = useNavigate();
  const wishlist = location.state?.wishlist || [];

  return (
    <div className="wishlist-container">
      <h1>Your Wishlist</h1>
      {wishlist.length > 0 ? (
        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Rs. {item.price} / day</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty</p>
      )}
      <button onClick={() => navigate(-1)}>Back to Shop</button>
    </div>
  );
}

export default Wishlist;
