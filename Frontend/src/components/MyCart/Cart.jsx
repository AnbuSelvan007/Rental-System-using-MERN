import React, { useState, useEffect, useContext } from "react";
import "./Cart.css";
import { UserContext } from "../../App";
import axios from "axios";
import loading from '../../../public/assets/loading.gif'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Cart = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const {userprof,setUserprof}=useContext(UserContext)
  const [emails,setEmails]=useState({email:"anbu@gmail.com",name:"anbu"})
  const viewHandler = () => {
    setShow((prev) => !prev);
  };
  const cancelHandler = async (item) => {
    const confirm=window.confirm("Are you want to cancel this rent?")
    if(confirm)
    {
    try {
      setLoading(true)
      const response = await axios.delete(
        `http://localhost:5000/bookingdetails/${item._id}`
      );
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
          `http://localhost:5000/bookingdetails/${userprof.userEmail}`
        );
        setCartItems(response.data);
        console.log(emails)
        console.log(response)
      } catch (err) {
        setError("Error fetching data");
        console.log(err)
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
    <h1>MY CART</h1>
     </div>
     {!loading &&  <div className="cartContainer">
      {cartItems.map((item) => (
        <>
          <div className="cartWrapper">

            <img
              src={item.img}
              alt=""
            />
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
                onClick={()=>cancelHandler(item)}
              >
                Cancel Booking
              </button>
            </div>
          </div>
        </>
      ))}
    
    </div>
      }
      {loading && 
       <h1>loading ...</h1>

      }
  </>

  );
};

export default Cart;
