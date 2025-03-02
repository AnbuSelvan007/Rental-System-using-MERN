import React,{useState,useEffect} from 'react'
import './Services.css'
import axios from 'axios';
import Card from './Card';
const Bicycles = () => {
  const [bicycleDetails, setBicycleDetails] = useState([]);
  useEffect(() => {
    const fetchBicycles = async () => {
      try {
        const response = await axios.get("https://rental-system-using-mern-2.onrender.com/bicycles");
        setBicycleDetails(response.data); 
      } catch (error) {
        console.error("Error fetching vans:", error);
      }
    };

    fetchBicycles();

  },[])

  return (
    <div className='bicyclesContainer'>
       {  
        bicycleDetails.map((item,index)=>(
          <Card item={item} key={index}/>
        ))
      }
    </div>
  )
}

export default Bicycles
