const express=require("express")
const app=express()
const cors=require('cors')
require('dotenv').config()
const bodyParser=require('body-parser')
const logger=require('./config/logger')
const {databaseConnection}=require('./config/db')
const warningLogger=require('./config/warning_logger')
const morgan_log=require('./middleware/loggerMiddleware')

//routes
const rootRouter=require('./routes/index')



//middle ware
app.use(cors())
app.use(express.json())
app.use(bodyParser.json({limit:'50mb'}))
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}))


// logger middleware
app.use(morgan_log)
warningLogger()
//database connection initialising
databaseConnection()


//main Router
 app.use('/',rootRouter)

 app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Welcome to quiz app"
    })
 })


//server 
app.listen('2500','0.0.0.0',()=>{
    try{logger.info("Server started succesfully on port :2500")}catch(error){
        logger.error("Error in starting server",error)
    }
})