const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mdb = require("mongoose");
const path = require("path");
const user = require("./model/signupSchema");
const bcrypt = require("bcryptjs");
const bodyparser = require("body-parser");
const cors = require("cors");
const nodemailer=require('nodemailer')
const {Home_Details,About_Details}=require('./model/HomeAbout')
const { Bikes, Cars, Vans, Bicycles,Services } = require("./model/serviceDetails");
const Bookings = require("./model/bookingDetails");
dotenv.config();
mdb
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connection successfull"))
  .catch((err) => console.log("connection unsuccessfull", err));

const port = 5000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "Login.html"));
});

//Login.jsx
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const isExist = await user.findOne({ email });
    if (isExist) {
      return res
        .status(200)
        .json({ message: "email already exists", isSignUp: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new user({
      name: name,
      email: email,
      password: hashedPassword,
      phone: phone,
    });
    newUser.save();
    res.status(200).json({ message: "SignUP Successfull", isSignUp: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "SignUP Unsuccessfull", isSignUp: false });
  }
});

app.post("/signin", async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    const data = await user.findOne({ email });

    if (!data) return res.status(200).json({ message: "Invalid email" });
    const isMatched = await bcrypt.compare(password, data.password);
    if (isMatched) {
      res.status(200).json({ message: "SignIn Successfull", isLoggedIn: true,phone:data.phone,name:data.name });
    } else {
      res.status(200).json({ message: "wrong password", isLoggedIn: false });
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "SignIn Unsuccessfull", isLoggedIn: false });
  }
});

