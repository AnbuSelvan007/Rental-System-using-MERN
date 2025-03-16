import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCircleUser,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { useIndexContext } from "../customHook/IndexContext";
import axios from "axios";
import "ldrs/hatch";
import "./Navbar.css";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const[updateDetails,setUpdateDetails]=useState({name:userDetails.UserName,phone:userDetails.UserPhone})
  const { status, setStatus } = useIndexContext();
  const [showEdit, setShowEdit] = useState(false);
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();
  const profileHandler = () => {
    setShow((prev) => !prev);

    if (!show || open) setStatus(true);
    else setStatus(false);
  };
  const openHandler = () => {
    setOpen((prev) => !prev);
  };
  const logoutHandler = () => {
    const ans = window.confirm("Are you want to LogOut");
    if (ans) {
      localStorage.removeItem("userDetails");
      navigate("/");
    }
  };
  const changeHandler=(e)=>{
    setUpdateDetails({...updateDetails,[e.target.name]:e.target.value})
  }
  const editHandler = () => {
    setShowEdit((prev) => !prev);
  };

  const saveHandler=async()=>{
    try{
      setLoading(true)
      const response=await axios.patch(`http://localhost:5000/userdetails/${userDetails.UserEmail}`,updateDetails);
      userDetails.UserName=response.data.name;
      userDetails.UserPhone=response.data.phone;
      localStorage.setItem("userDetails",JSON.stringify(userDetails))
      alert("Profile Updated Succesfully")
      setShowEdit(false);
    }
    catch(err){
      console.log(err);
      alert("please try later")
    }
    finally{
      setLoading(false)
    }
   
  }
  useEffect(() => {
    if (open || show) setStatus(true);
    else setStatus(false);
  }, [open, show]);

  return (
    <div className="navbarContainer">
      <div className="profile logo">
        {/* <img src="" alt="logo" /> */}
        <span onClick={profileHandler}>
          <FontAwesomeIcon icon={faCircleUser} />
        </span>
      </div>
      <div className={show ? "userInfo show" : "userInfo"}>
        <h2>
          My Profile{" "}
          <span style={{ cursor: "pointer" }} onClick={editHandler}>
            <FontAwesomeIcon icon={faEdit} />
          </span>
        </h2>
        {!showEdit && 
          <>
            <div className="userDetails">
              <h3>{userDetails.UserName}</h3>
              <h3>{userDetails.UserEmail}</h3>
              <h3>{userDetails.UserPhone}</h3>
            </div>
            
            <div className="cartPage">
              <Link to="/Cart" onClick={() => setShow(false)}>
                My Bookings
              </Link>
            </div>
            <div className="btn">
              <button
                style={{ backgroundColor: "green", marginRight: "5px" }}
                onClick={profileHandler}
              >
                Back
              </button>
              <button
                style={{ backgroundColor: "red", marginLeft: "5px" }}
                onClick={logoutHandler}
              >
                LogOut
              </button>
            </div>
          </>
        }
        {showEdit && 
          <>
            <div className="editDetails">
              <div className="nameContainer">
             <label>name:</label> 
              <input
                type="text"
                name="name"
                value={updateDetails.name}
                onChange={changeHandler}
              />
              </div>
              <div className="phoneContainer">
              <label>phone:</label>
              <input
              name="phone"
                type="text"
                value={updateDetails.phone}
                onChange={changeHandler}
              />
              </div>
            </div>
            {loading && (
              <div className="loader" style={{ width: "100%",display:"flex",justifyContent:"center"}}>
               <l-hatch size="28" stroke="4" speed="3.5" color="blue"></l-hatch>
              </div>
            )}
            {!loading &&
            <div className="btn">
              <button
                style={{ backgroundColor: "orange", marginRight: "5px" }}
                onClick={editHandler}
              >
                Back
              </button>

              <button
                style={{ backgroundColor: "green", marginLeft: "5px" }}
                onClick={saveHandler}
              >
                Save
              </button>
            </div>}
          </>
        }
      </div>
      <div className="navigationItems">
        <div className="heading">
          QUALITY RENTERS
          <span>
            {!open ? (
              <FontAwesomeIcon icon={faBars} onClick={openHandler} />
            ) : (
              <FontAwesomeIcon icon={faXmark} onClick={openHandler} />
            )}
          </span>
        </div>

        <nav className={open ? "open" : ""}>
          <Link to="/Home" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/About" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/Services" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link to="/Complaints" onClick={() => setOpen(false)}>
            Complaints
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
