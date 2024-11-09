
import PropTypes from 'prop-types';

import "./ServiceCard.css";

function ServiceCard({ title, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href="#" className="card-link"><span>➜</span></a>
      </div>
    </div>
  );
}

// Prop validation
ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };
  
export default ServiceCard;
