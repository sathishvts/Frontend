import React from 'react';
import sampel2 from '../images/sampel 2.jpg';

function AboutUs() {
  return (
   
    <div>
        <p className='about-us'>About Us</p>
        <div className='main'>
      <div className="column-first">
        <div className='code'>
        <p>
          Buy Indian Bridal Dresses for Wedding Online Bridal dresses for weddings
          abound at Utsav Fashion. It’s easy to steal the show in our dream-come-true
          sarees, lehengas, and embroidered salwar suits. Our breathtaking bridal
          dresses for weddings are exclusively designed to capture the true grace of
          bridehood. With intricate accents and fine craftsmanship, our rich Indian
          bridal wear caters
        </p>

        <p>
          Net Lehenga in Multicolor This attire with Faux Crepe lining is enhanced
          with Tassels, Belt, Resham, Zari, and Sequins Work. Available with a
          Semi-stitched V Neck and Half Sleeve Net Choli in Purple and a Net Dupatta
          in Sea Green. Choli Length: 14 (35 cm) to 15 (39 cm) inches. The
          Semi-stitched Lehenga Waist and Hips are customizable from 28 (71 cm) to
          36 (92 cm) and 36 (91 cm) to 44 (112 cm) inches respectively, and its
          Length is 42 (106.68 cm) inches. Do note:
        </p>
        </div>
       
      </div>

      <div className="column-second">
        <img src={sampel2} alt="Bridal Jewel1" />
      </div>
      </div>

      <footer class="about-footer-section">
  <div class="about-footer-logo">
    <h3>DK Bridal <br/>Collections</h3>
  </div>
  <div class="about-footer-links">
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
  <div class="about-footer-contact">
    <h4>Contact</h4>
    <p><box-icon type='solid' name='phone-call'></box-icon>+91 8798645325</p>
    <p><box-icon name='envelope' ></box-icon> dkbridal@gmail.com</p>
    <p><box-icon type='solid' name='sun'></box-icon>dkbridal.com</p>
  </div>

  <div class="about-footer-social">
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

export default AboutUs;
