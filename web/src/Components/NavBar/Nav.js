import React from "react";
import "./nav.css";
import { BsFillBellFill  } from "react-icons/bs";
import { IoIosMan } from "react-icons/io";
function Nav() {
  return (
    <div>
      <ul className="nav-item-blck-ul">
        <li className="nav-item-blck-li">
          <a className="nav-item-blck-a" href="#Personal">
            Personal
          </a>
        </li>
        <li className="nav-item-blck-li">
          <a className="nav-item-blck-a" href="#Cards">
            Cards
          </a>
        </li>
        <li className="nav-item-blck-li">
          <a className="nav-item-blck-a" href="#DFCC">
            DFCC Pinnacle{" "}
          </a>
        </li>
        <li className="nav-item-blck-li">
          <a className="nav-item-blck-a " href="#Digital">
            Digital Banking
          </a>
        </li>
        <li className="nav-item-blck-li">
          <a className="nav-item-blck-a" href="#Corporate">
            Corporate
          </a>
        </li>
        <li className="nav-item-blck-li">
          <a className="nav-item-blck-a" href="#SME">
            SME
          </a>
        </li>
        <li className="nav-item-blck-li">
          <a className="nav-item-blck-a" href="#International">
            International
          </a>
        </li>
        <div className="nav-left-blck-container">
          <div className="nav-icon-blck-bel">
            <BsFillBellFill />
          </div>
          <div className="nav-icon-blck-man">
            <IoIosMan className="man-nv" />
          </div>
        </div>
      </ul>

    </div>
  );
}

export default Nav;
