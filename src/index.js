const express=require("express")
const app=express()
const cors=require('cors')
require('dotenv').config()
const bodyParser=require('body-parser')
const logger=require('./config/logger')
const {databaseConnection}=require('./config/db')
const warningLogger=require('./config/warning_logger')
//test
const rootRouter=require('./routes/index')
//middle ware
app.use(cors())
app.use(express.json())
app.use(bodyParser.json({limit:'50mb'}))
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}))
const morgan_log=require('./middleware/loggerMiddleware')
const bodyParser = require("body-parser")

// logger middleware

app.use(morgan_log)
warningLogger()
//database connection initialising
 databaseConnection()



//test Routes
app.use('/',rootRouter)

//prod router

app.get('/',(req,res)=>{
    res.json({
        message:"new update test"
    })
})

app.get('/user',(req,res)=>{
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