import React from 'react';
import { devmap } from "../assets";
const Devmap = () => {
  return (
    <div className="devmap-container">
      <div className="devmap-image-container">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[45px] text-[52px] text-white ss:leading-[40px] leading-[50px]">
               Roadmap {" "} <br></br>
                <span className="text-gradient ss:text-[30px]">First year Development cycle</span>{" "}
              </h1>
        <img src={devmap } alt="Development Roadmap" />
      </div>
    </div>
  );
};

export default Devmap;