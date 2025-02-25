const mdb=require('mongoose')
const signupSchema=mdb.Schema(
    {
        name:String,
        email:String,
        password:String,
        phone:Number
    }
)
   


const user=mdb.model("userDetails",signupSchema)
module.exports=user;