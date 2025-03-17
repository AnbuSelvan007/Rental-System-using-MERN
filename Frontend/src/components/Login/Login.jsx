import React, { useContext, useEffect, useState } from "react";
import {HashLoader} from 'react-spinners'
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import name from "../../../public/assets/name.png";
import password from "../../../public/assets/password.png";
import phone from "../../../public/assets/phone.png";
import email from "../../../public/assets/email.png";
import "ldrs/hatch";
import MiniLoader from "../Loaders/MiniLoader";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    name: "",
    password: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();
  const toggleForm = () => {
    setNewUser((prev) => !prev);
    setUser({ email: "", password: "", name: "", phone: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number (assuming user.phone is a string)
    if (newUser && user.phone.length !== 10) {
      console.log(user.phone.length);
      return alert("Invalid mobile number, must be 10 digits.");
    }

    setLoading(true);

    try {
      const endpoint = newUser
        ? "https://rental-system-using-mern-2.onrender.com/signup"
        : "https://rental-system-using-mern-2.onrender.com/signin";

      const response = await axios.post(endpoint, user);
      const { message, isSignUp, isLoggedIn, name, phone } = response.data;

      alert(message);

      if ((newUser && isSignUp) || (!newUser && isLoggedIn)) {
        const userDetails = {
          UserName: newUser ? user.name : name,
          UserEmail: user.email,
          UserPhone: newUser ? user.phone : phone,
        };
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        navigate("/Home");
      }
    } catch (error) {
      alert("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="lsContainer">
      {!newUser && (
        <div className="loginContainer">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="email">
              <span>
                <img src={email} alt="" />
              </span>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                onChange={handleChange}
                value={user.email}
                required
                style={{ background: "transparent" }}
              />
            </div>
            <div className="password">
              <span>
                <img src={password} alt="" />
              </span>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={user.password}
                required
              />
            </div>
            <button type="submit">Login</button>
            {loading && (
              <MiniLoader/>
            )}
            <p>Don't have an Account?</p>
            <button onClick={toggleForm}>SignUp</button>
          </form>
        </div>
      )}
      {newUser && (
        <div className="signupContainer">
          <form onSubmit={handleSubmit}>
            <h1>SignUp</h1>
            <div className="name">
              <span>
                <img src={name} alt="" />
              </span>
              <input
                type="text"
                placeholder="FullName"
                name="name"
                onChange={handleChange}
                value={user.name}
                required
              />
            </div>
            <div className="email">
              <span>
                <img src={email} alt="" />
              </span>
              <input
                type="email"
                placeholder=" Email ID"
                name="email"
                onChange={handleChange}
                value={user.email}
                required
              />
            </div>
            <div className="password">
              <span>
                <img src={password} alt="" />
              </span>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={user.password}
                required
              />
            </div>
            <div className="phone">
              <span>
                <img src={phone} alt="" />
              </span>
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                onChange={handleChange}
                value={user.phone}
                required
              />
            </div>

            <button type="submit">SignUp</button>
            {loading && (
             <MiniLoader/>
            )}
            <p>Already have an Account?</p>
            <button onClick={toggleForm}>Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
