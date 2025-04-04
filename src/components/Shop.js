import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jewel1 from '../images/ji1.jpg';
import jewel2 from '../images/ji2.jpg';
import jewel3 from '../images/ji3.jpg';

const products = [
  { id: 1, name: "Bridal Jewellery Set", price: 1099, image: jewel1 },
  { id: 2, name: "Bridal Jewellery Set", price: 1099, image: jewel2 },
  { id: 3, name: "Bridal Jewellery Set", price: 1099, image: jewel3 },
  { id: 4, name: "Bridal Jewellery Set", price: 1099, image: jewel1 },
  { id: 5, name: "Bridal Jewellery Set", price: 1099, image: jewel2 },
  { id: 6, name: "Bridal Jewellery Set", price: 1099, image: jewel3 }
];

function Shop() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleGoToCart = () => {
    navigate('/cart', { state: { cartItems } });
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      return exists
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product];
    });
  };

  const goToWishlist = () => {
    navigate('/wishlist', { state: { wishlist } });
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleBuyNow = (product) => {
    navigate('/product-details', { state: { product } });
  };


  return (
    <div className="shop-container">
      <h1 className="ShopUs">ShopUs</h1>

      
      <div className="wishlist-header">
        <button onClick={goToWishlist} className="wishlist-btn">
          <box-icon name="heart" type="solid" color={wishlist.length ? 'red' : 'gray'}></box-icon>
          {wishlist.length > 0 && <span>{wishlist.length}</span>}
        </button>
      </div>

      
      <div className="grid-container">
        {products.map((product) => {
          const inWishlist = wishlist.some((item) => item.id === product.id);
          return (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <button
                className="wishlist-heart"
                onClick={() => toggleWishlist(product)}
              >
                <box-icon
                  name="heart"
                  type={inWishlist ? 'solid' : 'regular'}
                  color={inWishlist ? 'red' : 'gray'}
                ></box-icon>
              </button>
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                <box-icon name="cart-add"></box-icon>
              </button>
              <p>{product.name}</p>
              <h3>Rs. {product.price} / day</h3>
              <button className="rental-btn">Rental</button>

              <button className='yellow' onClick={() => handleBuyNow(product)}>Buy Now</button>

            </div>
          );
        })}
      </div>

      
      {totalItems > 0 && (
        <button className="view-cart-btn" onClick={handleGoToCart}>
          🛒 View Cart ({totalItems})
        </button>
      )}
    </div>
  );
}

export default Shop;