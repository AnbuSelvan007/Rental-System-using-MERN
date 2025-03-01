const mdb=require('mongoose')
const carServices=mdb.Schema(
    {
        name:String,
        price:String,
        img:String
       
    }
)
const vanServices=mdb.Schema(
    {
        name:String,
        price:String,
        img:String
       
    }
)
const bikeServices=mdb.Schema(
    {
        name:String,
        price:String,
        img:String
       
    }
)
const bicycleServices=mdb.Schema(
    {
        name:String,
        price:String,
        img:String
       
    }
) 

const serviceSchema=mdb.Schema({
    name:String,
    route:String,
    img:String
})

const Cars=mdb.model("car_services",carServices)
const Vans=mdb.model("van_services",vanServices)
const Bikes=mdb.model("bike_services",bikeServices)
const Bicycles=mdb.model("bicycle_services",bicycleServices)
const Services=mdb.model("services_details",serviceSchema)

module.exports={Cars,Vans,Bikes,Bicycles};