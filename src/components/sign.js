import React, { useState } from "react";
// import google from "../images/google.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    otp: "",
  });

  const navigate = useNavigate(); // Move useNavigate to the main component

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission here
  };

  const handleOtpClick = () => {
    navigate("/otp-page"); // Navigate to the OTP page
  };

  return (
    <div className="sign-form">
      <h1 className="sign-up">Sign up</h1>
      <form  className="form-table"onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
          />
        </div>
        <div>
          <label>Email id</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email id"
          />
        </div>
        <div>
          <label>Phone number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your Phone number"
          />
        </div>
        <div className="otps">
          <button type="button" className="otp" onClick={handleOtpClick}>
            Get OTP
          </button>
        </div>
        <div className="or-container">
          <div className="line double-line"></div>
          <p className="or-text">OR</p>
          <div className="line single-line"></div>
        </div>
        <div>
          <p className="login">Login Using</p>
        </div>

        
        <p className="login-option">Already have an Account? Login</p>
      </form>
    </div>
  );
};

export default SignUp;
