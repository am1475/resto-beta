import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const AddressForm = () => {
  const [address, setAddress] = useState({
    name: '',
    phone: '',
    pincode: '',
    locality: '',
    address: '',
    city: '',
    state: '',
    landmark: '',
    alternatePhone: '',
    addressType: 'Home',
  });

  const navigate = useNavigate();
  const { setOrderAddress } = useContext(CartContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderAddress(address);
    navigate('/order-summary');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 mt-8">
      <h2 className="text-2xl font-bold mb-6">Add a New Address</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Name" value={address.name} onChange={handleChange} className="border p-2 rounded" required />
          <input type="text" name="phone" placeholder="10-digit mobile number" value={address.phone} onChange={handleChange} className="border p-2 rounded" required />
          <input type="text" name="pincode" placeholder="Pincode" value={address.pincode} onChange={handleChange} className="border p-2 rounded" required />
          <input type="text" name="locality" placeholder="Locality" value={address.locality} onChange={handleChange} className="border p-2 rounded" required />
          <input type="text" name="address" placeholder="Address (Area and Street)" value={address.address} onChange={handleChange} className="border p-2 rounded" required />
          <input type="text" name="city" placeholder="City/District/Town" value={address.city} onChange={handleChange} className="border p-2 rounded" required />
          <input type="text" name="state" placeholder="State" value={address.state} onChange={handleChange} className="border p-2 rounded" required />
          <input type="text" name="landmark" placeholder="Landmark (Optional)" value={address.landmark} onChange={handleChange} className="border p-2 rounded" />
          <input type="text" name="alternatePhone" placeholder="Alternate Phone (Optional)" value={address.alternatePhone} onChange={handleChange} className="border p-2 rounded" />
          <div className="flex items-center">
            <input type="radio" name="addressType" value="Home" checked={address.addressType === 'Home'} onChange={handleChange} className="mr-2" />
            <label>Home</label>
            <input type="radio" name="addressType" value="Work" checked={address.addressType === 'Work'} onChange={handleChange} className="ml-4 mr-2" />
            <label>Work</label>
          </div>
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Save</button>
      </form>
    </div>
  );
};

export default AddressForm;
