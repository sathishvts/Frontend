

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "boxicons";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const searchOptions = [
    { term: "bridal", display: "Bridal Jewellery", path: "/bridal" },
    { term: "engagement", display: "Engagement Jewellery", path: "/Engagement" },
    { term: "haldi", display: "Haldi Jewellery", path: "/HaldiMehandhi" },
    { term: "dailywear", display: "Daily Wear Jewellery", path: "/Dailywear" },
    { term: "sangeet", display: "Sangeet Jewellery", path: "/Sangeet" },
    { term: "full bridal set", display: "Full Bridal Set", path: "/Fullbridalset" },
    { term: "jewellery", display: "All Jewellery", path: "/jewellery" },
    { term: "gallery", display: "Bridal Gallery", path: "/bridal-gallery" },
    { term: "shop", display: "Shop", path: "/shop" },
    { term: "about", display: "About Us", path: "/about-us" },
    { term: "contact", display: "Contact Us", path: "/contact-us" },
    { term: "order", display: "My Orders", path: "/my-order" },
    { term: "home", display: "Home", path: "/" },
  ];

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
      return;
    }

    const matchedOptions = searchOptions.filter(option =>
      option.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      option.display.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSuggestions(matchedOptions);
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    
    if (suggestions.length > 0) {
      navigate(suggestions[0].path);
    }
    setSearchTerm("");
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (path) => {
    navigate(path);
    setSearchTerm("");
    setShowSuggestions(false);
  };

  return (
    <nav>
      <div className="Bridal">
        <h1>
          Dk Bridal <br />
          Collection
        </h1>

        <div className="search-container" style={{position: 'relative'}}>
          <box-icon name="search" className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search here..."
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          {showSuggestions && suggestions.length > 0 && (
            <div className="search-suggestions" style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '4px',
              zIndex: 100,
              maxHeight: '200px',
              overflowY: 'auto'
            }}>
              {suggestions.map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: '8px 10px',
                    cursor: 'pointer',
                    borderBottom: '1px solid #eee'
                  }}
                  onClick={() => handleSuggestionClick(item.path)}
                  onMouseDown={(e) => e.preventDefault()} // Prevent input blur
                >
                  {item.display}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="search-container">
          <box-icon name="camera" className="search-icon" />
          <input
            type="text"
            className="search-inputs"
            placeholder="Virtual Try On"
          />
        </div>

        <p>
          Call Or Whatsapp
          <br />
          +63445 88099
        </p>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="list-container">
            <Link to="/jewellery">Jewellery</Link>
            <ul className="unoder">
              {searchOptions
                .filter(option => 
                  ["bridal", "engagement", "haldi", "mehandhi", "dailywear", "sangeet", "full bridal set"].includes(option.term)
                )
                .map((item, index) => (
                  <li 
                    key={index} 
                    onClick={() => navigate(item.path)} 
                    style={{ cursor: "pointer" }}
                  >
                    {item.display}
                  </li>
                ))}
            </ul>
          </li>
          <li>
            <Link to="/bridal-gallery">Bridal Gallery</Link>
          </li>
          <li>
            <Link to="/my-order">My Order</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>

        <div className="sign-log">
          <button
            className="button-sign"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </button>
          <button
            className="button-log"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;