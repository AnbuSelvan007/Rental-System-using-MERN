import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card';

const Bikes = () => {
  const [bikeDetails, setBikeDetails] = useState([]);
  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/bikes");
        setBikeDetails(response.data); 
      } catch (error) {
        console.error("Error fetching bikes:", error);
      }
    };

    fetchBikes();
  }, []); 
  return (
    <div className='bikesContainer'>
       {  
        bikeDetails.map((item,index)=>(
          <Card item={item} key={index}/>
        ))
         
      }
    </div>
  )
}

export default Bikes
