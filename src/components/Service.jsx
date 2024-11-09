
import React from 'react';
import ServiceReuse from './ServiceReuse';
import './ServiceRe.css';
import '../assets/image/service-1.jpg';
import '../assets/image/service-2.jpg';
import '../assets/image/service-3.jpg';
import '../assets/image/service-4.jpg';
import '../assets/image/service-5.jpg';
import '../assets/image/service-6.jpg';

const Service = () => {
  const serviceData = [
    {
      image: '../assets/image/service-1.jpg',
      title: 'Air Freight',
      description: 'Reliable air transport solutions.',
    },
    {
      image: '../assets/image/service-2.jpg',
      title: 'Ocean Freight',
      description: 'Efficient ocean transport services.',
    },
    {
      image: '../assets/image/service-3.jpg',
      title: 'Road Freight',
      description: 'Fast and secure road transport.',
    },
    {
      image: '../assets/image/service-4.jpg',
      title: 'Train Freight',
      description: 'Eco-friendly rail solutions.',
    },
    {
      image: '../assets/image/service-5.jpg',
      title: 'Customs Clearance',
      description: 'Smooth customs processing.',
    },
    {
      image: '../assets/image/service-6.jpg',
      title: 'Warehouse Solutions',
      description: 'Secure storage services.',
    },
  ];

  return (
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
  );
};

export default Service;
