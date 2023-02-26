import React from "react";
import "./PlanTrips.css";
const PlanTrips = () => {
  return (
    <>
      <div className='PlanTrips_layout'>
        <div className='PlanTrips_box'>
          <div className='PlanTrips_img'>
            <img
              className="PlanTrips_img1"
              src="./Image/HomePage/Boarding.png"
              alt="g"
            />
          </div>
          <div className='PlanTrips_text1'>Plan your next big trip overseas.</div>
          <div className='PlanTrips_line2'>
            <button className='PlanTrips_btn'>BEGIN PLANS</button>
            <button className='PlanTrips_btn'>REVIEW PLANS</button>
          </div>
        </div>
      </div>
      <div className='PlanTrips_bottom_part'>
        <div className='part1'>
          <div className='part1_line1'>
            <img
              className="Part1_img"
              src="./Image/HomePage/Vector(10).png"
              alt="g"
            />
            <div className='part1_number'>23,973</div>
          </div>
          <div className='part1_text'>Travel to over 23 thousand locations around the world.</div>
        </div>
     
        <div className='part1'>
          <div className='part1_line1'>
            <img
              className="Part1_img"
              src="./Image/HomePage/GlobeHemisphereEast.png"
              alt="g"
            />
            <div className='part1_number'>23,973</div>
          </div>
          <div className='part1_text'>Travel to over 23 thousand locations around the world.</div>
        </div>

        <div className='part1'>
          <div className='part1_line1'>
            <img
              className="Part1_img"
              src="./Image/HomePage/Bicycle.png"
              alt="g"
            />
            <div className='part1_number'>23,973</div>
          </div>
          <div className='part1_text'>Travel to over 23 thousand locations around the world.</div>
        </div>
      </div>
    </>
  );
};

export default PlanTrips;
