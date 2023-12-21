// Cart.js
import React, { useState } from 'react';
import './Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 100.00, quantity: 2 },
    { id: 2, name: 'Product 2', price: 150.00, quantity: 1 },
    // Добавьте свои товары в корзину
  ]);

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: Math.max(1, newQuantity) } : item
    );
    setCartItems(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    // Добавьте свой код для обработки оформления заказа
    alert('Checkout functionality is not implemented yet!');
  };

  return (
    <section className="cart">
      <h2>
        <span role="img" aria-label="Shopping Cart">
          🛒
        </span>{' '}
        Shopping Cart
      </h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <p>{item.name}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
              </div>
              <div className="item-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <div className="cart-details">
              <p>Total Items: {calculateTotalItems()}</p>
              <p>Subtotal: ${calculateTotal()}</p>
              <p>Tax (50%): ${(calculateTotal() * 0.50).toFixed(2)}</p>
            </div>
            <div className="promo-code">
              <input type="text" placeholder="Enter promo code" />
              <button>Apply</button>
            </div>
            <p className="total">Total: ${(calculateTotal() * 1.50).toFixed(2)}</p>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>
            <span role="img" aria-label="Checkout">
              🛍️ Checkout
            </span>
          </button>
        </div>
      )}
    </section>
  );
}

export default Cart;
