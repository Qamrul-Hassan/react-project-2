import React from 'react';
import PropTypes from 'prop-types';
import './Testimonial.css';

const Testimonial = ({ image, name, text, profession }) => {
  return (
    <div className="testimonial-item text-center">
      <img className="img-fluid bg-light p-2 mx-auto mb-3" src={image} alt={name} style={{ width: '90px', height: '90px' }} />
      <div className="testimonial-text text-center p-4">
        <p>{text}</p>
        <h5 className="mb-1">{name}</h5>
        <span className="fst-italic">{profession}</span>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
};

export default Testimonial;
