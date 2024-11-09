

import ServiceCard from "./ServiceCard";

function Services() {
  const services = [
    {
      title: "Air Freight",
      description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
      image: "../assets/image/air-freight.jpg"
    },
    {
      title: "Ocean Freight",
      description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
      image: "../assets/image/ocean-freight.jpg"
    },
    {
      title: "Road Freight",
      description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
      image: "../assets/image/road-freight.jpg"
    },
    {
      title: "Train Freight",
      description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
      image: "../assets/image/train-freight.jpg"
    },
    {
      title: "Customs Clearance",
      description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
      image: "../assets/image/customs-clearance.jpg"
    },
    {
      title: "Warehouse Solutions",
      description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
      image: "../assets/image/warehouse-solutions.jpg"
    }
  ];

  return (
    <section className="services-section">
      <h3 className="section-title">OUR SERVICES</h3>
      <h2 className="section-subtitle">Explore Our Services</h2>

      <div className="card-container">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
