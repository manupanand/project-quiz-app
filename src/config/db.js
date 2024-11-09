const mongoose =require('mongoose')
require('dotenv').config()
const logger= require('../config/logger')

// environment variable to connect to database 
const mongoURL= process.env.MONGO_LOCAL|| process.env.MONGO_ATLAS
//database connection-mongodb
const databaseConnection= async()=>{
    try{
            await mongoose.connect(`${mongoURL}`)
            logger.info("Database connected succesfully")
    }catch(error){
        logger.error(JSON.stringify({ message: "Error in connecting to database", error: error.message || error }));
    }
}
module.exports={databaseConnection}