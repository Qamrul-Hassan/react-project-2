
import '../assets/image/about.jpg'; 
import './about.css'; 


const Abot = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="image-container"></div>
        <div className="about-text">
          <h6>About Us</h6>
          <h1>Quick Transport and Logistics Solutions</h1>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
          </p>
          <div className="features">
            <div className="feature">
              <i className="fa fa-globe fa-3x text-primary mb-3"></i>
              <h5>Global Coverage</h5>
              <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
            </div>
            <div className="feature">
              <i className="fa fa-shipping-fast fa-3x text-primary mb-3"></i>
              <h5>On Time Delivery</h5>
              <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
            </div>
          </div>
          <a href="#" className="btn btn-primary explore-more-btn">
            Explore More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Abot;
