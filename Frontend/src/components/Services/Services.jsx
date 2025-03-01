import React from "react";
import { Link,useNavigate } from "react-router-dom";
import './Services.css'
const serviceData = [
  {
    id: 1,
    name: "Car",
    route: "/Cars",
    img: "https://wallpaperaccess.com/full/1656658.jpg",
  },
  {
    id: 2,
    name: "Bike",
    route: "/Bikes",
    img: "http://wallpapercave.com/wp/wp1860926.jpg",
  },
  {
    id: 3,
    name: "Bicycle",
    route: "/Bicycles",
    img: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    name: "Van",
    route: "/Vans",
    img: "https://images.pexels.com/photos/18384420/pexels-photo-18384420/free-photo-of-classic-vw-van.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
const Services = () => {
  const navigate=useNavigate();
  return (
    <div className="serviceContainer">
      <h1>Services Offered By US</h1>
      <div className="serviceCards">
      {serviceData.map((item) => (
        <div className="wrapper">
          <div className="card">
          <img src={item.img} alt="" />
            <button onClick={()=>navigate(`${item.route}`)}>Rent {item.name}</button>
          </div>
        
        </div>
      ))}
    </div>
    </div>
  );
};

export default Services;
