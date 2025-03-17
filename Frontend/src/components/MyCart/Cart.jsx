import React, { useState, useEffect, useContext } from "react";
import "./Cart.css";
import axios from "axios";
import loading from "../../../public/assets/loading.gif";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { hatch } from "ldrs";
import Loader from "../Loaders/Loader";


const Cart = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [emails, setEmails] = useState({
    email: "anbu@gmail.com",
    name: "anbu",
  });
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const viewHandler = () => {
    setShow((prev) => !prev);
  };
  const cancelHandler = async (item) => {
    const confirm = window.confirm("Are you want to cancel this rent?");
    if (confirm) {
      try {
        setLoading(true);
        console.log(item._id);
        const response = await axios.delete(
          `https://rental-system-using-mern-2.onrender.com/bookingdetails/${item._id}`
        );
        setShow(false);
        alert("Booking cancelled successfully, please refresh the page");
        fetchData();
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://rental-system-using-mern-2.onrender.com/bookingdetails/${userDetails.UserEmail}`
        );
        setCartItems(response.data);
      } catch (err) {
        setError("Error fetching data");
        console.log(err);
      } finally {
        setLoading(false);
        // Stop loading after fetching
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="heading">
        <h1 className="subheading">MY CART</h1>
      </div>
      {!loading && cartItems.length > 0 && (
        <div className="cartContainer">
          {cartItems.map((item) => (
            <>
              <div className="cartWrapper">
                <img src={item.img} alt="" />
                <div className="textContainer">
                  <h2>{item.name}</h2>
                  <button onClick={viewHandler}>View</button>
                </div>
              </div>

              <div className={show ? "details show" : "details"}>
                <h1>Booking Details</h1>
                <div className="box">
                  <h2> Name</h2>
                  <h2>{item.customername}</h2>
                </div>
                <div className="box">
                  <h2>Rent Price</h2>
                  <h2>{`${item.price}/Day`}</h2>
                </div>
                <div className="box">
                  <h2>Vehicle Count</h2>
                  <h2>{item.count}</h2>
                </div>
                <div className="box">
                  <h2>Total Days</h2>
                  <h2>{item.days}</h2>
                </div>
                <div className="box">
                  <h2>Renting Date</h2>
                  <h2>{item.date}</h2>
                </div>

                <div className="box">
                  <h2>Driver Need</h2>
                  <h2>{item.withdriver ? "Yes" : "No"}</h2>
                </div>

                <div className="box">
                  <button
                    style={{ backgroundColor: "green" }}
                    onClick={viewHandler}
                  >
                    Close
                  </button>
                  <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => cancelHandler(item)}
                  >
                    Cancel Booking
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      )}
      {!loading && cartItems.length == 0 && (
        <div className="cartContainer">
          <h1>No Bookings Found</h1>
        </div>
      )}
      {loading && (
        <Loader/>
      )}
    </>
  );
};

export default Cart;
