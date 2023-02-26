import React from "react";
import "./MoreInfo.css";
import Image from "./Group 247.png";
const MoreInfo = () => {
  return (
    <div>
      <div className='MoreInfo'>
        <div className='MoreInfo_box' style={{ backgroundImage: "url(" + Image + ")", backgroundSize: "auto" }}>
        
          <div className='MoreInfo_text'>Need more information to get started?</div>
          <button className='MoreInfo_button'>CONTACT US</button>
            
        </div>
      
      </div>
    </div>
  );
};

export default MoreInfo;
