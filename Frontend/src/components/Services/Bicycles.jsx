import React, { useState, useEffect } from "react";
import "./Services.css";
import axios from "axios";
import Card from "./Card";
import Loader from "../Loaders/Loader";
const Bicycles = () => {
  const [bicycleDetails, setBicycleDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchBicycles = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://rental-system-using-mern-2.onrender.com/bicycles"
        );
        setBicycleDetails(response.data);
      } catch (error) {
        console.error("Error fetching vans:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBicycles();
  }, []);

  return (
    <>
      <h1 className="subheading">BICYCLE SERVICE</h1>
      {!loading && (
        <div className="bicyclesContainer">
          {bicycleDetails.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      )}

      {loading && (
        <Loader/>
      )}
    </>
  );
};

export default Bicycles;
