import React, { useState } from "react";
import "./slider.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

function Slider() {
  const [dropOpen, setDropOpen] = useState(false);

  const toggleDropdown = () => {
    setDropOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div className="slider-container">
        <div className="slider-shoshal-icon">

          <a href="#fb" className="shosh-icon-a facebook">
            <BsFacebook className="icon-i fb" />Facebook 
          </a>
          <a href="#tw" className="shosh-icon-a twitter">
            
            <AiFillTwitterCircle className="icon-i tw" />Twitter
          </a>
          <a href="#lin" className="shosh-icon-a linkedin">
           
            <AiFillLinkedin className="icon-i li" /> Linkedin
          </a>
          <a href="#yt" className="shosh-icon-a youtube">
           
            <AiFillYoutube className="icon-i yt" /> Youtube
          </a>
          <a href="#inst" className="shosh-icon-a instagram">
            
            <AiFillInstagram className="icon-i in" />Instagram
          </a>
          <a href="#wts" className="shosh-icon-a whatsapp">
            
            <BsWhatsapp className="icon-i wht" />Whatsapp
          </a>
        </div>
        <div className="slider-box">
          <div className="slider-cont-box">
            <h1 className="slider-h1">I want to</h1>
            <p className="slider-para">know about</p>
            <div className="dropdown-slid">
              <p className="hum-name">
                choose a topic
                <button className="dropbtnb-slid" onClick={toggleDropdown}>
                  <GiHamburgerMenu className="drop-hum" />
                </button>
              </p>
              {dropOpen && (
                <div className="dropdown-content-slid">
                  <a href="#Loans" className="slid-a">
                    Personal Loans
                  </a>
                  <a href="#Accounts" className="slid-a">
                    Savings Accounts
                  </a>
                  <a href="#Planner" className="slid-a">
                    DFCC Investment Planner
                  </a>
                  <a href="#Accounts" className="slid-a">
                    Foreign Currency Accounts
                  </a>
                  <a href="#Deposit" className="slid-a">
                    Fixed Deposit
                  </a>
                  <a href="#Pinnacle" className="slid-a">
                    DFCC Pinnacle
                  </a>
                  <a href="#Sale" className="slid-a">
                    Properties For Sale
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Slider;
