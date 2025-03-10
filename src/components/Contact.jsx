import React from "react";
import "../styles/Contact.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">CONTACT</h2>
      <div className="contact-content">
        {/* Left Side - Contact Details */}
        <div className="contact-info">
          <h3>Drop Me a Message</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>00 0000 00 000</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>xyxyxy@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>xy xyx xyx xyx x yx x x</span>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <input type="text" placeholder="Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <textarea
            placeholder="Message"
            className="input-field message-box"
          ></textarea>
          <button className="send-button">Send</button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="contact-footer">
        <div className="social-icons">
          <FaFacebookF className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaLinkedinIn className="social-icon" />
        </div>
        <p>2025 - Your Portfolio, All rights reserved</p>
      </div>
    </div>
  );
};

export default Contact;
