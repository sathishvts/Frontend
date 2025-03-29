import React from 'react'
import bridal1 from '../images/bi1.jpg'
import bridal2 from '../images/bi2.jpg'
import bridal3 from '../images/bi3.jpg'
import bridal4 from '../images/bi4.jpg'
import bridal5 from '../images/bi15.jpg'
import bridal6 from '../images/bi6.jpg'
import bridal7 from '../images/bi7.jpg'
import bridal8 from '../images/bi8.jpg'
import bridal9 from '../images/bi9.jpg'
import bridal10 from '../images/bi10.jpg'
import bridal11 from '../images/bi11.jpg'
import bridal12 from '../images/bi12.jpg'
import bridal13 from '../images/bi13.jpg'
import bridal14 from '../images/bi14.jpg'
import bridal15 from '../images/bi15.jpg'
import bridal16 from '../images/bi16.jpg'


function BridalGallery() {
  return (
    <div>
<h1 className='bridal'>Bridal</h1>
    
    <div className='bridal-container'>
      <img src={bridal1} alt="bridal"/>
      <img src={bridal2} alt="bridal"/>
      <img src={bridal3} alt="bridal"/>
      <img src={bridal4} alt="bridal"/>
      <img src={bridal5} alt="bridal"/>
      <img src={bridal6} alt="bridal"/>
      <img src={bridal7} alt="bridal"/>
      <img src={bridal8} alt="bridal"/>
      <img src={bridal9} alt="bridal"/>
      <img src={bridal10} alt="bridal"/>
      <img src={bridal11} alt="bridal"/>
      <img src={bridal12} alt="bridal"/>
      <img src={bridal13} alt="bridal"/>
      <img src={bridal14} alt="bridal"/>
      <img src={bridal15} alt="bridal"/>
      <img src={bridal16} alt="bridal"/>

    </div>


    <footer class=" bridal-footer-section">
  <div class=" bridal-footer-logo">
    <h3>DK Bridal <br/>Collections</h3>
  </div>
  <div class="bridal-footer-links">
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
  <div class="bridal-footer-contact">
    <h4>Contact</h4>
    <p><box-icon type='solid' name='phone-call'></box-icon>+91 8798645325</p>
    <p><box-icon name='envelope' ></box-icon> dkbridal@gmail.com</p>
    <p><box-icon type='solid' name='sun'></box-icon>dkbridal.com</p>
  </div>

  <div class="bridal-footer-social">
    <h4>Follow Us On</h4>
    <ul>
      <li><a href="#"> <box-icon type='logo' name='facebook-circle'></box-icon></a></li>
      <li><a href="#"><box-icon type='logo' name='instagram'></box-icon></a></li>
      <li><a href="#"><box-icon name='twitter' type='logo' ></box-icon></a></li>
    </ul>

  </div>
</footer>
    </div>
  )
}

export default BridalGallery