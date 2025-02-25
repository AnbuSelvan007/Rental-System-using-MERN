const express=require('express')
const app=express();
const dotenv=require('dotenv')
const mdb=require('mongoose')
const path=require('path')
const  user=require('./model/signupSchema')
const bcrypt=require('bcrypt')
dotenv.config();
mdb.connect(process.env.MONGODB_URL).then(()=>console.log("connection successfull")).catch((err)=>console.log("connection unsuccessfull", err))

const port=5000;


app.use(express.json())

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"view","Login.html"))

})

app.post('/signup',async(req,res)=>{
  try{
   
    const {name,email,password,phone}=req.body;
   const isExist=await user.findOne({email})
   if(isExist)
   {
    res.status(414).json({message:"email already exists"})
   }
   const hashedPassword=await bcrypt.hash(password,10)
    const newUser=new user({
      name:name,
      email:email,
      password:hashedPassword,
      phone:phone

    })
    newUser.save();

    res.status(200).json({message:"SignUP Successfull"})
  }
  catch(err)
  {
    console.log(err)
    res.status(404).json({message:"SignUP Unsuccessfull"})
  }
})

app.post('/signin',async(req,res)=>{
    try{
      const {email,password}=req.body;
      const data=await user.findOne({email})
      if(!data)
        res.status(414).json({message:"Invalid email"})
      const isMatched=await bcrypt.compare(password,data.password)
      if(isMatched)
        res.status(200).json({message:"SignIn Successfull"})
      else
        res.status(414).json({message:"wrong password"})
    }
    catch(err){
      console.log(err)
      res.status(404).json({message:"SignIn Unsuccessfull"})
    }
})
app.listen(port,()=>console.log(`server is running in http://localhost:5000`))