//upadte profile
app.get("/userdetails/:email", async (req, res) => {
  try {
  
    const email=req.params.email;
    const userdetails= await user.findOne({email });
    if (!userdetails) return res.status(404).json({ error: "user not found" });
    res.json(userdetails);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.patch("/userdetails/:email",async(req,res)=>{
  try{
    const email=req.params.email;
    const updateData=req.body;
    await user.updateOne({ email: email }, { $set: updateData });
    const updated= await user.findOne({email});
    res.json(updated);
  }
  catch(err){
    console.log(err)
    res.status(500).json({ error:"Internal server error" });
  }
    

    
})
// services.jsx
app.post("/services", (req, res) => {
  try {
    const { name, route, img } = req.body;
    const newService = new Services({
      name: name,
      route:route,
      img: img,
    });
    newService.save();
    res
      .status(200)
      .json({ message: "Service added Successfull", isCarAdded: true });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Service added Unsuccessfull", isCarAdded: false });
  }
});

app.get("/services", async (req, res) => {
  try {
    const services_details = await Services.find();
    if (!services_details) return res.status(404).json({ error: "cars not found" });
      res.json(services_details);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//cars.jsx
app.post("/cars", (req, res) => {
  try {
    const { name, price, img } = req.body;
    const newCar = new Cars({
      name: name,
      price: price,
      img: img,
    });
    newCar.save();
    res
      .status(200)
      .json({ message: "Car added Successfull", isCarAdded: true });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "car added Unsuccessfull", isCarAdded: false });
  }
});

app.get("/cars", async (req, res) => {
  try {
    const cars = await Cars.find({});
    if (!cars) return res.status(404).json({ error: "cars not found" });
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//vans.jsx
app.post("/vans", (req, res) => {
  try {
    const { name, price, img } = req.body;
    const newVan = new Vans({
      name: name,
      price: price,
      img: img,
    });
    newVan.save();
    res
      .status(200)
      .json({ message: "van added Successfull", isVanAdded: true });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "van added Unsuccessfull", isVanAdded: false });
  }
});

app.get("/vans", async (req, res) => {
  try {
    const vans = await Vans.find({});
    if (!vans) return res.status(404).json({ error: "vans not found" });
    res.json(vans);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//bikes.jsx
app.post("/bikes", (req, res) => {
  try {
    const { name, price, img } = req.body;
    const newBike = new Bikes({
      name: name,
      price: price,
      img: img,
    });
    newBike.save();
    res
      .status(200)
      .json({ message: "Bike added Successfull", isBikeAdded: true });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Bike added Unsuccessfull", isBikeAdded: false });
  }
});


app.get("/bikes", async (req, res) => {
  try {
    const bikes = await Bikes.find({});
    if (!bikes) return res.status(404).json({ error: "bikes not found" });
    res.json(bikes);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//bicycles.jsx
app.post("/bicycles", (req, res) => {
  try {
    const { name, price, img } = req.body;
    const newBicycle = new Bicycles({
      name: name,
      price: price,
      img: img,
    });
    newBicycle.save();
    res
      .status(200)
      .json({ message: "Bicycle added Successfull", isBicycleAdded: true });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Bicycle added Unsuccessfull", isBicycleAdded: false });
  }
});

app.get("/bicycles", async (req, res) => {
  try {
    const bicycles = await Bicycles.find({});
    if (!bicycles) return res.status(404).json({ error: "bycycles not found" });
    res.json(bicycles);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//bookingdetails.jsx
app.post("/bookingdetails", (req, res) => {
  try {
    const {
      customername,
      price,
      phone,
      count,
      days,
      withdriver,
      date,
      img,
      vehiclename,
      email,
    } = req.body;

    const newBooking = new Bookings({
      customername: customername,
      price: price*count,
      phone: phone,
      count: count,
      days: days,
      withdriver: withdriver,
      date: date,
      img: img,
      vehiclename: vehiclename,
      email: email,
    });
    newBooking.save();
    res
      .status(200)
      .json({ message: "Booking added Successfull", isBookingAdded: true });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Booking added Unsuccessfull", isBookingAdded: false });
  }
});


//cart.jsx data
app.get("/bookingdetails/:email", async (req, res) => {
  try {
  
    const email=req.params.email;
    const bookings = await Bookings.find({email });
    if (!bookings) return res.status(404).json({ error: "bookings not found" });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/bookingdetails/:id", async (req, res) => {
  
    try {
      const deletedItem = await Bookings.deleteOne({_id:req.params.id});
      if (!deletedItem) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.json({ message: "Item deleted successfully", deletedItem });
    } catch (error) {
      res.status(500).json({ message: "Error deleting item", error });
    }

});

// About.jsx
app.get('/about',async(req,res)=>{
  try{
    const data= await About_Details.find({});
    if(!data)
      return res.status(404).json({message:"data not found"})
    res.json(data)

  }
  catch(err)
  {
    res.status(500).json({message:"Internal Error"})
  }
  

})

app.post('/about',(req,res)=>{
  try{
   const {name,img,para}=req.body;
   const newDetail=new About_Details({
     name:name,
     img:img,
     para:para,
    
   })
   newDetail.save();
   res.status(200).json({message:"Home detail Added successfully"})
  }
  catch(err)
  {
   res.status(500).json({message:"Internal server Error"})
   console.log(err)
  }
})

// Home.jsx
app.get('/home',async(req,res)=>{
  try{
    const data= await Home_Details.find({});
    if(!data)
      return res.status(404).json({message:"data not found"})
    res.json(data)

  }
  catch(err)
  {
    res.status(500).json({message:"Internal Error"})
  }

})

app.post('/home',(req,res)=>{
   try{
    const {name,img,para1,para2}=req.body;
    const newDetail=new Home_Details({
      name:name,
      img:img,
      para1:para1,
      para2:para2
    })
    newDetail.save();
    res.status(200).json({message:"Home detail Added successfully"})
   }
   catch(err)
   {
    res.status(500).json({message:"Internal server Error"})
   }
})



//complaint mailing UNDER CONSTRUCTION

// Create a transporter using Gmail (or another real SMTP provider)



app.post("/complaint", async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Use App Password, NOT your Gmail password
    },
  });
  
  try {
    const { to, subject, message,name } = req.body;
    let mailOptions = {
            from: '"rentalsupport@gmail.com" <narutoshinchan1234@gmail.com>',
            to:to,
            subject: "Complaint Received",
            text: `Dear ${name},\n\nYour complaint regarding "${subject}" has been received:\n\n"${message}"\n\nOur team will get back to you shortly.\n\nBest Regards,\nQuality Renters Support Team`,
          };
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent successfully!"});
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});


app.listen(port, () =>
  console.log(`server is running in http://localhost:5000`)
);
