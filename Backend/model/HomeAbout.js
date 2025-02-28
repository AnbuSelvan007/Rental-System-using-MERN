const mdb=require('mongoose')

const aboutSchema=mdb.Schema(
    {
        name:String,
        img:String,
        para: String
    }
)
const homeSchema=mdb.Schema(
    {
        name:String,
        img:String,
        para1: String,
        para2:String
    }
)

const Home_Details=mdb.model('homepage_details',homeSchema)
const About_Details=mdb.model('aboutpage_details',aboutSchema)
module.exports={Home_Details,About_Details}