const { request } = require("express")
const express=require("express")
const hbs=require("hbs")
const app=express()
const mongoose=require("mongoose")
const Detail=require("./models/Detail")
const Slider=require("./models/Slider")
const Service=require("./models/Service")
const routes=require('./routes/main')
app.use('/static',express.static("public"))
app.use('',routes)
// Template ennggine
app.set('view engine','hbs')
app.set('views','views')
hbs.registerPartials("views/partials")

//db conection
mongoose.connect("mongodb://localhost/website_tut",()=>{
    console.log("db conected")
    // Service.create([
    //     {
    //         icon:'fab fa-accusoft',
    //         job:'Job: Tellecallig Job (BPO)',
    //         process:'Process: Sales',
    //         post:'Post: Executive',
    //         Education:'Education: HSS or above',
    //         Experiance:'Experiece: Fresher',
    //         location:'Location: Adheri',
    //         description:'Job Requirement is exlined area',
    //         linkText:'https://www.google.coom',
    //         link:'Apply Now'
    //     }
    // ])
    // Slider.create([
    //     {
    //         title:"1st Heading",
    //         subTitle:'1st Subtitle',
    //         imageUrl:'/static/images/s1.jpg'
    //     },
    //     {
    //         title:"2st Heading",
    //         subTitle:'2st Subtitle',
    //         imageUrl:'/static/images/s2.jpg'
    //     },
    //     {
    //         title:"3st Heading",
    //         subTitle:'3st Subtitle',
    //         imageUrl:'/static/images/s3.jpg'
    //     },
    // ])


    
    // Detail.create({
    //     brandName:"Humaiquee",
    //     brandIconUrl:"https://media.istockphoto.com/id/1368424494/photo/studio-portrait-of-a-cheerful-woman.jpg?s=612x612&w=is&k=20&c=S6Je1dyOxHNSMuE3mweAATneAAH9l3u9zdJqN8S0xxc=",
    //     links:[{
    //         label:"Home",
    //         url:'/'
    //     },
    // {label:"job",
    // url:'/job'}]
    // })
})
mongoose.con
app.listen(process.env.PORT | 5556,()=>{
    console.log("server started")
})