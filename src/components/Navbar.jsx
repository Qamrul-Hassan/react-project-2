import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div>
      <nav className="navbar">
        <a href="index.html" className="navbar-brand">
          <h2 className="brand-text">Logistica</h2>
        </a>
        <button className="navbar-toggler" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`navbar-collapse ${isMenuOpen ? 'open' : ''}`} id="navbarCollapse">
          <div className="navbar-nav">
            <a href="index.html" className="nav-item active">Home</a>
            <a href="about.html" className="nav-item">About</a>
            <a href="service.html" className="nav-item">Services</a>
            <div className="nav-item dropdown">
              <span className="dropdown-toggle" onClick={toggleDropdown}>
                Pages
              </span>
              <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                <a href="price.html" className="dropdown-item">Pricing Plan</a>
                <a href="feature.html" className="dropdown-item">Features</a>
                <a href="quote.html" className="dropdown-item">Free Quote</a>
                <a href="team.html" className="dropdown-item">Our Team</a>
                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                <a href="404.html" className="dropdown-item">404 Page</a>
              </div>
            </div>
            <a href="contact.html" className="nav-item">Contact</a>
          </div>
          <div className="contact-info">
            <i className="fa fa-headphones icon"></i> +012 345 6789
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
