import React,{useState,useEffect} from "react";
import Slider from "./Slider";
import axios from "axios";
import "./Home.css";
import Navbar from "../Navbar/Navbar";

const service_details = [
  {
    id: 1,
    name: "Car Rental Service – Your Ride, Your Way!",
    img: "https://cdnl.iconscout.com/lottie/premium/thumb/driver-driving-car-animation-download-in-lottie-json-gif-static-svg-file-formats--taxi-sharing-pack-vehicle-animations-9169436.gif",
    para1:
      "Looking for a convenient and budget-friendly car rental? We’ve got you covered! Choose from our wide range of well-maintained cars and rent one that suits your needs. Whether you prefer to drive yourself or hire a professional driver, we offer both options to give you the flexibility you need. If you opt for a self-drive rental, simply provide a valid driving license and visit our office for a quick verification process. If you prefer a chauffeur-driven car, we have experienced drivers available for a smooth and stress-free journey at a slightly higher price.",
    para2:
      "With our transparent hourly pricing, you only pay for the time you use, making our service both affordable and flexible. Whether you need a car for a short city ride, a business trip, or a long road journey, we ensure a hassle-free rental experience. Book your ride today and enjoy the freedom of traveling at your convenience! ",
  },
  {
    id: 2,
    name: "Bike Rental Service – Ride with Freedom!",
    img: "https://cdnl.iconscout.com/lottie/premium/thumb/bike-animation-download-in-lottie-json-gif-static-svg-file-formats--vehicle-motorbike-motorcycle-ride-motor-pack-transport-animations-4574321.gif",
    para1:
      "Need a bike for your daily commute or a weekend adventure? We offer a variety of bikes and scooters at affordable rental prices. Whether you're looking for a fuel-efficient scooter for city rides or a powerful bike for long trips, we have the perfect ride for you. You can rent a bike with ease—just provide a valid driving license, visit our office for verification, and get on the road in no time!",
    para2:
      "Our pricing is based on hourly or daily rental plans, giving you complete flexibility to choose what suits you best. All our bikes are well-maintained and regularly serviced, ensuring a smooth and safe ride every time. Rent a bike today and experience the thrill of riding on your own terms! ",
  },
  {
    id: 3,
    name: "Bicycle Rentals – Explore the City at Your Own Pace!",
    img: "https://cdnl.iconscout.com/lottie/premium/thumb/bicycle-animated-icon-download-in-lottie-json-gif-static-svg-file-formats--cycle-ride-travel-conveyance-transport-pack-vehicle-icons-5901645.gif",
    para1:
      "Looking to discover the beauty of the city on two wheels? Our bicycle rental service offers a fantastic selection of bikes for every type of rider, whether you're a casual cyclist or an adventurous explorer. Enjoy the freedom to ride through scenic routes, parks, and urban landscapes while soaking in the sights and sounds around you.",
    para2:
      "With our affordable rates and flexible rental options, you can choose to rent a bicycle for a few hours, a day, or even longer! Each bike is regularly maintained and sanitized, ensuring a safe and enjoyable riding experience. Whether you're planning a leisurely ride with friends, a family outing, or a solo adventure, we have the perfect bike for you.Rent your bicycle today and embark on a memorable journey through the city at your own pace!",
  },
  {
    id: 4,
    name: "Traveller Van Rental – Perfect for Group Travel!",
    img: "https://cdnl.iconscout.com/lottie/premium/thumb/van-animated-icon-download-in-lottie-json-gif-static-svg-file-formats--bus-mini-car-vehicle-and-pack-icons-6235826.gif",
    para1:
      "Planning a family trip, corporate outing, or a group adventure? Our traveller van rental service offers spacious and comfortable vans that can accommodate large groups with ease. Whether you need a 10-seater, 12-seater, or even a 20-seater, we have the right van for your journey.",
    para2:
      "You can choose to rent with a driver for a stress-free ride or opt for a self-drive option, provided you have a valid driving license and complete a simple verification process at our office. Our vans are fully air-conditioned, well-maintained, and equipped with comfortable seating, making long trips more enjoyable.With flexible hourly and daily rental options, you can rent the van as per your travel needs. Book a traveller van today and enjoy a hassle-free group journey with comfort and convenience! ",
  }
];
const Home = () => {
  const [loading,setLoading]=useState(false)
  const [home_details,setHome_details ]=useState([])
  useState(()=>{

    const fetchHome = async () => {
    try{
      setLoading(true)
      const response= await axios.get("http://localhost:5000/home").catch((err)=>console.log(err))
      setHome_details(response.data)
    }
    catch(err){
      console.log(err)
    }
    finally{
      setLoading(false)
    }

  }
  fetchHome();
    
  },[])
  return (
    <div className="homeContainer">
      <div className="dashboard subheading">
        <h2>DashBoard</h2>
      </div>
      <Slider />
      <div className="subheading">
        <h2>Description About Our Servies</h2>
      </div>

      <div className="serviceDescription">
        { !loading && home_details.map((item) => (
          <>
           <div className="title">
           <h3>{item.name}</h3>
           </div>
          <div className="wrapper">
            <div className="gifContainer">
              <img
                src={item.img}
                alt="no-image "
              />
            </div>
            <div className="textContainer">
             
              <div className="para1">{item.para1}</div>
              <div className="para2">{item.para2}</div>
            </div>
          </div>
          </>
        ))}
        { loading && <h2>loading...</h2>

        }
      </div>
    </div>
  );
};

export default Home;
