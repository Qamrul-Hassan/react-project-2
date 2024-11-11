import React from 'react';
import PropTypes from 'prop-types';
import './PriceCard.css';

const PriceCard = ({ title, price, features }) => {
  return (
    <div className="price-card">
      <div className="price-header">
        <h5 className="price-title">{title}</h5>
        <h1 className="price-amount">
          <small className="price-currency">$</small>{price}<small className="price-per-month">/ Month</small>
        </h1>
      </div>
      <div className="price-features">
        {features.map((feature, index) => (
          <p key={index} className="price-feature">
            <i className="fa fa-check text-success me-3"></i>{feature}
          </p>
        ))}
      </div>
      <div className="price-button-container">
        <a className="btn-slide" href="#"><i className="fa fa-arrow-right"></i><span>Order Now</span></a>
      </div>
    </div>
  );
};

PriceCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PriceCard;
