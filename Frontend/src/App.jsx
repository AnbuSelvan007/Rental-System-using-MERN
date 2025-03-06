import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css'
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Bikes from "./components/Services/Bikes";
import Cars from "./components/Services/Cars";
import Login from "./components/Login/Login";
import Complaint from "./components/Complaints/Complaint";
import Navbar from "./components/Navbar/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'
import Bicycles from "./components/Services/Bicycles";
import Vans from "./components/Services/Vans";
import BookDetail from "./components/BookingDetails/BookDetail";
import Cart from "./components/MyCart/Cart";
export const UserContext = createContext();
function App() {
  const location=useLocation();
  return (
    <>
      {location.pathname!=='/' &&  <Navbar />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/Bikes" element={<Bikes />} />
          <Route path="/Bicycles" element={< Bicycles/>} />
          <Route path="/Vans" element={<Vans/>} />
          <Route path="/Complaints" element={<Complaint />} />
          <Route path="/BookingDetails" element={<BookDetail />} />
          <Route path="/Cart" element={<Cart />} />

        </Routes>
        
    </>
  );
}

export default App;
