// creating first database of user/admin /signup /signin 
const logger=require('../config/logger')
const inputValidate=require('../config/inputValidation')
const {User}=require('../model/user.models')
const {Admin}=require('../model/admin.models')
const inputvalidate = require('../config/inputValidation')
const encrypt=require('../config/crypt')
const generateToken=require('../config/jwt')
require('dotenv').config()


//variable
const ecncrypt_decrypt_key=process.env.ENCRYPT_SECRET_KEY
const jwtKey=process.env.JWT_SECRET_KEY

//user/question /admin/question

const userSignup=(req,res)=>{

    res.json({
        message:"test"
    })
}
const adminSignup= async(req,res)=>{
  try{
    //input validation
   
    const {success,error}=inputvalidate(req.body)
        if(!success){
        return res.status(411).json({
             message:"Incorrect inputs"
        })
        }
        logger.error("Error in validating input",error)
        // checking if user exists in database
        const existingUser= await Admin.findOne({
            username:req.body.username
        })
        if(!existingUser){
            logger.warn("User already exist")
            return res.status(411).json({
                message:"user already exist"
            })
        }
        // //encrypt password
        // const encryptPassword=encrypt(req.body.password,ecncrypt_decrypt_key)
        // //creating user
        // const newUser=await User.create({
        //     username:req.body.username,
        //     password:encryptPassword,
        //     firstName:req.body.firstName,
        //     lastName:req.body.lastName,
        //     privilege:true,
        // })// can get userid from newUser
        // const userId=newUser._id
        // //create token
        // const token=generateToken({userId},jwtKey)

        // res.json({
        //     message : "Admin user created succesfully",
        //     token:token
        // })
        // res.redirect('/signin')
  }catch(error){
        logger.error("error in signing up admin",error)
        // res.redirect('/signup')
  }
}

module.exports={userSignup,adminSignup}