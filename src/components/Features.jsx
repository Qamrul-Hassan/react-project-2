import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer bg-dark text-light pt-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Address</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        <div className="social-icons pt-2">
                            <a href="#" className="btn-social"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="btn-social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="btn-social"><i className="fab fa-youtube"></i></a>
                            <a href="#" className="btn-social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Services</h4>
                        <a href="#" className="footer-link">Air Freight</a>
                        <a href="#" className="footer-link">Sea Freight</a>
                        <a href="#" className="footer-link">Road Freight</a>
                        <a href="#" className="footer-link">Logistic Solutions</a>
                        <a href="#" className="footer-link">Industry Solutions</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Quick Links</h4>
                        <a href="#" className="footer-link">About Us</a>
                        <a href="#" className="footer-link">Contact Us</a>
                        <a href="#" className="footer-link">Our Services</a>
                        <a href="#" className="footer-link">Terms & Conditions</a>
                        <a href="#" className="footer-link">Support</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Newsletter</h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="newsletter">
                            <input type="text" className="form-control" placeholder="Your email" />
                            <button type="button" className="btn-signup">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center py-3">
                <p>&copy; <a href="#">Your Site Name</a>, All Rights Reserved.</p>
                <p>Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
            </div>
        </div>
    );
};

export default Footer;
