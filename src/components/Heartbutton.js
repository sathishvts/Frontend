import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeartButton = ({ product }) => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked(true);
    navigate('/wishlist', { state: { product } }); // Navigate to wishlist with product
  };

  return (
    <div
      className="heart"
      onClick={handleClick}
      style={{
        backgroundColor: isClicked ? 'red' : 'transparent',
        padding: '10px',
        display: 'inline-block',
        cursor: 'pointer',
        borderRadius: '50%',
        transition: 'background-color 0.3s ease',
      }}
    >
      <box-icon name="heart" color={isClicked ? 'red' : 'gray'}></box-icon>
    </div>
  );
};

export default HeartButton;
