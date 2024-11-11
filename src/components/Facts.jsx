import './facts.css';

const Facts = () => {
  return (
    <div className="facts-section">
      <div className="facts-container">
        <div className="facts-text">
          <h6 className="facts-subtitle">Some Facts</h6>
          <h1 className="facts-title">#1 Place To Manage All Of Your Shipments</h1>
          <p className="facts-description">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
          </p>
          <div className="contact-info">
            <i className="fa fa-headphones contact-icon"></i>
            <div className="contact-details">
              <h6>Call for any query!</h6>
              <h3 className="contact-number">+012 345 6789</h3>
            </div>
          </div>
        </div>
        <div className="facts-stats">
          <div className="stat-item bg-primary">
            <i className="fa fa-users stat-icon"></i>
            <h2 className="stat-number">1234</h2>
            <p className="stat-label">Happy Clients</p>
          </div>
          <div className="stat-item bg-secondary">
            <i className="fa fa-ship stat-icon"></i>
            <h2 className="stat-number">1234</h2>
            <p className="stat-label">Complete Shipments</p>
          </div>
          <div className="stat-item bg-success">
            <i className="fa fa-star stat-icon"></i>
            <h2 className="stat-number">1234</h2>
            <p className="stat-label">Customer Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;