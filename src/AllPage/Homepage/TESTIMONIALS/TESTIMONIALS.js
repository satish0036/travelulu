import React from "react";
import "./TESTIMONIALS.css";
import TESTIMONIALSCards from "./TESTIMONIALSCards.js";
const TESTIMONIALS = () => {
  const data=[{"id":1},{"id":2},{"id":3},{"id":4},{"id":5},{"id":6},{"id":7}];

  let box=document.querySelector(".testimonials_cards_layout");
  const btnpressleft =()=>{
    let width1=box.scrollWidth;
    box.scrollLeft=box.scrollLeft-width1;

  };
  const btnpressright =()=>{
    let width2=box.scrollWidth;
    box.scrollLeft=box.scrollLeft+width2;
  };
  return (
   
    <>
      <div className='testimonials_layout'>
        <div className='testimonials_box'>
          <div className='testimonials_text1'>TESTIMONIALS</div>
          <div className='testimonials_line2'>
            <div className='testimonials_text2'>Let’s see what fans of Travelulu have to say</div>
            <div className='testimonials_icon'>
              <button className='testimonials_left' onClick={btnpressleft}>&lt;</button>
              <button className='testimonials_left'onClick={btnpressright}>&gt;</button>
            </div>
          </div>
          <div className='testimonials_cards_layout'>
            {
              data.map((datas)=>(<TESTIMONIALSCards name={datas.name} key={datas.id} />))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default TESTIMONIALS;
