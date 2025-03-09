import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { useIndexContext } from "../customHook/IndexContext";
import "./Navbar.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const { status, setStatus } = useIndexContext();
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
        <h2>My Profile</h2>
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
