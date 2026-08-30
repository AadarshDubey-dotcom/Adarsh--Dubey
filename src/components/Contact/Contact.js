import React, { useState } from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      {/* Heading */}
      <h1>Let's Connect</h1>

      {/* damit*/}
        <div className="damn-it">
          <span className="default-text">damnitadarsh</span>
          <span className="hover-text">damn it, adarsh!!</span>
        </div>

      <div className="contact-links">
      {/* Connect */}
      <div className="contact-section">
        <h3>Connect</h3>
        <a href="https://www.linkedin.com/in/adarsh-dubey-12qwas/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/AadarshDubey-dotcom" target="_blank" rel="noopener noreferrer">
         GitHub
        </a>
        <a href="https://www.instagram.com/aabhishe.kt/" target="_blank" rel="noopener noreferrer">
           Instagram
        </a>
       </div>

       {/* Get in touch */}
       <div className="contact-section">
          <h3>Get in touch</h3>
           <a href="mailto:dubeyadarsh74396@gmail.com">
             dubeyadarsh74396@gmail.com
           </a>
       </div>

       {/* Location */}
       <div className="contact-section">
        <h3>Location</h3>
        <span>Indore, MP, India</span>
       </div>

        {/* Community */}
        <div className="contact-section">
         <h3>Community</h3>
         <span>Open for side-projects & collaborations</span>
        </div>
        </div>
        </div>
   )
}

export default Contact;
