import React,{ useState,useEffect} from 'react'
import Card from './Card';
import axios from 'axios';
import './Services.css'
const Vans = () => {
  const [vanDetails, setVanDetails] = useState([]);
   const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVans = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://rental-system-using-mern-2.onrender.com/vans");
        setVanDetails(response.data); 
      } catch (error) {
        console.error("Error fetching vans:", error);
      }
      finally{
        setLoading(false)
      }
    };

    fetchVans();
  }, []); 
  return (
    <>
     <h1 className='subheading'>VAN SERVICE</h1>
   
    <div className='vansContainer'>
       {  
        vanDetails.map((item,index)=>(
          <Card item={item} key={index}/>
        ))
         
      }
    </div>
    </>
  )
}

export default Vans
