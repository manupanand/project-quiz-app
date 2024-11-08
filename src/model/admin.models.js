const mongoose=require('mongoose')

//schema for admin

const adminSchema=new mongoose.Schema({
        username:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            lowercase:true,
            minLength:5,
            maxLength:30
        },
        password:{
            type:String,
            required:true,
            trim:true,
            maxLength:50,
            minLength:6
        },
        firstName:{
            type:String,
            required:true,
            trim:true,
            maxLength:50,

        },
        lastName:{
            type:String,
            required:true,
            trim:true,
            maxLength:50,

        },createdAt:{
            type:Date,
            default:Date.now,
        }
})

const Admin= mongoose.model('Admin',adminSchema)

module.exports={Admin}