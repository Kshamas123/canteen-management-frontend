import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ({ cart, total, addToCart, removeFromCart }) => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/order', { state: { cart, total } });
  };

  return (
    <div className="cart">
      <h2>Your Food Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div>{item.name} - ₹{item.price} x {item.quantity}</div>
            <div>
              <button className="btn btn-secondary btn-sm" onClick={() => removeFromCart(item)}>-</button>
              <button className="btn btn-secondary btn-sm" onClick={() => addToCart(item)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ₹{total}</h3>
      <button
        style={{
          backgroundColor: "#ffc107",
          borderRadius: 5,
        }}
        onClick={handleOrderNow}
      >
        Order Now
      </button>

      <style>
        {`
          .cart, .menu {
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 5px;
            background-color: #f9f9f9;
            margin-top: 20px;
          }
          .cart-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #ddd;
            padding: 10px 0;
          }
          .cart-item:last-child {
            border-bottom: none;
          }
          .btn-sm {
            margin: 0 5px;
          }
        `}
      </style>
    </div>
  );
};

export default Cart;
