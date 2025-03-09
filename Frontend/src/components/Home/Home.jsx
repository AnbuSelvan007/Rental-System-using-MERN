import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import axios from "axios";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import loading from "../../../public/assets/loading.gif";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [home_details, setHome_details] = useState([]);

  useState(() => {
    const fetchHome = async () => {
      try {
        setLoading(true);
        const response = await axios
          .get("https://rental-system-using-mern-2.onrender.com/home")
          .catch((err) => console.log(err));
        setHome_details(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchHome();
  }, []);
  return (
    <div className="homeContainer">
      <div className="dashboard subheading">
        <h2>DashBoard</h2>
      </div>
      <Slider />
      <div className="subheading">
        <h2>Description About Our Servies</h2>
      </div>
      <div className="serviceDescription">
        {!loading &&
          home_details.map((item) => (
            <>
              <div className="title">
                <h3>{item.name}</h3>
              </div>
              <div className="wrapper">
                <div className="gifContainer">
                  <img src={item.img} alt="no-image " />
                </div>
                <div className="textContainer">
                  <div className="para1">{item.para1}</div>
                  <div className="para2">{item.para2}</div>
                </div>
              </div>
            </>
          ))}
        {loading && (
          <div className="loader" style={{ width: "100vw" }}>
            <img
              src="https://usagif.com/wp-content/uploads/loading-86.gif"
              alt=""
              height="80px"
              style={{
                textAlign: "center",
                marginTop: "50%",
                marginLeft: "40vw",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
