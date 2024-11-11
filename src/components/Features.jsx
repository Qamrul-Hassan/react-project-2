import React from 'react';
import './Features.css'; 
import featureImage from '../assets/image/feature.jpg';

const Feature = () => {
  return (
    <div className="feature-container">
      <div className="feature-content">
        <div className="feature-text">
          <h6 className="text-secondary">Our Features</h6>
          <h1>We Are Trusted Logistics Company Since 1990</h1>
          <div className="feature-item">
            <i className="fa fa-globe icon"></i>
            <div className="feature-info">
              <h5>Worldwide Service</h5>
              <p>Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
            </div>
          </div>
          <div className="feature-item">
            <i className="fa fa-shipping-fast icon"></i>
            <div className="feature-info">
              <h5>On Time Delivery</h5>
              <p>Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
            </div>
          </div>
          <div className="feature-item">
            <i className="fa fa-headphones icon"></i>
            <div className="feature-info">
              <h5>24/7 Telephone Support</h5>
              <p>Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
            </div>
          </div>
        </div>
        <div className="feature-image">
          <img src={featureImage} alt="Feature" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
