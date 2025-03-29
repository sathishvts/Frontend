import React, { useState } from "react"; // Import useState properly

function Otp() {
  const [formData, setFormData] = useState({
    phone: "",
    otp: "",
  }); // Ensure useState is properly used

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }; // Define the handleChange function for input updates

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submitted Data:", formData); // Handle form submission
  };

  return (
    <div>
      <h1 className="otp-verification">OTP Verification</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Phone number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label>OTP</label>
          <input
            type="text"
            name="otp"
            value={formData.otp}
            onChange={handleChange}
            placeholder="Enter your OTP"
          />
        </div>
        <button className="verify-otp" type="submit">Verify OTP</button>
      </form>
    </div>
  );
}

export default Otp;
