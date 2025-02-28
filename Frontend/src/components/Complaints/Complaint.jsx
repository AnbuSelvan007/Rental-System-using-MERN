import React, { useContext, useState } from "react";
import "./Complain.css";
import { UserContext } from "../../App";
import axios from "axios";

const ComplaintForm = () => {
  const {userprof,setUserprof}=useContext(UserContext)
  const [formData, setFormData] = useState({
    name:userprof.userName,
    email:userprof.userEmail,
    message: "",
    complaintType:""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   await axios.post("http://localhost:5000/send-email", formData);
    //   alert("Complaint submitted successfully!");
    // } catch (error) {
    //   alert("Failed to submit complaint.");
    // }
    alert(`Dear ${formData.name},\n\nYour complaint regarding "${formData.complaintType}" has been received:\n\n"${formData.message}"\n\nOur team will get back to you shortly.\n\nBest Regards,\nCustomer Support`)
  };

  return (
    <div className="complaint-container">
      <h2>Register Your Complaint</h2>
      <form className="complaint-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" required onChange={handleChange} placeholder="Your Name" value={formData.name}/>

        <label>Email</label>
        <input type="email" name="email" required onChange={handleChange} placeholder="Your Mail" value={formData.email}/>

        <label>Complaint Type</label>
        <input type="text" name="complaintType" required onChange={handleChange} placeholder="Complaint Type"/>

        <label>Complaint</label>
        <textarea name="message" rows="4" required onChange={handleChange} placeholder="Your Complaint"/>

        <button type="submit" className="submit-btn">Submit Complaint</button>
      </form>
    </div>
  );
};

export default ComplaintForm;

