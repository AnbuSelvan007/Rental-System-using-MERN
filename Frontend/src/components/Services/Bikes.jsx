import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card';
import './Services.css'
const Bikes = () => {
  const [bikeDetails, setBikeDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchBikes = async () => {
      try {
        setLoading(true)
        const response = await axios.get("https://rental-system-using-mern-2.onrender.com/bikes");
        setBikeDetails(response.data); 
      } catch (error) {
        console.error("Error fetching bikes:", error);
      }
      finally{
          setLoading(false);
       
      }
    };

    fetchBikes();
  }, []); 
  return (
    <>
    <h1 className='subheading'>BIKE SERVICE</h1>
    <div className='bikesContainer'>
       { !loading &&
        bikeDetails.map((item,index)=>(
          <Card item={item} key={index}/>
        ))
         
      }
    </div>

    {loading && (
        <div className="loader" style={{ width: "100vw" }}>
          <img
            src="https://usagif.com/wp-content/uploads/loading-86.gif"
            alt=""
            height="80px"
            style={{
              marginTop: "100px",  
            }}
          />
        </div>
      )}
    </>
  )
}

export default Bikes
