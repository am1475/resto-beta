import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const { cartItems, orderAddress, calculateTotal, setCartItems } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    console.log('Payment method selected:', paymentMethod);
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    // Clear the cart and navigate to the final page
    setCartItems([]);
    console.log('Cart cleared');
    alert('Order has been successfully placed');

    setTimeout(() => {
      console.log('Navigating to final page');
      navigate('/final');
    }, 500); // Adding a slight delay before navigation
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 mt-8">
      <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Shipping Address</h3>
        <p>{orderAddress.name}</p>
        <p>{orderAddress.address}, {orderAddress.locality}</p>
        <p>{orderAddress.city}, {orderAddress.state} - {orderAddress.pincode}</p>
        <p>{orderAddress.phone}</p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Items</h3>
        {cartItems.map((item, index) => (
          <div key={index} className="border-b py-2">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>
              <div>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <h3 className="text-xl font-semibold">Total: ${calculateTotal()}</h3>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            name="paymentMethod"
            value="Cash on Delivery"
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-2"
            required
          />
          <label>Cash on Delivery</label>
        </div>
        <button onClick={handleConfirmOrder} className="bg-green-500 text-white py-2 px-4 rounded">
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
