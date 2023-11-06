import React from "react";
import "../style/ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-info-item">
          <span class="material-symbols-outlined">location_on</span>
          <p>123 Coffee Street, City</p>
        </div>
        <div className="contact-info-item">
          <span class="material-symbols-outlined">call</span>
          <p>+1 (123) 456-7890</p>
        </div>
        <div className="contact-info-item">
          <span class="material-symbols-outlined">mail</span>
          <p>info@yourcoffeeshop.com</p>
        </div>
      </div>
      <div className="social-media">
        <a
          href="https://www.facebook.com/yourcoffeeshop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.twitter.com/yourcoffeeshop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/yourcoffeeshop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactSection;
