import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./exchange.css";
import aus from "./images/aus.webp";
import bah from "./images/baha.png";
import chai from "./images/chaina.webp";
import baniz from "./images/daniz.webp";
import cana from "./images/Flag-Canada.webp";
import oman from "./images/Flag-Oman.webp";
import arab from "./images/Flag-Saudi-Arabia.webp";
import japn from "./images/japan.webp";
import kuw from "./images/kuw.webp";
import newz from "./images/newz.webp";
import quater from "./images/quater.png";
import swis from "./images/swis.webp";
import uk from "./images/uk.webp";
import mala from './images/mala.webp';

function Exchange() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6, 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  return (
    <div>
      <div className="exchange-container">
        <Carousel responsive={responsive}
        autoPlay={false}
        arrows={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style">
          <div className="exchange-card">
            <table>
              <tr>
                <td>
                  <div className="exchange-left">
                    <img
                      src={aus}
                      alt="cuntry_photo"
                      className="exchange-image"
                    />
                    <h1 className="c-name">AUS</h1>
                  </div>
                </td>
                <td>
                  <div className="exchange-right">
                    <p className="exchange-price">Buy 2.2525</p>
                    <p className="exchange-price"> Sell 2.3530</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="exchange-card">
            <table>
              <tr>
                <td>
                  <div className="exchange-left">
                    <img
                      src={bah}
                      alt="cuntry_photo"
                      className="exchange-image"
                    />
                    <h1 className="c-name">Bah</h1>
                  </div>
                </td>
                <td>
                  <div className="exchange-right">
                    <p className="exchange-price">Buy 5.1525</p>
                    <p className="exchange-price">Sell 2.1525</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="exchange-card">
            <table>
              <tr>
                <td>
                  <div className="exchange-left">
                    <img
                      src={chai}
                      alt="cuntry_photo"
                      className="exchange-image"
                    />
                    <h1 className="c-name">Chi</h1>
                  </div>
                </td>
                <td>
                  <div className="exchange-right">
                    <p className="exchange-price">Buy 2.2525</p>
                    <p className="exchange-price">Sell 2.2525</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="exchange-card">
            <table>
              <tr>
                <td>
                  <div className="exchange-left">
                    <img
                      src={baniz}
                      alt="cuntry_photo"
                      className="exchange-image"
                    />
                    <h1 className="c-name">Ban</h1>
                  </div>
                </td>
                <td>
                  <div className="exchange-right">
                    <p className="exchange-price">Buy 3.2525</p>
                    <p className="exchange-price">Sell 1.2525</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="exchange-card">
            <table>
              <tr>
                <td>
                  <div className="exchange-left">
                    <img
                      src={cana}
                      alt="cuntry_photo"
                      className="exchange-image"
                    />
                    <h1 className="c-name">CAN</h1>
                  </div>
                </td>
                <td>
                  <div className="exchange-right">
                    <p className="exchange-price">Buy 0.2525</p>
                    <p className="exchange-price">Sell 2.2525</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="exchange-card">
            <table>
              <tr>
                <td>
                  <div className="exchange-left">
                    <img
                      src={oman}
                      alt="cuntry_photo"
                      className="exchange-image"
                    />
                    <h1 className="c-name">Omn</h1>
                  </div>
                </td>
                <td>
                  <div className="exchange-right">
                    <p className="exchange-price">Buy 7.2525</p>
                    <p className="exchange-price">Sell 5.2525</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="exchange-card">
            <table>
              <tr>
                <td>
                  <div className="exchange-left">
                    <img
                      src={arab}
                      alt="cuntry_photo"
                      className="exchange-image"
                    />
                    <h1 className="c-name">Arb</h1>
                  </div>
                </td>
                <td>
                  <div className="exchange-right">
                    <p className="exchange-price">Buy 1.2525</p>
                    <p className="exchange-price">Sell 3.2525</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="exchange-card">
            <table>
              <tr>
                <td>
                  <div className="exchange-left">
                    <img
                      src={japn}
                      alt="cuntry_photo"
                      className="exchange-image"
                    />
                    <h1 className="c-name">Jpn</h1>
                  </div>
                </td>
                <td>
                  <div className="exchange-right">
                    <p className="exchange-price">Buy 2.2525</p>
                    <p className="exchange-price">Sell 5.2525</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="exchange-card">
            <table>
              <tr>
                <td>
                  <div className="exchange-left">
                    <img
                      src={kuw}
                      alt="cuntry_photo"
                      className="exchange-image"
                    />
                    <h1 className="c-name">Kuw</h1>
                  </div>
                </td>
                <td>
                  <div className="exchange-right">
                    <p className="exchange-price">Buy 1.2525</p>
                    <p className="exchange-price">Sell 2.1112</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="exchange-card">
            <table>
              <tr>
                <td>
                  <div className="exchange-left">
                    <img
                      src={newz}
                      alt="cuntry_photo"
                      className="exchange-image"
                    />
                    <h1 className="c-name">New</h1>
                  </div>
                </td>
                <td>
                  <div className="exchange-right">
                    <p className="exchange-price">Buy 4.2525</p>
                    <p className="exchange-price">Sell 2.2525</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="exchange-card">
            <table>
              <tr>
                <td>
                  <div className="exchange-left">
                    <img
                      src={quater}
                      alt="cuntry_photo"
                      className="exchange-image"
                    />
                    <h1 className="c-name">Qua</h1>
                  </div>
                </td>
                <td>
                  <div className="exchange-right">
                    <p className="exchange-price">Buy 1.2525</p>
                    <p className="exchange-price">Sell 2.4447</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="exchange-card">
            <table>
              <tr>
                <td>
                  <div className="exchange-left">
                    <img
                      src={swis}
                      alt="cuntry_photo"
                      className="exchange-image"
                    />
                    <h1 className="c-name">Swi</h1>
                  </div>
                </td>
                <td>
                  <div className="exchange-right">
                    <p className="exchange-price">Buy 1.2525</p>
                    <p className="exchange-price">Sell 5.2525</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="exchange-card">
            <table>
              <tr>
                <td>
                  <div className="exchange-left">
                    <img
                      src={uk}
                      alt="cuntry_photo"
                      className="exchange-image"
                    />
                    <h1 className="c-name">UK</h1>
                  </div>
                </td>
                <td>
                  <div className="exchange-right">
                    <p className="exchange-price">Buy 5.2525</p>
                    <p className="exchange-price">Sell 2.2525</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="exchange-card">
            <table>
              <tr>
                <td>
                  <div className="exchange-left">
                    <img
                      src={mala}
                      alt="cuntry_photo"
                      className="exchange-image"
                    />
                    <h1 className="c-name">Mal</h1>
                  </div>
                </td>
                <td>
                  <div className="exchange-right">
                    <p className="exchange-price">Buy 8.2525</p>
                    <p className="exchange-price">Sell 2.2525</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>

        </Carousel>
      </div>
    </div>
  );
}

export default Exchange;
