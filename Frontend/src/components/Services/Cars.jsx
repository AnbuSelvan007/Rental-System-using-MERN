import React, { useState,useEffect } from 'react'
import Card from './Card'
import './Services.css'
import axios from 'axios'
const Cars = () => {
  const [carDetails, setCarDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://rental-system-using-mern-2.onrender.com/cars");
        setCarDetails(response.data); 
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
      finally{
        setLoading(false);
      }
    };

    fetchCars();
  }, []); 
  return (
    <>
 <h1 className='subheading'>CAR SERVICE</h1>
 {!loading && <div className='carsContainer'>
     
      {  
        carDetails.map((item,index)=>(
          <Card item={item} key={index}/>
        ))
         
      }
       
    </div>
    }

    {
        loading && <div className="loader" style={{width:"100vw"}}>
          <img src="https://usagif.com/wp-content/uploads/loading-86.gif" alt=""  height="80px" style={{textAlign:"center",marginTop:"50%",marginLeft:"40vw"}}/>
        </div>
      }
    </>
  )
}

export default Cars
