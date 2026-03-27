import React, { useState } from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Contact.css'
import ScrollFloat from '../ScrollFloat/ScrollFloat';

const Contact = () => {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData); // yaha tum API call kar sakte ho
    setStatus("Message sent successfully!");
  };

  return (
    <div id="contact" className="contact-container">
      {/* Heading */}
      <ScrollFloat>Let's Connect</ScrollFloat>
      <p className="contact-tagline">
        Feel free to reach out for collaborations or any queries.
      </p>

      {/* Contact Form */}
      <div className="contact-form-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-left">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <input 
              type="text" 
              name="subject" 
              placeholder="Subject" 
              value={formData.subject}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="contact-form-right">
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows="8" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
          {status && <p className="success-msg">{status}</p>}
        </form>
      </div>

      {/* Social Links */}
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/adarsh-dubey-12qwas/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/AadarshDubey-dotcom" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/aabhishe.kt/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="mailto:dubeyadarsh74396@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      {/* Footer Info */}
      <p className="contact-footer">
        📍 India • ⚡ Usually responds within 24 hours
      </p>
    </div>
  )
}

export default Contact;
