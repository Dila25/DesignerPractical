import React from "react";
import "./footer.css";
import {
  AiFillCaretRight,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa6";
import ply from "./image/ply.png";
import app from "./image/app.png";

export default function Footer() {
  return (
    <div className="ft">
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4 className="footer-h4">
                <b>QUICK LINKS</b>
              </h4>
              <ul className="footer-ul">
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <AiFillCaretRight /> Application Downloads
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <AiFillCaretRight />
                    General Banking Terms & Conditions
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <AiFillCaretRight />
                    Tariff
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <AiFillCaretRight />
                    Profit Sharing Ratios and Rates
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <AiFillCaretRight />
                    Exchange Rates
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <AiFillCaretRight />
                    Customer Charter
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <AiFillCaretRight />
                    Key Fact Documents
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <AiFillCaretRight />
                    Sitemap
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <AiFillCaretRight />
                    Annual Report 2022
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <AiFillCaretRight />
                    Supplier Registration
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <AiFillCaretRight />
                    Properties for Sale
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <AiFillCaretRight />
                    Feedback and Complaints
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4 className="footer-h4">
                <b>DOWNLOAD ONLINE BANKING APP</b>
              </h4>
              <ul className="footer-ul">
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <img src={ply} alt="play_store" className="ply" />
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <img src={app} alt="play_store" className="ply" />
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    Our Online Banking application is not hosted in any third
                    party stores except for the above
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <p className="swit">SWIFT CODE</p>AMNALKLX
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4 className="footer-h4">
                <b>FOLLOW US</b>
              </h4>
              <ul className="footer-ul">
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <FaFacebook className="si" />
                    &nbsp; Facebook
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <AiFillInstagram className="in" />
                    &nbsp; Instagram
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <AiFillTwitterCircle className="tw" />
                    &nbsp; Twitter
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <AiFillLinkedin className="lk" />
                    &nbsp; Linkedin
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <AiFillYoutube className="yt" /> &nbsp; YouTube
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4 className="footer-h4">
                <b>REACH US</b>
              </h4>
              <ul className="footer-ul">
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <AiFillCaretRight />
                    Contact Us
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <AiFillCaretRight />
                    Branch Network
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <AiFillCaretRight />
                    Self Banking Centre Network
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <b>
                      <IoCall /> Prestige Hotline +9411 775 6222
                    </b>
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <b>
                      <IoCall /> Vantage hotline +94117 756 789
                    </b>
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <b>
                      <IoCall /> Expat Gold hotline +94117 756 757
                    </b>
                  </a>
                </li>
                <br></br>
                <h4 className="footer-h4">
                  <b> CORPORATE OFFICE</b>
                </h4>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <ImLocation2 /> 486, Galle Road, Colombo 3
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <IoCall /> +94 117 756 756
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-a" href="/">
                    <TbDeviceLandlinePhone /> +94 112 574 419
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <br></br>
          <br></br>

          <p className="f">
            Copyright © 2023 Amãna Bank PLC is a Licensed Commercial Bank
            approved and supervised by the Central Bank of Sri Lanka | Fitch
            Rating : BB+(lka) RWN Outlook (PB 3618 PQ)
          </p>
        </div>
      </footer>
    </div>
  );
}
