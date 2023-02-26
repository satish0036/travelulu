import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className='Footer_layout'>
        <div className='Footer_box'>
          <div className='Footer_column1'>
            <div className='Footer_column1_text1'>Travelulu</div>
            <div className='Footer_column1_text2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac 
        ullamcorper magna, ac laoreet ex. Integer a consequat lectus. Nullam tortor sem</div>
            <div className='Footer_column1_text3'>Copyright 2021, All Rights Reserved.</div>
          </div>
     
          <div className='Footer_column2'>
            <div className='Footer_column2_text1'>Services</div>
            <div className='Footer_column2_text2'>Planning</div>
            <div className='Footer_column2_text2'>Financing</div>
            <div className='Footer_column2_text2'>Financing</div>
            <div className='Footer_column2_text2'>Purchasing</div>
            <div className='Footer_column2_text2'>Meeting</div>
            <div className='Footer_column2_text2'>Flying</div>
          </div>
          <div className='Footer_column2'>
            <div className='Footer_column2_text1'>Continents</div>
            <div className='Footer_column2_text2'> North America</div>
            <div className='Footer_column2_text2'>South America</div>
            <div className='Footer_column2_text2'>Asia</div>
            <div className='Footer_column2_text2'>Africa</div>
            <div className='Footer_column2_text2'>Meeting</div>
            <div className='Footer_column2_text2'>Europe</div>
            <div className='Footer_column2_text2'>Australia</div>
          </div>
          <div className='Footer_column2'>
            <div className='Footer_column2_text1'>Contact</div>
            <div className='Footer_column2_text2' style={{"color":" #5F2EEA"}}> travelulu@website.com</div>
            <div className='Footer_column2_text2'>22 Street Address,Suburb Address Main City, PO Box Country </div>
            <div className='Footer_column2_text2'> 08 8888 88888</div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
