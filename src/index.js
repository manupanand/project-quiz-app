const express=require("express")
const app=express()
const cors=require('cors')
require('dotenv').config()

//module import
const {databaseConnection}=require('./config/db')

//middle ware
app.use(cors())
app.use(express.json())

//Routes
app.get('/',(req,res)=>{
    res.json({
        message:"new update test"
    })
})

app.get('/route',(req,res)=>{
    res.json({
        message:"new route test"
    })
})
app.get('/test',async(req,res,next)=>{
    await databaseConnection();
    res.json({
        message:"connecting to database"
    })
})

app.listen('2500','0.0.0.0',()=>{
    console.log("app listening to port 2500")
})