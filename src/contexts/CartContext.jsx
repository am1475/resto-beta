// src/contexts/CartContext.js
import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orderAddress, setOrderAddress] = useState({});
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
    displayMessage('Item successfully added to cart');
  };

  const displayMessage = (msg) => {
    setMessage(msg);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // Hide the message after 3 seconds
  };

  const removeFromCart = (name) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.name === name);
      if (existingItem.quantity === 1) {
        return prevItems.filter((cartItem) => cartItem.name !== name);
      } else {
        return prevItems.map((cartItem) =>
          cartItem.name === name
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        orderAddress,
        setOrderAddress,
        addToCart,
        removeFromCart,
        calculateTotal,
        message,
        showMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
