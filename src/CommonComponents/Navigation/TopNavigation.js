import React from "react";
import "./TopNavigation.css";
import { Menu ,X ,ChevronDown,ChevronRight} from "react-feather";
import {useState} from "react";
import {Link} from "react-router-dom";
const TopNavigation = () => {
  const [toggle, setToggle] = useState(false);
  const [Services, setServices] = useState(false);
  const [Continents, setContinents] = useState(false);
  
  return (
    <div>
      <div className='TopNavigation'>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className='TopNavigation_text'>Travelulu</div>
        </Link>
        <div className='TopNavigation_toggler' onClick={() => setToggle(!toggle)}><Menu color='#5F2EEA' size="30px"/>
        </div>
      </div>
      {toggle && (
        

        <div className="list-group">
         
          <div className='TogglerMenu'>
            <div className='TogglerMenuName'>Travelulu</div>
            <div className='TogglerMenuIcon' onClick={() => setToggle(!toggle)} ><X size="30px"/></div>



          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className='TogglerMenu1'>Home</div>
          </Link>
          <div className={Services ?"TogglerMenu2active":"TogglerMenu2"}  onClick={() => setServices(!Services)}>
            {Services ?<ChevronDown size="20px"/>:<ChevronRight size="20px"/>} Services</div>
          {Services && (
            <>
              <div className='TogglerMenu2_content'>
                <div className='TogglerMenu2_text'>Planning</div>
                <div className='TogglerMenu2_text'>Financing</div>
                <div className='TogglerMenu2_text'>Purchasing</div>
                <div className='TogglerMenu2_text'>Reviewing</div>
                <div className='TogglerMenu2_text'>Flying</div>
              </div>
            </>
          )}
          <div className={Continents ?"TogglerMenu3active":"TogglerMenu3"}  onClick={() => setContinents(!Continents)}>{Continents ?<ChevronDown size="20px"/>:<ChevronRight size="20px"/>} Continents</div>
          {Continents && (
            <>
              <div className='TogglerMenu2_content'>
                <div className='TogglerMenu2_text'>Coming Soon....</div>
                <div className='TogglerMenu2_text'>Coming Soon....</div>
                <div className='TogglerMenu2_text'>Coming Soon....</div>
                <div className='TogglerMenu2_text'>Coming Soon....</div>
                <div className='TogglerMenu2_text'>Coming Soon....</div>
              </div>
            </>
          )}
       
          <div className='TogglerMenu1'>Contact</div>
          <div className='TogglerMenu1'>Privacy</div>
          <Link to="/Subpage" style={{ textDecoration: "none" }}>
            <div className='TogglerMenu1'>Subpage</div>
          </Link>
            

        
        </div>
      )}
    </div>
  );
};

export default TopNavigation;
