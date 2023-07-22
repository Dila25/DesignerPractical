/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./map.css";

function Map() {
  return (
    <div>
      <div className="map-container">
        <div className="map-main-container ">
          <h1 className="map-title">Main Branches</h1>
          
              <div className="map-box">
                <div className="map-location-left-container ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31683.25727740349!2d79.866324!3d6.961203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae258f2edf9170d%3A0x70f33e4b2a30942e!2sLB%20Finance%20PLC%20Aluth%20mawatha!5e0!3m2!1sen!2slk!4v1690049655836!5m2!1sen!2slk"
                    class="hom-map"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
             
              
                <div className="map-location-right">
                  <div className="map-location-right-container ">
                    <div className="map-location-details-container">
                      <div className="map-location-1st">
                        <h2 className="location-name">Head Office</h2>
                        <h2 className="location-number">0112 200 000</h2>
                      </div>
                      <p className="map-location-address">
                        No 530, Aluth Mawatha, Colombo 15 Aththidiya
                      </p>
                    </div>
                  </div>
                  <div className="map-location-right-container ">
                    <div className="map-location-details-container">
                      <div className="map-location-1st">
                        <h2 className="location-name">Corporate Office</h2>
                        <h2 className="location-number">0115 525 535</h2>
                      </div>
                      <p className="map-location-address">
                        No 269 , Main Road , Attidiya Athurugiriya
                      </p>
                    </div>
                  </div>
                  <div className="map-location-right-container ">
                    <div className="map-location-details-container">
                      <div className="map-location-1st">
                        <h2 className="location-name">Aluth Mawatha</h2>
                        <h2 className="location-number">0115 555 566</h2>
                      </div>
                      <p className="map-location-address">
                        No.50/12, Godagama Road, Athurugiriya Avissawella
                      </p>
                    </div>
                  </div>

                  <div className="map-location-right-container ">
                    <div className="map-location-details-container">
                      <div className="map-location-1st">
                        <h2 className="location-name">Aluth Mawatha</h2>
                        <h2 className="location-number">0115 598 000</h2>
                      </div>
                      <p className="map-location-address">
                        No 25, Yatiyanthota Road, Avissawella
                      </p>
                    </div>
                  </div>

                  <div className="map-location-right-container ">
                    <div className="map-location-details-container">
                      <div className="map-location-1st">
                        <h2 className="location-name">Aluth Mawatha</h2>
                        <h2 className="location-number">0112 732 905</h2>
                      </div>
                      <p className="map-location-address">
                        No 25, Yatiyanthota Road, Avissawella
                      </p>
                    </div>
                  </div>
                </div>

             </div>
         
        </div>
      </div>
    </div>
  );
}

export default Map;
