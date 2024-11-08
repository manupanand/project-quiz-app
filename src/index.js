const express=require("express")
const app=express()
const cors=require('cors')
require('dotenv').config()
const logger=require('./config/logger')
const {databaseConnection}=require('./config/db')
const warningLogger=require('./config/warning_logger')

//middle ware
app.use(cors())
app.use(express.json())
const morgan_log=require('./middleware/loggerMiddleware')

// logger middleware

app.use(morgan_log)
warningLogger()
//database connection initialising
 databaseConnection()



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
  
    res.json({
        message:"connecting to database"
    })
})
//server 
app.listen('2500','0.0.0.0',()=>{
    logger.info("Server started listening to port 2500")
})