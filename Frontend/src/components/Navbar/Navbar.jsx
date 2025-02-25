import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
const Navbar = () => {
  const [open,setOpen]=useState(false);
  return (
    <div className="navbarContainer">
      <div className="logo">
        {/* <img src="" alt="logo" /> */}
        Logo
      </div>
      <div className="navigationItems">
        <div className="heading">Quality Renters<span>{!open?<FontAwesomeIcon icon={faBars} onClick={()=>setOpen(true)}/>:<FontAwesomeIcon icon={faXmark} onClick={()=>setOpen(false)} />}</span></div>
      
       
        <nav className={open?"open":""}>
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Services">Services</Link>
          <Link to="/Complaints">Complaints</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <Link to="/Cars">Cars</Link>
<Link to="/Bikes">Bikes</Link>
<Link to="/Equipments">Equipments</Link> */
}
