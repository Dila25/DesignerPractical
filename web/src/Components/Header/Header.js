import React from "react";
import Logo from "./image/bankLogo.png";
import "./header.css";
import { MdLocationOn, MdCall, MdArrowDropDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { FaGreaterThan } from "react-icons/fa";
import { BsWallet2 } from "react-icons/bs";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-container">
          <div className="header-content">
            <div className="header-nav">
              <div className="header-nav-left">
                <div className="header-nav-item">
                  <input type="checkbox" id="nav_check" hidden></input>
                  <label for="nav_check" className="hamburger">
                    <div className="ham-div"></div>
                    <div className="ham-div"></div>
                    <div className="ham-div"></div>
                  </label>
                  <div className="header-logo">
                    <img
                      src={Logo}
                      alt="DFCC_Logo"
                      className="header-Logo-img"
                    />
                  </div>
                  <nav>
                    <div className="nav-ul">
                      <div class="dropdown nav-li">
                        <div class="nav-link nav-link-grow-up">About Us</div>

                        <div class="dropdown-content">
                          <p className="drop-topic">
                            <FaGreaterThan className="over-low" />
                            Overview
                          </p>
                          <div className="dropdown-header-left">
                            <a href="#History" className="drop-topic-a">
                              The History of DFCC Bank
                            </a>
                            <a href="#Vision" className="drop-topic-a">
                              Vision & Mission
                            </a>
                            <a href="#Milestones" className="drop-topic-a">
                              Milestones
                            </a>
                            <a href="#Corporate" className="drop-topic-a">
                              Corporate Management
                            </a>
                            <a href="#Information" className="drop-topic-a">
                              Corporate Information
                            </a>
                            <a href="#Issuance" className="drop-topic-a">
                              Debenture Issuance
                            </a>
                          </div>

                          <div className="dropdown-header-right">
                            <a href="#Brand" className="drop-topic-a">
                              Brand Story
                            </a>
                            <a href="#DFCC" className="drop-topic-a">
                              DFCC Group
                            </a>
                            <a href="#Board" className="drop-topic-a">
                              Board of Directors
                            </a>
                            <a href="#Recognition" className="drop-topic-a">
                              Recognition
                            </a>
                            <a href="#Investor" className="drop-topic-a">
                              Investor Relations
                            </a>
                            <a href="#Company" className="drop-topic-a">
                              Company Policies
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="dropdown nav-li">
                        <div class="nav-link nav-link-grow-up"> Careers</div>

                        <div class="dropdown-content">
                          <p className="drop-topic">
                            <FaGreaterThan className="over-low" />
                            Overview
                          </p>
                          <div className="dropdown-header-left">
                            <a href="#Life" className="drop-topic-a">
                              Life at DFCC
                            </a>
                            <a href="#Corporate" className="drop-topic-a">
                              Corporate Social Responsibility
                            </a>
                            <a href="#Career" className="drop-topic-a">
                              Career Opportunities at DFCC
                            </a>
                          </div>

                          <div className="dropdown-header-right">
                            <a href="#Growing" className="drop-topic-a">
                              Growing With The Bank
                            </a>
                            <a href="#Recruitment" className="drop-topic-a">
                              Recruitment
                            </a>
                            <a href="#Management" className="drop-topic-a">
                              Management Trainee Program
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="dropdown nav-li">
                        <div class="nav-link nav-link-grow-up">
                          Sustainability
                        </div>

                        <div class="dropdown-content2">
                          <p className="drop-topic">
                            <FaGreaterThan className="over-low" />
                            Overview
                          </p>
                          <div className="dropdown-header-left">
                            <a href="#History" className="drop-topic-a">
                              DFCC contributing to Resilience
                            </a>
                            <a href="#Vision" className="drop-topic-a">
                              DFCC Sustainability Trust
                            </a>
                            <a href="#Milestones" className="drop-topic-a">
                              Our six cross cutting themes – The 6 Es
                            </a>
                            <a href="#Information" className="drop-topic-a">
                              Social & Environment Management<br></br> System
                              (SEMS)
                            </a>
                          </div>

                          <div className="dropdown-header-right">
                            <a href="#Brand" className="drop-topic-a">
                              DFCC Sustainability Strategy
                            </a>
                            <a href="#DFCC" className="drop-topic-a">
                              Sustainability Management <br></br>for
                              implementation
                            </a>
                            <a href="#Board" className="drop-topic-a">
                              Gender Diversity & Inclusion at<br></br> DFCC Bank
                            </a>
                            <a href="#Recognition" className="drop-topic-a">
                              Sustainability Awards and<br></br> Achievements
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="dropdown nav-li">
                        <div class="nav-link nav-link-grow-up"> Media</div>

                        <div class="dropdown-content">
                          <p className="drop-topic">
                            <FaGreaterThan className="over-low" />
                            Overview
                          </p>
                          <div className="dropdown-header-left">
                            <a href="#History" className="drop-topic-a">
                              Press Releases
                            </a>
                            <a href="#Vision" className="drop-topic-a">
                              Product Commercials
                            </a>
                            <a href="#Milestones" className="drop-topic-a">
                              Blogs
                            </a>
                          </div>

                          <div className="dropdown-header-right">
                            <a href="#Brand" className="drop-topic-a">
                              Financial Press Releases
                            </a>
                            <a href="#DFCC" className="drop-topic-a">
                              Video Podcasts
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="header-btn-right">
                <div className="header-btn-item">
                  <div className="header-lun-btn">
                    <div className="english-btn nav-li btn-active lun-btn">
                      <button className="nav-btn-left en">E</button>
                    </div>
                    <div className="sinhala-btn nav-li sin lun-btn">
                      <button className="nav-btn-left">සි</button>
                    </div>
                    <div className="tamil-btn nav-li lun-btn">
                      <button className="nav-btn-left">த</button>
                    </div>
                  </div>

                  <div className="search-btn nav-li">
                    <button className="nav-btn-left">
                      <AiOutlineSearch className="nav-search" />
                    </button>
                  </div>

                  <div className="gray-btn-item ">
                    <div className="location-btn">
                      <button className="nav-btn-left gry-btn">
                        <MdLocationOn className="gray-icon" />
                        <br></br>
                        <p className="gry-btn-name">Locate Us</p>
                      </button>
                    </div>
                    <div className="Contact-btn">
                      <button className="nav-btn-left gry-btn">
                        <MdCall className="gray-icon" />
                        <br></br>
                        <p className="gry-btn-name">Contact Us</p>
                      </button>
                    </div>
                  </div>

                  <div class="dropdown-login">
                    <div className="login-btn-item">
                      <div className="log-btn">
                        <CiLock className="gray-icon-lock" />
                        <button className="nav-btn-left gray-log-name">
                          Login <MdArrowDropDown />
                        </button>
                      </div>
                    </div>

                    <div class="dropdown-content-login">
                      <p className="drop-topic-login">Personal Banking</p>
                      <div className="dropdown-header-left-login">
                        <a href="#History" className="drop-topic-a-login">
                          <div className="drop-topic-login-full">
                            <BsWallet2 className="log-wallet" />
                          </div>
                          <p className="topic-btn"> Personal Online Banking</p>
                        </a>

                        <a href="#History" className="drop-topic-a-login">
                          <div className="drop-topic-login-full-no">
                            <BsWallet2 className="log-wallet" />
                          </div>
                          <p className="topic-btn-no"> Download DFCC Wallet</p>
                        </a>

                        <p className="drop-topic-login">Corporate Banking</p>
                      </div>

                      <a href="#History" className="drop-topic-a-login">
                        <div className="drop-topic-login-full">
                          <BsWallet2 className="log-wallet" />
                        </div>
                        <p className="topic-btn"> DFCC iConnect</p>
                      </a>

                      <a href="#History" className="drop-topic-a-login">
                        <div className="drop-topic-login-full-no">
                          <BsWallet2 className="log-wallet" />
                        </div>
                        <p className="topic-btn-no">
                          Download DFCC iConnect App
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
