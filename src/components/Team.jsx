import React from 'react';
import TeamRe from './TeamRe';
import './Team.css';
import team1 from '../assets/image/team-1.jpg';
import team2 from '../assets/image/team-2.jpg';
import team3 from '../assets/image/team-3.jpg';
import team4 from '../assets/image/team-4.jpg';

const Team = () => {
  const teamMembers = [
    { image: team1, name: 'John Doe', designation: 'Engineer' },
    { image: team2, name: 'Jane Smith', designation: 'Project Manager' },
    { image: team3, name: 'Mark Wilson', designation: 'Architect' },
    { image: team4, name: 'Emily Clark', designation: 'Supervisor' },
  ];

  return (
    <div className="team-container">
        <h3 className="team-subheading">Our Team</h3>
      <h2 className="team-heading">Expert Team Members</h2>
      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <TeamRe 
            key={index} 
            image={member.image} 
            name={member.name} 
            designation={member.designation} 
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
