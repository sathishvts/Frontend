import React from 'react';
import { useNavigate } from 'react-router-dom';

import jewels from '../images/jewels.jpg';
import jewel1 from '../images/ji1.jpg';
import jewel2 from '../images/ji2.jpg';
import jewel3 from '../images/ji3.jpg';

import sampel1 from '../images/sampel 1.jpg';
import sampel2 from '../images/sampel 2.jpg';
import star from '../images/star.png';
import best from '../images/best.jpg';

const products = [
  { id: 1, name: "Bridal Jewellery Set", price: "Rs. 1099 / day", image: jewel1 },
  { id: 2, name: "Bridal Jewellery Set", price: "Rs. 1099 / day", image: jewel2 },
  { id: 3, name: "Bridal Jewellery Set", price: "Rs. 1099 / day", image: jewel3 },

];

function Home() {

  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    navigate('/product-details', { state: { product } });
  };
  return (
    <div className="images">
      
      <img src={jewels} alt="Bridal Jewel" />
      <h1>bridal</h1>

      <p>Discover Our Exquisite Collection of Bridal Jewelry. Every piece tells<br /> a story of sophistication.</p>
      <h1 className='explore'>Explore Our Collection</h1>

      <h2>Our Future Collection</h2>

      <div className="jewellery-item">
        <div className='grid-container'>
          {products.map((product) => (
            <div key={product.id} className='product-item'>
              <img src={product.image} alt={product.name} />
              <h3>{product.price}</h3>
              
              <button className='red'>Rental</button>
              <button className='yellow' onClick={() => handleBuyNow(product)}>Buy Now</button>
            </div>
          ))}
        </div>
      </div>
      <div >
        <button className='see-all'>See All</button>
      </div>

    
      <div className='why-choose'>
        <h3 className='whychoose'>Why Choose Bridal Collection</h3>


      </div>

      <div className='unmatch-container'>
        <div className='unmatch-row'>

          <h6>
            <span>Unmatched Elegance</span><br /> <br /> It seems like you're asking about a theoretical explanation or understanding of a concept. Could you clarify the topic or theory you're interested in? For example, are you looking for details on CSS layout concepts, the dynamics of Flexbox, or something entirely different? Let me know, and I'll dive in to provide the best explanation for you!...like you're asking about a theoretical explanation or understanding of a concept. Could you clarify the topic or theory you're interested in? For example, are you looking for details on CSS layout concepts, the dynamics of Flexbox,
          </h6>

          <div className='elegance'>
            <img src={sampel1} alt="Bridal Jewel1" />
          </div>
        </div>
      </div>


      <div className='unmatch-container'>
        <div className='unmatch-row'>
          <h6>
            <span>Affordability meet Luxury</span><br /> <br /> Asking about a theoretical explanation or understanding of a concept. Could you clarify the topic or theory you're interested in? For example, are you looking for details on CSS layout concepts, the dynamics of Flexbox, or something entirely different? Let me know, and I'll dive in to provide the best explanation for you!...like you're asking about a theoretical explanation or understanding of a concept. Could you clarify the topic or theory you're interested in? For example, are you looking for details on CSS layout concepts, the dynamics of Flexbox,
          </h6>

          <div className='elegance'>
            <img src={sampel2} alt="Bridal Jewel1" />
          </div>
        </div>
      </div>

      <div className='unmatch-container'>
        <div className='unmatch-row'>
          <h6>
            <span>Personalised Experience</span><br /> <br /> Asking about a theoretical explanation or understanding of a concept. Could you clarify the topic or theory you're interested in? For example, are you looking for details on CSS layout concepts, the dynamics of Flexbox, or something entirely different? Let me know, and I'll dive in to provide the best explanation for you!...like you're asking about a theoretical explanation or understanding of a concept. Could you clarify the topic or theory you're interested in? For example, are you looking for details on CSS layout concepts, the dynamics of Flexbox,
          </h6>

          <div className='elegance'>
            <img src={star} alt="Bridal Jewel1" />
          </div>
        </div>
      </div>

      <div className='unmatch-container'>
        <div className='unmatch-row'>
          <h6>
            <span>Quality You Can Trust</span><br /> <br /> Asking about a theoretical explanation or understanding of a concept. Could you clarify the topic or theory you're interested in? For example, are you looking for details on CSS layout concepts, the dynamics of Flexbox, or something entirely different? Let me know, and I'll dive in to provide the best explanation for you!...like you're asking about a theoretical explanation or understanding of a concept. Could you clarify the topic or theory you're interested in? For example, are you looking for details on CSS layout concepts, the dynamics of Flexbox,
          </h6>

          <div className='elegance'>
            <img src={best} alt="Bridal Jewel1" />
          </div>
        </div>
      </div>


      <footer class="home-footer-section">
        <div class="home-footer-logo">
          <h5>DK Bridal <br />Collections</h5>
        </div>
        <div class="home-footer-links">
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
        <div class="home-footer-contact">
          <h4>Contact</h4>
          <h4><box-icon type='solid' name='phone-call'></box-icon>+91 8798645325</h4>
          <h4><box-icon name='envelope' ></box-icon> dkbridal@gmail.com</h4>
          <h4><box-icon type='solid' name='sun'></box-icon>dkbridal.com</h4>

         
        </div>

        <div class="home-footer-social">
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

export default Home;
