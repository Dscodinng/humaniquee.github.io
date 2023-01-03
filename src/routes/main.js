const express=require('express')
const{route} = require('express/lib/application')
const Service = require('../models/Service')
const Slider = require('../models/Slider')

const routes=express.Router()

routes.get("/",async (req,res)=>{
    const slides= await Slider.find()
    res.render("index",{
        slides:slides
    });
})
routes.get('/gallery',async (req,res)=>{
    const slides= await Slider.find()
    res.render("gallery",{
    slides:slides});
})
routes.get('/job',async (req,res)=>{
    const slides= await Slider.find()
    const services=await Service.find()
    // console.log(slides)
    res.render("job",{

        slides:slides,
        services:services
    });
});
routes.get('/services',(req,res)=>{
    res.render("services")
})
routes.get('/aboutus',(req,res)=>{
    res.render("aboutus")
})
routes.get('/cotactus',(req,res)=>{
    res.render("cotactus")
})



module.exports=routes