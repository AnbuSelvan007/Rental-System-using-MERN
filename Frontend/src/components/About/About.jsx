import React, { useState,useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './About.css'
import axios from 'axios'

const About = () => {
  const [loading,setLoading]=useState(false)
  const [about_details,setAbout_details ]=useState([])
  useState(()=>{
    const fetchAbout= async()=>{
    try{
      setLoading(true)
      const response=await axios.get("https://rental-system-using-mern-2.onrender.com/about").catch((err)=>console.log(err))
      setAbout_details(response.data)
      console.log(response)
    }
    catch{
      console.log(err)
    }
    finally{


        setLoading(false)
     
      
    }

  }
  fetchAbout();
    
  },[])
  return (
    <div className='aboutContainer'>
      {!loading && 
        about_details.map((item)=>(
          <div className="wrapper">
            <div className="heading"><h1>{item.name}</h1></div>
            <div className="img"><img src={item.img} alt="" /></div>
            <div className="para"><p>{item.para}</p></div>
          </div>
        ))
      }
      {
        loading && <h1 style={{textAlign:"center"}}>loading...</h1>
      }
    </div>
  )
}

export default About
