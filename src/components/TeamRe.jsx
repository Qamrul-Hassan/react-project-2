import React from 'react';
import PropTypes from 'prop-types';
import './TeamRe.css';

const TeamRe = ({ image, name, designation }) => {
  return (
    <div className="team-card">
      <img src={image} alt={name} className="team-image" />
      <div className="team-content">
        <h4 className="team-name">{name}</h4>
        <p className="team-designation">{designation}</p>
      </div>
    </div>
  );
};

TeamRe.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
};

export default TeamRe;
