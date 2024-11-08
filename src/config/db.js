const mongoose =require('mongoose')
require('dotenv').config()

const mongoURL= process.env.MONGO_LOCAL|| process.env.MONGO_ATLAS
const databaseConnection= async()=>{
    try{
            await mongoose.connect(mongoURL,)
    }catch(error){
        console.log("Error in database  connection",error)
    }
}
module.exports={databaseConnection}