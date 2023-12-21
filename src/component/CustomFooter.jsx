
import React from 'react';
import './footer.css';
import logo from './logo.png';
import Facebook from './facebook.png';
import insta from './insta.png';
import twitter from './twitter.png';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
          <img src={logo} alt="Online Pharmacy Logo" />
          </div>
          <div className="footer-address">
            <p>123 Main Street</p>
            <p>Cityville, Country</p>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li><a href="/medicines">Medicines</a></li>
            <li><a href="/vitamins">Vitamins</a></li>
            <li><a href="/personal-care">Personal Care</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Online Pharmacy. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;
