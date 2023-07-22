import React from "react";
import "./services.css";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
function Services() {
  return (
    <div>
      <div className="service-container">
        <div className="service-container-main">
          <div className="service-container-card">
            <div className="service-card">
              <div className="service-img">
              <div className="service-overlay">
                <img src={img1} alt="service_Photo" className="service-image" />
                </div>
              </div>
              <div className="service-details">
                <div className="service-name">
                  <h1 className="ser-nme">Footprint Across Four Continents</h1>
                </div>
                <div className="service-btn">
                  <button className="service-btn-al">Proud Heritage</button>
                </div>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img">
                <div className="service-overlay">
                <img src={img2} alt="service_Photo" className="service-image" />
                </div>
              </div>
              <div className="service-details">
                <div className="service-name">
                  <h1 className="ser-nme">
                    The Right Account for Your Business
                  </h1>
                </div>
                <div className="service-btn">
                  <button className="service-btn-al">Accounts</button>
                </div>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img">
              <div className="service-overlay">
                <img src={img3} alt="service_Photo" className="service-image" />
                </div>
              </div>
              <div className="service-details">
                <div className="service-name">
                  <h1 className="ser-nme">
                    Securing and Financing Your International Transactions
                  </h1>
                </div>
                <div className="service-btn">
                  <button className="service-btn-al">Trade Finance</button>
                </div>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img">
              <div className="service-overlay">
                <img src={img4} alt="service_Photo" className="service-image" />
                </div>
              </div>
              <div className="service-details">
                <div className="service-name">
                  <h1 className="ser-nme">Speak to a Trade Expert</h1>
                </div>
                <div className="service-btn">
                  <button className="service-btn-al">Advisory Service</button>
                </div>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img">
              <div className="service-overlay">
                <img src={img5} alt="service_Photo" className="service-image" />
              </div>
              </div>
              <div className="service-details">
                <div className="service-name">
                  <h1 className="ser-nme">
                    Fostering the Growth of Your Business
                  </h1>
                </div>
                <div className="service-btn">
                  <button className="service-btn-al">Lending Solutions</button>
                </div>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img">
              <div className="service-overlay">
                <img src={img6} alt="service_Photo" className="service-image" />
              </div>
              </div>
              <div className="service-details">
                <div className="service-name">
                  <h1 className="ser-nme">
                    Borrowing Facilities for Corporates
                  </h1>
                </div>
                <div className="service-btn">
                  <button className="service-btn-al">Corporate Finance</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
