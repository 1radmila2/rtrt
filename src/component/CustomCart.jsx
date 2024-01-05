import React, { useState } from 'react';
import './Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: Math.max(1, newQuantity) } : item
    );
    setCartItems(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const addToCart = (selectedProduct) => {
    // Check if the product is already in the cart
    const existingItem = cartItems.find((item) => item.id === selectedProduct.id);

    if (existingItem) {
      // If the product is already in the cart, update the quantity
      updateQuantity(existingItem.id, existingItem.quantity + 1);
    } else {
      // If the product is not in the cart, add it
      setCartItems((prevCart) => [...prevCart, { ...selectedProduct, quantity: 1 }]);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
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
          {cartItems.map((item) => (
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
            </div>
            <button className="checkout-button" onClick={handleCheckout}>
              <span role="img" aria-label="Checkout">
                🛍️ Checkout
              </span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;

