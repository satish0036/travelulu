import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./PropertiesFound.css";
import PropertiesFoundCard from "./PropertiesFoundCard.js";
import {ThumbsUp ,X,AlertCircle} from "react-feather";
const PropertiesFound = () => {
  // const data=[{"id":1},{"id":2},{"id":3},{"id":4}];
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch("AllData/PropertiesFound.json"
      ,{
        headers : { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }
    )
      .then(function(response){
        console.log(response);
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(()=>{
    getData();
  },[]);
  return (<>
    <div className='PropertiesFound_layout'>
      <div className='PropertiesFound_search'>
        <div className='Properties_search_box'>
          <div className='Properties_search_box_text1'>Search</div>
          <div className='Properties_search_box_text2'>Destination/property name</div>
          <input className='Properties_search_box2' placeholder="&#xf040;   Search         " type="text"/>
          <div className='Properties_search_box_text3'>Check-in date</div>
          <input className='Properties_search_box3' type="date"/>
          <div className='Properties_search_box_text3'>Check-out date</div>
          <input className='Properties_search_box3' type="date"/>
          <div className='Properties_search_box_text2'>Destination/property name</div>
          <input className='Properties_search_box2' placeholder="&#xf040;   2 adults - 0 childern" type="text"/>
          <button className='Properties_search_button'>Search</button>    
        </div>
      </div>




      <div className='PropertiesFound_found'>
        <div className='PropertiesFound_found_text1'>254 Properties Found</div>

        <div className='PropertiesFound_found_card'>
          {
            data.map((datas)=>(<PropertiesFoundCard image={datas.img} rating={datas.rating} name={datas.name}
              location={datas.location} about={datas.about} key={datas.id+3} />))
          }
        </div>

      </div>


      
    </div>
    <div className='lowerBox1'>
      <div className='lowerBox1_text1' ><ThumbsUp color='black' size={30}/>Lock in a great price for your upcoming stay
            Get instant confirmation with FREE cancellation on most rooms!</div>
      <div className='lowerBox1_icon1'><X size="20px"/></div>
    </div>
    <div className='lowerBox2'>
      <div className='lowerBox2_text1' ><AlertCircle color='black' size="30px"/>From 6 April 2022, your chosen cancellation policy will apply, regardless of Coronavirus. We recommend booking a free cancellation option in case your travel plans need to change. </div>
      <div className='lowerBox2_icon1'><X size="20px"/></div>
    </div>
  </>
  );
};

export default PropertiesFound;
