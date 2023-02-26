import React from "react";
import "./ToolList.css";
const ToolListCard = () => {
  return (<>
    <div className='ToolListCard_box'>
     
     
      <div className='ToolListCard_img_box'>
        <img
          className="ToolListCard_img"
          src="./Image/HomePage/Plane and Money.png"
          alt="g"
        />
      </div>
      <div className="ToolListCard_text1">Plan Trip Dates</div>
      <div className="ToolListCard_text2">orem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      <button className='ToolListCard_btn'>LEARN MORE</button>  
    </div>
  </>
  );
};

export default ToolListCard;
