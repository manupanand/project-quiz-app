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
// Set the view engine to EJS and specify the views directory
app.set('view engine', 'ejs');
app.set('views', './src/views');

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