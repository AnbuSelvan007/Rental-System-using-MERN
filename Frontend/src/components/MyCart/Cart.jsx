import React, { useState, useEffect } from "react";
import "./Cart.css";

const Cart = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const viewHandler = () => {
    setShow((prev) => !prev);
  };
  const cancelHandler = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/bookingdetails/${e.target._id}`
      );
      setCartItems(response.data);
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false); // Stop loading after fetching
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:5000/bookingdetails/${email}`
        );
        setCartItems(response.data);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };

    fetchData();
  }, []);
  return (
    <div className="cartContainer">
      {cartItems.map((item) => (
        <>
          <div className="cartWrapper">
            <img
              src={item.img}
              alt=""
            />
            <h2>{item.name}</h2>
            <button onClick={viewHandler}>View</button>
          </div>

          <div className={show ? "details show" : "details"}>
            <div className="box">
              <h2> Name</h2>
              <h2>{item.customername}</h2>
            </div>
            <div className="box">
              <h2>Rent Price</h2>
              <h2>{`${item.price}/hour per Item`}</h2>
            </div>
            <div className="box">
              <h2>product Count</h2>
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
                onClick={cancelHandler}
              >
                Cancel Booking
              </button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Cart;
