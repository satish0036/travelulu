import React from "react";
import "./ToolList.css";
import ToolListCard from "./ToolListCard.js";
const ToolList = () => {
  const data=[{"id":1},{"id":2},{"id":3}];
  return (
    <>
      <div className='ToolList_layout'>
        <div className='ToolList_box'>
          <div className='ToolList_text1'>TOOL LIST</div>
          <div className='ToolList_line2'>
            <div className='ToolList_text2'>Use our assortment of travel plan tools</div>
            <div className='ToolList_text3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Pellentesque pulvinar lorem justo, Lorem ipsum dolor sit amet, consectetur </div>
          </div>
          <div className='ToolListCard_layout'>
            {data.map((datas)=>(<ToolListCard num={datas.id} key={datas.id+6}/>))}
          </div>
        </div>
      
      </div>
    </>
  );
};

export default ToolList;
