import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_plrijyp';
    const templateID = 'template_9kf1hz9';
    const publicKey = 'vO4mDMGveBvXbKFsH';

  const templateParams = {
  from_name: formData.name,
  email_id: formData.email,
  message: formData.message,
};


    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-25">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-4">Contact Us</h1>
        <p className="text-center text-gray-600 mb-10">
          We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-col justify-center bg-blue-600 text-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-2">📧 Email: support@smarttech.com</p>
            <p className="mb-2">📞 Phone: +123 456 7890</p>
            <p className="mb-2">📍 Address: 123 Tech Street, Cityville</p>
            <p className="text-sm mt-6 text-blue-100">
              We respond to all inquiries within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
