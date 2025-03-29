import React, { useState } from 'react';
import google from '../images/google.png';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    otp: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const navigate = useNavigate(); // Move useNavigate to the main component

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log(formData);
  };
  const handleOtpClick = () => {
    navigate("/otp-page"); // Navigate to the OTP page
  };

  // const handleGetOTP = () => {
  //   // Handle OTP generation and sending logic
  //   console.log('OTP sent to', formData.phone);
  // };

  return (
    <div>
      <h1 className='sign-up'>Login</h1>
      <form onSubmit={handleSubmit}>
        
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
        <div className='get-otp'>
          <button type="button" className="otp" onClick={handleOtpClick}>
            Get OTP
          </button>
        </div>
        <div className="or-container">
          <div className="line double-line"></div>
          <p className="or-text">OR</p>
          <div className="line single-line"></div>
        </div>

        <div >
        <p className='login'>Login Using</p>
        </div>

        <div className='google'>
          
          <input 
            type="text"
            name="phone"
           
            placeholder="Google"
          />
        </div>
        <div className="login-container">
          
            <img
              src={google}
  
              alt="Google Icon"
              className="googles"
            />
        </div>
            
      </form>
    

    </div>
  );
};

export default Login;