import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Services.css";
import axios from "axios";
import "ldrs/hatch";
import Loader from "../Loaders/Loader";

const Services = () => {
  const navigate = useNavigate();
  const [serviceDetails, setServiceDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://rental-system-using-mern-2.onrender.com/services"
        );
        setServiceDetails(response.data);
      } catch (error) {
        console.error("Error fetching vans:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);
  return (
    <>
      <h1 className="subheading">OUR SERVICES</h1>
      {!loading && (
        <div className="serviceContainer">
          <div className="serviceCards">
            {serviceDetails.map((item) => (
              <div className="wrapper">
                <div className="card">
                  <img src={item.img} alt="" />
                  <button onClick={() => navigate(`${item.route}`)}>
                    Rent {item.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {loading && (
        <Loader/>
      )}
    </>
  );
};

export default Services;
