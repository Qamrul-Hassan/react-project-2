import React from 'react';
import './Quote.css';

function Quote() {
    return (
        <div className="quote-container">
            <div className="quote-content">
                <div className="quote-left">
                    <h6 className="quote-subtitle">Get A Quote</h6>
                    <h1 className="quote-title">Request A Free Quote!</h1>
                    <p className="quote-text">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
                        Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet
                    </p>
                    <div className="quote-contact">
                        <i className="fa fa-headphones quote-icon"></i>
                        <div className="quote-contact-info">
                            <h6>Call for any query!</h6>
                            <h3 className="quote-phone">+012 345 6789</h3>
                        </div>
                    </div>
                </div>
                <div className="quote-right">
                    <div className="quote-form-container">
                        <form>
                            <div className="form-row">
                                <input type="text" className="form-control" placeholder="Your Name" />
                                <input type="email" className="form-control" placeholder="Your Email" />
                            </div>
                            <div className="form-row">
                                <input type="text" className="form-control" placeholder="Your Mobile" />
                                <select className="form-control">
                                    <option>Select A Freight</option>
                                    <option value="1">Freight 1</option>
                                    <option value="2">Freight 2</option>
                                    <option value="3">Freight 3</option>
                                </select>
                            </div>
                            <textarea className="form-control" placeholder="Special Note"></textarea>
                            <button type="submit" className="form-submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quote;
