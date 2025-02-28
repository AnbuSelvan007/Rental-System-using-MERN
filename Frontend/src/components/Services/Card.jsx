import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Card = ({item}) => {
  const navigate=useNavigate();
    const submitHandler=()=>{
       navigate('/BookingDetails',{state:item.price})

    }
  return (
    <div className='cardContainer'>
        <div className="imgContainer">
        <img src={item.img} alt="" />
        </div>
     
      <div className="textContainer">
        <div className="group">
        <h2>{item.name}</h2>
        <p>{`${item.price}/Hour`}</p>
        </div>
        <button onClick={submitHandler}>Rent Now</button>
        {/* <button><Link to='/BookingDetails' style={{textDecoration:"none",color:"white"}}>Rent Now</Link></button> */}
      </div>
    </div>
  )
}

export default Card
