import React from "react";
import "./PropertiesFound.css";
import {MapPin} from "react-feather";
import { Rating } from "react-simple-star-rating";
const PropertiesFoundCard = (props) => {
  
  return (
    <>
      <div className='PropertiesFoundCard_layout'>
        <div className='PropertiesFoundCard_left'>
          <img  
            className='PropertiesFoundCard_img'                         
            src={props.image}
            alt="g"
          />
        </div>
        <div className='PropertiesFoundCard_right'>
          <div className='PropertiesFoundCard_line1'>
            <div className='PropertiesFoundCard_line1_star'><Rating size="21px" fillColor='#ED2E7E' initialValue={props.rating} /></div>
            <button className='PropertiesFoundCard_line1_text1'>Make a booking</button>
          </div>
          <div className='PropertiesFoundCard_line1_text2'>{props.name}</div>
          <div className='PropertiesFoundCard_line1_text3'>{props.location}</div>
          <div className='PropertiesFoundCard_line1_text4'><MapPin size="18"/>Show on map</div>
          <div className='PropertiesFoundCard_line1_text5'>{props.about}</div>
          <button className='PropertiesFoundCard_line1_text19'>Make a booking</button>
          <div className='PropertiesFoundCard_line1_bottom'/>
        </div>
      </div>    
    </>
  );
};

export default PropertiesFoundCard;
