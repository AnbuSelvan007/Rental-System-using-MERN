// const http=require('http')
// http.createServer((req,res)=>{
//     res.write("hello");
//     res.end();
// }).listen(8000,()=>console.log("server running at port 8000"));
// require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Sample Route
app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
