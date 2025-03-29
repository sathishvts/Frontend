import React, { useState } from "react";
import sampel2 from '../images/sampel 2.jpg';


const OrderConfirmation = () => {
  const [orderStatus, setOrderStatus] = useState("Your Order was Placed");

  const handleTrackOrder = () => {
    setOrderStatus( "Your Order is being prepared for shipping!");
  };

  return (
    <div className="myoder-container">
      <h1>My Order</h1>
      <div className="myoder-img">
        <img
          src={sampel2}
          alt="Jewellery Set"
        />
        <div className="full-bridal">
          <div className="set-jewellery">
          <h3>Full Bridal Set Gold tone set jewellery</h3>
          </div>
          <div className="price">
          <p>Rs. 5000</p>
          <div className="oder-status">
          <p >{orderStatus}</p>
          </div>
          </div>
          <button className="track"onClick={handleTrackOrder}>Track my order</button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
