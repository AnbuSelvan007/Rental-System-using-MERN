import React from "react";
import Car from "../../../public/assets/Car.jpg";
import van from "../../../public/assets/van.jpg";
import Bike from "../../../public/assets/Bike.jpg";
import Cycle from "../../../public/assets/Cycle.jpg";
import { useIndexContext } from "../customHook/IndexContext";
const SliderItems = [
  {
    id: 1,
    img: Car,
    title: "CAR RENTING",
  },
  {
    id: 2,
    img: Bike,
    title: "BIKE RENTING",
  },
  {
    id: 3,
    img: Cycle,
    title: "BICYCLE RENTING",
  },
  {
    id: 3,
    img: van,
    title: "VAN RENTING",
  },
];
// const dynamic=JSON.parse(localStorage.getItem("dynamic"))
// const indexStyle={
//     zIndex:dynamic.opacity!=null?-1:1,
// }
const Slider = () => {
  const { status } = useIndexContext();
  const indexStyle = {
    zIndex: status ? -1 : 1,
  };
  return (
    <div className="sliderContainer" style={indexStyle}>
      {SliderItems.map((item) => (
        <div className="wrapper">
          <div className="sliderItem">
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
