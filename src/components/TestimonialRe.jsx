import React from 'react';
import Testimonial from './Testimonial';
import './TestimonialRe.css';
import testimonial1 from '../assets/image/testimonial-1.jpg';
import testimonial2 from '../assets/image/testimonial-2.jpg';
import testimonial3 from '../assets/image/testimonial-3.jpg';

const testimonials = [
  {
    image: testimonial1,
    text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
    name: 'Client Name',
    profession: 'Profession',
  },
  {
    image: testimonial2,
    text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
    name: 'Client Name',
    profession: 'Profession',
  },
  {
    image: testimonial3,
    text: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
    name: 'Client Name',
    profession: 'Profession',
  },
];

const TestimonialRe = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="section-title text-center">
          <h1 className="display-5 mb-5">Testimonial</h1>
          <h2 className="mb-5">Our Clients Say!</h2>
        </div>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-4">
              <Testimonial
                image={testimonial.image}
                text={testimonial.text}
                name={testimonial.name}
                profession={testimonial.profession}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialRe;
