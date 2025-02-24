import React from "react";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div>
      Services
      <Link to="/Services/Cars">Cars</Link>
      <Link to="/Services/Bikes">Bikes</Link>
      <Link to="/Services/Equipments">Equipments</Link>
    </div>
  );
};

export default Services;
