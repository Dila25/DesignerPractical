import React from "react";
import "./announcements.css";
import img01 from "./images/01.png";
import img02 from "./images/02.png";
import img03 from "./images/03.png";
function Announcements() {
  return (
    <div>
      <div className="announcements-container">
        <div className="announcements-container-main">
          <h1 className="ann-hed">Announcements</h1>
          <div className="announcements-card-container">
            <div className="announcements-card">
              <table>
                <tr>
                  <td>
                    <div className="announcements-img">
                      <div className="announcements-overlay">
                        <img
                          src={img01}
                          alt="announcements_Photo"
                          className="announcements-image"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="announcements-details">
                      <div className="announcements-name">
                        <p className="ann-nme">
                          2022 Annual Report Bank of Beirut - UK
                        </p>
                      </div>
                      <div className="announcements-btn">
                        <button className="announcements-btn-al">
                          Read More
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>

            <div className="announcements-card">
                <table><tr><td>
              <div className="announcements-img">
                <div className="announcements-overlay">
                  <img
                    src={img02}
                    alt="announcements_Photo"
                    className="announcements-image"
                  />
                </div>
              </div></td><td>
              <div className="announcements-details">
                <div className="announcements-name">
                  <p className="ann-nme">Bank of Beirut - UK Download</p>
                </div>
                <div className="announcements-btn">
                  <button className="announcements-btn-al">Read More</button>
                </div>
              </div>
              </td>
              </tr>
              </table>
            </div>

            <div className="announcements-card">
                <table>
                    <tr><td>
              <div className="announcements-img">
                <div className="announcements-overlay">
                  <img
                    src={img03}
                    alt="announcements_Photo"
                    className="announcements-image"
                  />
                </div>
              </div></td><td>
              <div className="announcements-details">
                <div className="announcements-name">
                  <p className="ann-nme">A Look into the Future</p>
                </div>
                <div className="announcements-btn">
                  <button className="announcements-btn-al">Read More</button>
                </div>
              </div>
              </td>
              </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Announcements;
