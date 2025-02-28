import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookDetail.css";
const BookDetail = ({ item }) => {
  const navigate=useNavigate()
  const [user, setUser] = useState({
    name: "",
    withdriver: "",
    phone: "",
    date: "",
    count: "",
    price: "",
    days: "",
    withdriver: false,
  });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    navigate('/Home');

  };
  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="bookdetailContainer">
      <form action="" onSubmit={submitHandler}>
        <div className="heading">
          <h2>Booking Details</h2>
        </div>
        <div className="box">
          <label htmlFor="">Customer Name</label>
          <input
            type="text"
            value={user.name}
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
  );
};

export default BookDetail;
