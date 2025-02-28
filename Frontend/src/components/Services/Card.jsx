import React from 'react'


const Card = ({item}) => {
    const submitHandler=()=>{
        console.log(item)
    }
  return (
    <div className='cardContainer'>
        <div className="imgContainer">
        <img src={item.img} alt="" />
        </div>
     
      <div className="textContainer">
        <h2>{item.name}</h2>
        <p>{`${item.price}/Hour`}</p>
        <button onClick={submitHandler}>Rent Now</button>
      </div>
    </div>
  )
}

export default Card
