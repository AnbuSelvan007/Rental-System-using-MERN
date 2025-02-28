const express=require('express')
const nodemailer=require('nodemailer')
const app=express()

app.post("/complaint", async (req, res) => {
    const { name, email, message } = req.body;
  
    if (!name || !email  || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    try {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "narutoshinchan1234@gmail.com", // Your Gmail
          pass: "your-email-password", // Use an App Password if needed
        },
      });
  
      let mailOptions = {
        from: "narutoshinchan1234@gmail.com",
        to: email,
        subject: "Complaint Received",
        text: `Dear ${name},\n\nYour complaint regarding "${complaintType}" has been received:\n\n"${message}"\n\nOur team will get back to you shortly.\n\nBest Regards,\nCustomer Support`,
      };
  
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Complaint submitted successfully. Email sent!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error submitting complaint" });
    }
  });