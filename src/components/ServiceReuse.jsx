import React from 'react';
import PropTypes from 'prop-types';
import './ServiceReuse.css';

const ServiceReuse = (props) => {
  return (
    <div className="service-card">
      <img src={props.image} alt={props.heading} className="service-image" />
      <div className="service-content">
        <h4 className="service-heading">{props.heading}</h4>
        <p className="service-description">{props.description}</p>
        <button className="service-button">
          <span className="service-button-icon">&rarr;</span> 
        </button>
      </div>
    </div>
  );
};

ServiceReuse.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceReuse;
