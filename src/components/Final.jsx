import React, { useEffect, useRef, useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import './glitter.css'; // Import the glitter CSS file

const Final = () => {
  const { orderAddress } = useContext(CartContext);
  const [showCongrats, setShowCongrats] = useState(false); // State for showing congrats message
  const navigate = useNavigate();
  const mapRef = useRef(null);
  const googleMapsApiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your API key

  useEffect(() => {
    if (orderAddress && orderAddress.address) {
      setShowCongrats(true); // Show congrats message when order is placed
    }
  }, [orderAddress]);

  useEffect(() => {
    if (window.google && window.google.maps) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 18.6471, lng: 73.7587 }, // Ravet coordinates
        zoom: 14,
      });

      const userAddressCoords = { lat: 18.5204, lng: 73.8567 }; // Example user address coordinates

      new window.google.maps.Marker({
        position: { lat: 18.6471, lng: 73.7587 },
        map,
        title: 'Restaurant in Ravet',
      });

      new window.google.maps.Marker({
        position: userAddressCoords,
        map,
        title: 'User Address',
      });

      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(new window.google.maps.LatLng(18.6471, 73.7587));
      bounds.extend(new window.google.maps.LatLng(userAddressCoords.lat, userAddressCoords.lng));
      map.fitBounds(bounds);
    } else {
      console.error('Google Maps API not loaded');
    }
  }, []);

  useEffect(() => {
    if (showCongrats) {
      // Create glitter elements and add to DOM
      const glitterContainer = document.createElement('div');
      glitterContainer.className = 'glitter-container';
      document.body.appendChild(glitterContainer);

      for (let i = 0; i < 100; i++) {
        const glitter = document.createElement('div');
        glitter.className = 'glitter';
        glitter.style.left = `${Math.random() * 100}%`;
        glitter.style.animationDelay = `${Math.random()}s`;
        glitterContainer.appendChild(glitter);
      }

      // Remove glitter elements after animation
      setTimeout(() => {
        glitterContainer.remove();
        setShowCongrats(false);
      }, 2000);
    }
  }, [showCongrats]);

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 mt-8 relative">
      {showCongrats && <div className="congrats-message">Congratulations! Your order has been placed!</div>}
      <h2 className="text-2xl font-bold mb-6">Order Confirmation</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Shipping Address</h3>
        <p>{orderAddress.name}</p>
        <p>{orderAddress.address}, {orderAddress.locality}</p>
        <p>{orderAddress.city}, {orderAddress.state} - {orderAddress.pincode}</p>
        <p>{orderAddress.phone}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Order Map</h3>
        <div ref={mapRef} className="h-64 bg-gray-200"></div>
      </div>
      <div className="mt-6">
        <button onClick={() => navigate('/landing')} className="bg-green-500 text-white py-2 px-4 rounded">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Final;
