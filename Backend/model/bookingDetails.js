const mdb=require('mongoose')
const bookingDetails=mdb.Schema(
    {
        customername:String,
        price:String,
        phone:Number,
        count:Number,
        days:Number,
        withdriver:Boolean,
        date:String,
        img:String,
        vehiclename:String,
        email:String
       
    }
)

const Bookings=mdb.model("booking_details",bookingDetails)
module.exports=Bookings;