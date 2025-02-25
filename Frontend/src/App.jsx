import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Bikes from "./components/Services/Bikes";
import Cars from "./components/Services/Cars";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";
import Complaint from "./components/Complaints/Complaint";
import Navbar from "./components/Navbar/Navbar";
import Equipments from "./components/Services/Equipments";
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Services/Cars" element={<Cars />} />
          <Route path="/Services/Bikes" element={<Bikes />} />
          <Route path="/Services/Equipments" element={<Equipments />} />
          <Route path="/Complaints" element={<Complaint />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
