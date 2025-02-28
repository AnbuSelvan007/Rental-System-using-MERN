import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../App";
import "./Navbar.css";
const Navbar = () => {
  const {userprof,setUserprof}=useContext(UserContext)
  const [open,setOpen]=useState(false);
  const [show,setShow]=useState(false);
  const navigate=useNavigate()
  const profileHandler=()=>{
    setShow(prev=>!prev)
  }
  const logoutHandler=()=>{
      const ans=window.confirm('Are you want to LogOut');
      if(ans)
      {
        setUserprof({userName:"",userEmail:"",userPhone:""})
        navigate('/');
      }

  }
  
  return (
    <div className="navbarContainer">
      <div className="profile logo">
        {/* <img src="" alt="logo" /> */}
        <span onClick={profileHandler}><FontAwesomeIcon icon={faCircleUser}  /></span>
       
      </div>
      <div className={show?"userInfo show":"userInfo"} >
          <h3>{userprof.userName}</h3>
          <h3>{userprof.userEmail}</h3>
          <h3>{userprof.userPhone}</h3>
          <div className="btn">
            <button style={{backgroundColor:"green",marginRight:"5px"}} onClick={profileHandler}>Back</button>
            <button style={{backgroundColor:"red",marginLeft:"5px"}} onClick={logoutHandler}>LogOut</button>
          </div>
      </div>
      <div className="navigationItems">
        <div className="heading">QUALITY RENTERS<span>{!open?<FontAwesomeIcon icon={faBars} onClick={()=>setOpen(true)}/>:<FontAwesomeIcon icon={faXmark} onClick={()=>setOpen(false)} />}</span></div>
      
       
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
