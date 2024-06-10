import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Features'; // This is the Features component
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Landing from './components/Landing';
import Cart from './components/Cart';
import AddressForm from './components/AddressForm';
import OrderSummary from './components/OrderSummary';
import { CartProvider } from './contexts/CartContext';
import NorthIndian from './components/NorthIndian';
import Biryani from './components/Biryani';
import Pizza from './components/Pizza';
import Kebab from './components/Kebab';
import Rolls from './components/Rolls';
import Paratha from './components/Paratha';
import Chinese from './components/Chinese';
import Final from './components/Final'; // Import the Final component
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Menu />
                <Contact />
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/address-form" element={<AddressForm />} />
            <Route path="/order-summary" element={<OrderSummary />} />
            <Route path="/north-indian" element={<NorthIndian />} />
            <Route path="/biryani" element={<Biryani />} />
            <Route path="/pizza" element={<Pizza />} />
            <Route path="/kebab" element={<Kebab />} />
            <Route path="/rolls" element={<Rolls />} />
            <Route path="/paratha" element={<Paratha />} />
            <Route path="/chinese" element={<Chinese />} />
            <Route path="/final" element={<Final />} /> {/* Add the final route */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
