import React, { useState } from "react";
import "./Complain.css";
import axios from "axios";

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/send-email", formData);
      alert("Complaint submitted successfully!");
    } catch (error) {
      alert("Failed to submit complaint.");
    }
  };

  return (
    <div className="complaint-container">
      <h2>Register Your Complaint</h2>
      <form className="complaint-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" required onChange={handleChange} placeholder="Your Name" />

        <label>Email</label>
        <input type="email" name="email" required onChange={handleChange} placeholder="Your Mail"/>

        <label>Complaint</label>
        <textarea name="message" rows="4" required onChange={handleChange} placeholder="Your Complaint"/>

        <button type="submit" className="submit-btn">Submit Complaint</button>
      </form>
    </div>
  );
};

export default ComplaintForm;

