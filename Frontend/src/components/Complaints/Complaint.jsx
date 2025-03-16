import React, { useContext, useState } from "react";
import "./Complain.css";
import axios from "axios";
import "ldrs/hatch";

// Default values shown

const ComplaintForm = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: userDetails.UserName,
    to: userDetails.UserEmail,
    message: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(
        "https://rental-system-using-mern-2.onrender.com/complaint",
        formData
      );
      alert("Complaint submitted successfully!,check you mail");
      setFormData({ ...formData, message: "", subject: "" });
    } catch (error) {
      alert("Failed to submit complaint");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="subheading">CUSTOMER CARE</h1>
      <div className="complaint-container">
        <h2>Register Your Complaint</h2>
        <form className="complaint-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            placeholder="Your Name"
            value={formData.name}
            disabled
          />

          <label>Email</label>
          <input
            type="email"
            name="to"
            required
            onChange={handleChange}
            placeholder="Your Mail"
            value={formData.to}
            disabled
          />

          <label>Complaint Type</label>
          <input
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Complaint Type"
          />

          <label>Complaint</label>
          <textarea
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Complaint"
          />
          {loading && (
            <div
              className="loader"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="https://usagif.com/wp-content/uploads/loading-86.gif"
                alt=""
                style={{ height: "40px" }}
              />
            </div>
          )}
          {!loading && (
            <button type="submit" className="submit-btn" onClick={handleSubmit}>
              Submit Complaint
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default ComplaintForm;
