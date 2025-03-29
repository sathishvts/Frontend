import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'boxicons';

function Cart() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = React.useState(location.state?.cartItems || []);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );

  const handleAdd = (productId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleSubtract = (productId) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const handleDelete = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  return (
    <div className='cart-container'>
      <h1>Your Cart</h1>

      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className='h3'>
                <h3>{item.name}</h3>
              </div>
              <div className='cart-actions'>
                <div className="plus-minus">
                  <button onClick={() => handleSubtract(item.id)}>-</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => handleAdd(item.id)}>+</button>
                  <box-icon name="trash" onClick={() => handleDelete(item.id)}></box-icon>
                </div>

                <div className='full-bridal-container'>
                  <div className='gold'>
                    <p>Full Bridal Set Gold tone Set Jewellery <br /><br />Classic Elegance Bridal Jewllery Set</p>
                  </div>
                  <div className='full-bridals'>
                    <div className='day-one'>
                      <p>Rs.1009/Day</p>
                      <button className='hello'>Rental</button>
                    </div>
                    <div className='day-two'>
                      <p>Rs.1009/Day</p>
                      <button className='hellos'>BUY Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <h3>Total: Rs. {totalPrice}</h3>
          </div>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
      <div className='back-to-shop'>
        <button onClick={() => navigate('/shop')}>Back to Shop</button>
      </div>
    </div>
  );
}

export default Cart;