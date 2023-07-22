import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CiUnlock } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineKey } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { BsCheck2Circle } from "react-icons/bs";
import { IoChatbubblesOutline } from "react-icons/io5";
import "./quic.css";

function QuicNav() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5, // Change this value to the desired number of items, e.g., 5 to 10.
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
    <div className="quic-container">
      <Carousel responsive={responsive}>

        <div className="quic-card" >
          <CiUnlock  className="quic-icon"/>
          <h1 className="quic-h1">ONLINE <br></br>BANKING </h1>
        </div>
        <div className="quic-card" >
          <IoLocationOutline className="quic-icon"/>
          <h1 className="quic-h1">LOCATE US</h1>
        </div >
        <div className="quic-card" >
          <AiOutlineKey className="quic-icon"/>
          <h1 className="quic-h1">ACCOUNTS</h1>
        </div>
        <div className="quic-card" >
          <GiReceiveMoney className="quic-icon"/>
          <h1 className="quic-h1">LOANS & ADVANCES</h1>
        </div>
        <div className="quic-card" >
          <BsCheck2Circle className="quic-icon"/>
          <h1 className="quic-h1">COMPLIANCE</h1>
        </div>
        <div className="quic-card" >
          <IoChatbubblesOutline className="quic-icon"/>
          <h1 className="quic-h1">CONTACT US</h1>
        </div>
      </Carousel>
      
    </div>
  );
}

export default QuicNav;
