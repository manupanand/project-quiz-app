const mongoose=require('mongoose')
const { boolean } = require('zod')

//schema for user

const userSchema=new mongoose.Schema({
        username:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            lowercase:true,
            minLength:5,
            maxLength:30
        },
        email:{
            type:String,
            required:true,
            trim:true,
            maxLength:50,
            minLength:6
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

        },
        privilege:{type:Boolean,
            default:false
        },
        createdAt:{
            type:Date,
            default:Date.now,
        }
})

const User= mongoose.model('User',userSchema)

module.exports=User