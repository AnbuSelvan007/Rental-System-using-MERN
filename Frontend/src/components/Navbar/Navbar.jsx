import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar-container'>
       
       <Link to="/Home">Home</Link>
       <Link to="/About">About</Link>
       <Link to="/Services">Services</Link>
       <Link to="/Complaints">Complaints</Link>
     
      
    </div>
  )
}

export default Navbar


{/* <Link to="/Cars">Cars</Link>
<Link to="/Bikes">Bikes</Link>
<Link to="/Equipments">Equipments</Link> */}