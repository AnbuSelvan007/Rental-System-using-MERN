import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./BookDetail.css";
import { useLocation } from "react-router-dom";

const BookDetail = ({ state }) => {
  const location=useLocation();
  const {item}=location.state || {};
  const navigate=useNavigate()
  const userDetails=JSON.parse(localStorage.getItem("userDetails"));
  const [user, setUser] = useState({
    customername: userDetails.UserName,
    email:userDetails.UserEmail,
    phone:userDetails.UserPhone,
    date: "",
    count: "",
    price:item.price,
    days: "",
    withdriver:"yes",
    img:item.img,
    vehicleName:item.name
  });

  const submitHandler = async(e) => {
    e.preventDefault();
   try{
    const response=await axios.post("https://rental-system-using-mern-2.onrender.com/bookingdetails",user);
    alert("Booking Successfull and check it in your profile")
    navigate('/Home');

   }
   catch{
    alert("some times went Wrong, try again")
   }
 
  };
  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
    <h1 className="subheading">BOOKING CONFIRMATION</h1>
    <div className="bookdetailContainer">
      <form action="" onSubmit={submitHandler}>
        <div className="heading">
          <h2>Booking Details</h2>
        </div>
        <div className="box">
          <label htmlFor="">Customer Name</label>
          <input
            type="text"
            value={user.customername}
            name="name"
            onChange={inputHandler}
            required
          />
        </div>
        <div className="box">
          <label htmlFor="">Phone Number</label>
          <input
            type="number"
            value={user.phone}
            name="phone"
            onChange={inputHandler}
            required
          />
        </div>
        <div className="box">
          <label htmlFor="">Vehicle Count</label>
          <input
            type="number"
            value={user.count}
            name="count"
            onChange={inputHandler}
            required
          />
        </div>
        <div className="box">
          <label htmlFor="">Date Of Travel</label>
          <input
            type="date"
            value={user.date}
            name="date"
            onChange={inputHandler}
            required
          />
        </div>
        <div className="box">
          <label htmlFor="">Total Days</label>
          <input
            type="number"
            value={user.days}
            name="days"
            onChange={inputHandler}
            required
          />
        </div>
        <div className="box">
          <label htmlFor="">Driver Needed</label>
          <select  onChange={inputHandler}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            
          </select>
        </div>
        <div className="buttonContainer">
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default BookDetail;
