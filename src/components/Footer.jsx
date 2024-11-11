import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-sections">
          <div className="footer-section">
            <h4>Address</h4>
            <p><i className="fas fa-map-marker-alt"></i> 123 Street, New York, USA</p>
            <p><i className="fas fa-phone-alt"></i> +012 345 67890</p>
            <p><i className="fas fa-envelope"></i> info@example.com</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Air Freight</a></li>
              <li><a href="#">Sea Freight</a></li>
              <li><a href="#">Road Freight</a></li>
              <li><a href="#">Logistic Solutions</a></li>
              <li><a href="#">Industry solutions</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Terms & Condition</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="newsletter">
              <input type="email" placeholder="Your email" />
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Your Site Name, All Rights Reserved.</p>
        <p>Designed By HTML Codex</p>
      </div>
    </footer>
  );
};

export default Footer;
