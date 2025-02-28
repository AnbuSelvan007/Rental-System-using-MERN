import React from 'react'
import Navbar from '../Navbar/Navbar'
import './About.css'
const about_details = [
  {
    id: 1,
    name: " Experience the Best Rental Service with Us!",
    img:"https://wallpaperaccess.com/full/2374139.jpg",
    para: "At [Your Website Name], we are committed to providing top-tier rental services that cater to all your needs. Whether you're looking for a car for a road trip, a bike for daily commuting, or equipment for an event, we have everything covered. We ensure a hassle-free experience with high-quality rentals, unbeatable prices, and top-notch customer support.",
   
  },
  {
    id: 2,
    name: "10,000+ Happy Customers – Trusted by Thousands for Reliable and Affordable Rentals",
    img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/24174/images/zbEyCBn3QaWRsPoxERCk_Picture1.jpg",
    para:"Customer satisfaction is our top priority. With over 10,000 satisfied customers, we take pride in delivering exceptional rental services. Whether you need a car for your vacation, a bike for your daily commute, or equipment for a special event, we make the process seamless and trustworthy.Our rental system is designed to provide a stress-free experience, ensuring that you get the best quality vehicles and equipment at the best rates. From solo travelers to families and businesses, our flexible options cater to everyone's needs.",
  },
  {
    id: 3,
    name: "#1 Rental Service in Chennai – Top-Rated for Quality and Customer Satisfaction",
    img: "https://img.freepik.com/free-photo/row-new-cars-port_335224-806.jpg?t=st=1740585230~exp=1740588830~hmac=a5429993e1fdb4d00893e72d76981418400bbf2fc62ef705113e539dcfa60015&w=996",
    para:"Our customers consistently rate us as the best rental service in Chennai because of our top-quality vehicles, affordability, and excellent customer service.We go the extra mile to provide well-maintained vehicles and equipment, ensuring a smooth and enjoyable rental experience. Whether you need a car for business, leisure, or an event, we are here to make your journey hassle-free.",
   
  },
  {
    id: 4,
    name: "500+ Vehicles  – A Wide Variety of Options to Fit Every Need",
    img:"https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    para:"Luxury, Economy, and SUV Cars – Perfect for vacations, business trips, or daily travel.Bikes & Scooters – Quick and affordable travel for city rides.Event Essentials – Speakers, chairs, benches, and more for seamless event planning.",
  },
  {
    id: 5,
    name: "24/7 Customer Support – Assistance Whenever You Need It",
    img: "https://storage.googleapis.com/cdn-devwebsite-bolddesk/media/2023/07/483a3ef5-customer-support-team-compressed.jpg",
    para:"Need help with your rental? Our dedicated customer support team is available 24/7 to assist you with:Booking inquiries – Get answers to all your questions. Last-minute rentals – Need a vehicle urgently? We got you! Emergency assistance – Get quick help while on the go."
   
  },
  // {
  //   id: 6,
  //   name: "Best Price Guaranteed – High-Quality Rentals at Unbeatable Prices",
  //   img: "https://img.freepik.com/free-vector/yellow-badge-design_1314-5.jpg?uid=R141627284&ga=GA1.1.2024417662.1710438653&semt=ais_hybrid",
  //   para1:"We offer budget-friendly rental options with transparent pricing—no hidden costs! Enjoy the best rates without compromising on quality, making your rental experience smooth and affordable. Book Now & Experience the Best Rental Service Today!"
   
  // },
];
const About = () => {
  return (
    <div className='aboutContainer'>
      {
        about_details.map((item)=>(
          <div className="wrapper">
            <div className="heading"><h1>{item.name}</h1></div>
            <div className="img"><img src={item.img} alt="" /></div>
            <div className="para"><p>{item.para}</p></div>
          </div>
        ))
      }
    </div>
  )
}

export default About
