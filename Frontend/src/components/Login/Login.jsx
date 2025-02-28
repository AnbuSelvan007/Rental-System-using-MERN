import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import name from '../../../public/assets/name.png'
import password from '../../../public/assets/password.png'
import phone from '../../../public/assets/phone.png'
import email from '../../../public/assets/email.png'
import { UserContext } from "../../App";
const Login = () => {
  const {userProf,setUserprof}=useContext(UserContext)
  const [newUser, setNewUser] = useState(false);
  const [user,setUser]=useState({name:"",password:"",phone:"",email:""})
  const navigate = useNavigate();

  const toggleForm = () => {
    setNewUser(prev=>!prev)
    setUser({ email: "", password: "", name: "",phone:""});

  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    //signup
    if(newUser)
    {
     
       const response=await axios.post("http://localhost:5000/signup",user)
       const message=response.data.message;
       const isSignUp=response.data.isSignUp;
       alert(message)
       if(isSignUp)
       {
        setUserprof({userName:user.name,userEmail:user.email,userPhone:user.phone})
        console.log(userProf)
         navigate("/Home")
       }
        
    }
     //login
    else
    {
      const response=await axios.post("http://localhost:5000/signin",user)
      const message=response.data.message;
      const isLogIn=response.data.isLoggedIn;
      alert(message)
      if(isLogIn) 
      {
        setUserprof({userName:response.data.name,userEmail:user.email,userPhone:response.data.phone})
        navigate("/Home")
      }
      console.log(response)
      
    }
  };

  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  return (
    <div className="lsContainer">
      {!newUser && (
        <div className="loginContainer">
         
          <form onSubmit={handleSubmit} >
          <h1>Login</h1>
          <div className="email">
            <span><img src={email} alt="" /></span>
          <input type="email" placeholder="Enter Email" name="email"   onChange={handleChange} value={user.email} required  style={{background:"transparent"}}/>

          </div>
          <div className="password">
            <span><img src={password} alt="" /></span>
          <input type="password" placeholder="Password" name="password"  onChange={handleChange} value={user.password} required />
          </div>
            <button type="submit">Login</button>
            <p>Don't have an Account?</p>
            <button onClick={toggleForm }>SignUp</button>
          </form>
        </div>
      )}
      {newUser && (
        <div className="signupContainer">
         
          <form onSubmit={handleSubmit} >
          <h1>SignUp</h1>
          <div className="name">
            <span><img src={name} alt="" /></span>
            <input type="text" placeholder="FullName" name="name" onChange={handleChange} value={user.name}  required />
          </div>
          <div className="email">
            <span><img src={email} alt="" /></span>
            <input type="email" placeholder=" Email ID" name="email" onChange={handleChange} value={user.email} required />
          </div>
          <div className="password">
            <span><img src={password} alt="" /></span>
            <input type="password" placeholder="Password" name="password" onChange={handleChange} value={user.password} required />
          </div>
          <div className="phone">
            <span><img src={phone} alt="" /></span>
            <input type="number" placeholder="Phone Number" name="number" onChange={handleChange} value={user.number} required />
          </div>
           
            <button type="submit">SignUp</button>
            <p>Already have an Account?</p>
            <button onClick={toggleForm}>Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
