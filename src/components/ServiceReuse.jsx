import React from 'react';
import PropTypes from 'prop-types';
import './Service.css';



ServiceReuse.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


const ServiceReuse = ({ image, title, description }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-image" />
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <button className="service-button">Learn More</button>
    </div>
  );
};


export default ServiceReuse;