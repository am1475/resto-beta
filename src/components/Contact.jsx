import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_nfxx7nc', // Replace with your EmailJS service ID
      'template_hpuzonn', // Replace with your EmailJS template ID
      form,
      'r6ocoKLtKYrV5SFfP' // Replace with your EmailJS public key (User ID)
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    }).catch((err) => {
      console.log('FAILED...', err);
      alert('Failed to send the message, please try again later.');
    });
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            We’d love to hear from you. Reach out to us for reservations or any inquiries.
          </p>
        </div>
        <div className="mt-10 flex flex-col lg:flex-row lg:space-x-8">
          <div className="lg:w-1/2 bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900">Get in Touch</h3>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 p-3 text-lg"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 p-3 text-lg"
                    required
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 p-3 text-lg"
                  required
                ></textarea>
              </div>
              <div className="mt-6">
                <button type="submit" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
            <p className="mt-4 text-gray-600">Ravet, Pune, India</p>
            <p className="mt-2 text-gray-600">Phone: (123) 456-7890</p>
            <div className="mt-6">
              <iframe
                className="w-full h-64 rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0130303646887!2d73.74180351420005!3d18.655636869272987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8834c5f729b%3A0x6e38960e8e4e6a9d!2sRavet%2C%20Pimpri-Chinchwad%2C%20Maharashtra%2041138%2C%20India!5e0!3m2!1sen!2sus!4v1622056235288!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
