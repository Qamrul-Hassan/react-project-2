import React from 'react';
import PriceCard from './PriceCard';
import './PriceCardRe.css';

const PriceCardRe = () => {
  const plans = [
    {
      title: 'Basic Plan',
      price: 49.00,
      features: [
        'HTML5 & CSS3',
        'Bootstrap v5',
        'FontAwesome Icons',
        'Responsive Layout',
        'Cross-browser Support'
      ]
    },
    {
      title: 'Standard Plan',
      price: 99.00,
      features: [
        'HTML5 & CSS3',
        'Bootstrap v5',
        'FontAwesome Icons',
        'Responsive Layout',
        'Cross-browser Support'
      ]
    },
    {
      title: 'Advanced Plan',
      price: 149.00,
      features: [
        'HTML5 & CSS3',
        'Bootstrap v5',
        'FontAwesome Icons',
        'Responsive Layout',
        'Cross-browser Support'
      ]
    }
  ];

  return (
    <div className="price-card-container-outer">
      <div className="text-center">
        <h6 className="text-secondary text-uppercase">Pricing Plan</h6>
        <h1 className="mb-5">Perfect Pricing Plan</h1>
      </div>
      <div className="price-card-container">
        {plans.map((plan, index) => (
          <PriceCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default PriceCardRe;
