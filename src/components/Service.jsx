import React from 'react';
import ServiceReuse from './ServiceReuse';
import './ServiceReuse.css';
import './Service.css'; 
import service1 from '../assets/image/service-1.jpg';
import service2 from '../assets/image/service-2.jpg';
import service3 from '../assets/image/service-3.jpg';
import service4 from '../assets/image/service-4.jpg';
import service5 from '../assets/image/service-5.jpg';
import service6 from '../assets/image/service-6.jpg';

const Service = () => {
  const serviceData = [
    {
      image: service1,
      title: 'Air Freight',
      description: 'Reliable air transport solutions.',
    },
    {
      image: service2,
      title: 'Ocean Freight',
      description: 'Efficient ocean transport services.',
    },
    {
      image: service3,
      title: 'Road Freight',
      description: 'Fast and secure road transport.',
    },
    {
      image: service4,
      title: 'Train Freight',
      description: 'Eco-friendly rail solutions.',
    },
    {
      image: service5,
      title: 'Customs Clearance',
      description: 'Smooth customs processing.',
    },
    {
      image: service6,
      title: 'Warehouse Solutions',
      description: 'Secure storage services.',
    },
  ];

  return (
    <div className="service-section">
     
      <div className="service-heading-section">
        <p className="service-heading-small">OUR SERVICES</p>
        <h2 className="service-heading-main">Explore Our Services</h2>
      </div>

      
      <div className="service-container">
        {serviceData.map((service, index) => (
          <ServiceReuse
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
