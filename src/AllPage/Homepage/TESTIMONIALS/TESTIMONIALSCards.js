import React from "react";
import "./TESTIMONIALS.css";
// import image from "./Avatar face.png"
const TESTIMONIALSCards = () => {
  return (<>
    <div className='TESTIMONIALSCards'>
      <div className='TESTIMONIALSCards_img'>
        <img className='avatar_img' 
          src="./Image/HomePage/Avatar face.png"
          alt="img"/>
      </div>
      <div className='TESTIMONIALSCards_border'/>
      <div className='TESTIMONIALSCards_text1'>Joe Blo Visited: France</div>
      <div className='TESTIMONIALSCards_line'/>
      <div className='TESTIMONIALSCards_text2'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar 
      lorem justo, id faucibus mi.”</div>
     
    </div>
  </>
  );
};

export default TESTIMONIALSCards;
