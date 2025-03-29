import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Jewellery from './components/Jewellery';
import BridalGallery from './components/BridalGallery';
import MyOrder from './components/MyOrder';
import Shop from './components/Shop';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import './assests/css/style.css';
import SignUp from './components/sign';
import Login from './components/Login';
import ProductDetails from './components/productdetail';
import HaldiMehandhi from './components/Haldi&Mahandhi';
import Dailywear from './components/DailyWear';
import Sangeet from './components/Sangeet';
import Fullbridalset from './components/FullbridalSet';
import Bridal from './components/Bridal';
import Engagement from './components/Engagement';
import OtpPage from "./components/Otp";

import AddToCart from "./components/addtocart";
import CartPage from "./components/cartpage";
import HeartButton from './components/Heartbutton';
import Wishlist from './components/whislist';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-order" element={<MyOrder />} />
        {/* <Route path="/jewellery" element={<Jewellery />} /> */}
        <Route path="/bridal-gallery" element={<BridalGallery />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Product-details" element={<ProductDetails />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/Dailywear" element={<Dailywear />} />
        <Route path="/Sangeet" element={<Sangeet />} />
        <Route path="/Fullbridalset" element={<Fullbridalset />} />

        <Route path="/HaldiMehandhi" element={<HaldiMehandhi />} />
        <Route path="/bridal" element={<Bridal />} />
        
        <Route path="/otp-page" element={<OtpPage />} />

        <Route path="/" element={<AddToCart />} />
        <Route path="/cart" element={<CartPage />} />

      
        <Route path="/" element={<HeartButton />} />
        <Route path="/wishlist" element={<Wishlist />} />

      </Routes>
    </Router>
  );
}

export default App;
