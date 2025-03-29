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
       <footer class="full-footer-section">
        <div class="full-footer-logo">
          <h3>DK Bridal <br />Collections</h3>
        </div>
        <div class="full-footer-links">
          <h4>Links</h4>
          <ul>
            <li><a href="#">About DK</a></li>
            <li><a href="#">Your Orders</a></li>
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Bridal Gallery</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div class="full-footer-contact">
          <h4>Contact</h4>
          <h4><box-icon type='solid' name='phone-call'></box-icon>+91 8798645325</h4>
          <h4><box-icon name='envelope' ></box-icon> dkbridal@gmail.com</h4>
          <h4><box-icon type='solid' name='sun'></box-icon>dkbridal.com</h4>

         
        </div>

        <div class="full-footer-social">
          <h4>Follow Us On</h4>
          <ul>
            <li><a href="#"> <box-icon type='logo' name='facebook-circle'></box-icon></a></li>
            <li><a href="#"><box-icon type='logo' name='instagram'></box-icon></a></li>
            <li><a href="#"><box-icon name='twitter' type='logo' ></box-icon></a></li>
          </ul>

        </div>
      </footer> 
    </div>
  );
}

export default Fullbridalset;
