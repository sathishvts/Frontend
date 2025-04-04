import React from 'react';
import { useNavigate } from 'react-router-dom';
import jewel1 from '../images/ji1.jpg';
import jewel2 from '../images/ji2.jpg';
import jewel3 from '../images/ji3.jpg';
import jewel4 from '../images/ji4.jpg';
import jewel5 from '../images/ji5.jpg';
import jewel6 from '../images/ji6.jpg';

const products = [
  { id: 1, name: "Bridal Jewellery Set", price: "Rs. 1099 / day", image: jewel1 },
  { id: 2, name: "Bridal Jewellery Set", price: "Rs. 1099 / day", image: jewel2 },
  { id: 3, name: "Bridal Jewellery Set", price: "Rs. 1099 / day", image: jewel3 },
  { id: 4, name: "Bridal Jewellery Set", price: "Rs. 1099 / day", image: jewel4 },
  { id: 5, name: "Bridal Jewellery Set", price: "Rs. 1099 / day", image: jewel5 },
  { id: 6, name: "Bridal Jewellery Set", price: "Rs. 1099 / day", image: jewel6 },
];

function Fullbridalset() {
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    navigate('/product-details', { state: { product } });
  };

  return (
    <div className='shop-container'>
      <h1 className='ShopUs'>Fullbridalset</h1>
      <div className='grid-container'>
        {products.map((product) => (
          <div key={product.id} className='product-item'>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <h3>{product.price}</h3>
            <button className='red'>Rental</button>
            <button className='yellow' onClick={() => handleBuyNow(product)}>Buy Now</button>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Fullbridalset;
