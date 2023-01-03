const mongoose=require("mongoose")

const Service=mongoose.Schema({
    icon:String,
    job:String,
    process:String,
    post:String,
    Education:String,
    Experiance:String,
    location:String,
    description:String,
    linkText:String,
    link:String
})
module.exports=mongoose.model("services",Service)