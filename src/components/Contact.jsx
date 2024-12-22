import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form Data Submitted:', formData);

    // Reset the form data
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src="laugh.jpg" alt="Contact" />
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name*"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name*"
            required 
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address*"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number*"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message*"
            required
          ></textarea>
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default ContactForm;
