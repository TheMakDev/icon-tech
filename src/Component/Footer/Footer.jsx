import React from 'react';
import { assets } from '../../assets/assets';
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-grid">
        
        
        <div>
          <img className="footer-logo" src={assets.logo} alt="Logo" />
          <p className="footer-text">
          Welcome to a world of endless possibilities, where we lead the charge in audio-visual excellence in Nigeria and the African landscape. We’re not only about high-end gadgets, but all about crafting immersive experiences that seamlessly blend technology into your life.
          </p>
        </div>

        
        <div>
          <p className="footer-title">COMPANY</p>
          <ul className="footer-list">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="footer-title">GET IN TOUCH</p>
          <ul className="footer-list">
            <li>+234(0)-817-288-8496</li>
            <li>info@icontechconsulting.com</li>
          </ul>
        </div>

      </div>

      {/* Copyright Section */}
      <hr className="footer-divider" />
      <p className="footer-copyright">
        Copyright 2025 @ PETERPAN. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
