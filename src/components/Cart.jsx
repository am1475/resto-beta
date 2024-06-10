import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems, calculateTotal, addToCart, removeFromCart, message, showMessage } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 mt-8">
      <h2 className="text-2xl font-bold mb-6">Cart</h2>
      {showMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Success! </strong>
          <span className="block sm:inline">{message}</span>
        </div>
      )}
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="border-b py-2 flex justify-between items-center">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded mr-4" />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <div className="flex items-center mt-2">
                    <button onClick={() => removeFromCart(item.name)} className="bg-red-500 text-white px-2 py-1 rounded">-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button onClick={() => addToCart(item)} className="bg-green-500 text-white px-2 py-1 rounded">+</button>
                  </div>
                </div>
              </div>
              <div>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-end mt-6">
            <h3 className="text-xl font-semibold">Total: ${calculateTotal()}</h3>
          </div>
          <div className="flex justify-end mt-6">
            <button onClick={() => navigate('/address-form')} className="bg-blue-500 text-white py-2 px-4 rounded">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
