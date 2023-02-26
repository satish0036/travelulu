import React, { useState } from "react";
import "./SearchForDeals.css";

const SearchForDeals = () => {
  const [date,setDate]=useState();
  return (
    <>
      <div className='SearchForDeals_layout'>
        <div className='SearchForDeals_box'>
          <div className='SearchForDeals_text1'>Find deals on hotels, homes and much more...</div>
          <div className='SearchForDeals_line2'>
            <div className='SearchForDeals_line2_box1'>
          
              <input className='SearchForDeals_search22' type="text" placeholder="Where are you going?                                            &#62; "/>
            </div>
            <div className='SearchForDeals_line2_box2'>
            
              <input className='SearchForDeals_search22' type={date?"date":"text"} placeholder="Check-in - Check-out    >" onFocus={() => setDate(true)} />
            </div>
            <div className='SearchForDeals_line2_box3'>
              <input className='SearchForDeals_search22' type="text" placeholder="2 adults - 0 children         &#62; "/>
            </div>
            <button className='SearchForDeals_line2_box4'>Search</button>
          </div>
        </div>
        <div className='SearchForDealsHZ_line'/>
      </div>
    </>
  );
};

export default SearchForDeals;
