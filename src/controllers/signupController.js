// creating first database of user/admin /signup 
const logger=require('../config/logger')
const inputValidate=require('../config/inputValidation')
const {User}=require('../model/user.models')
const {Admin}=require('../model/admin.models')
const inputvalidate = require('../config/inputValidation')
const {encrypt}=require('../config/crypt')
const {generateToken}=require('../config/jwt')
require('dotenv').config()


//variable
const ecncrypt_decrypt_key=process.env.ENCRYPT_SECRET_KEY
const jwtKey=process.env.JWT_SECRET_KEY



const userSignUp=async (req,res)=>{
    //variable
    let encryptPassword,userId,token
  try{
    
        try{ // Quiz User input validation
            const validate=inputvalidate(req.body)
            if(!validate.success){
            
                logger.error("Error in validating input",validate.error)
                return res.status(411).json({
                    message:"Incorrect inputs"
                })
            }else{
                logger.info("Validation of input success")
                
            }
        }catch(error){
            logger.error("Error in  Input Validation",error)
            return res.status(500).json({
                message: "Error in input validation",
                error: error.message,
            });
        }
      
        try{ // checking if Quiz user exists in database
            const existingUser= await User.findOne({
                username:req.body.username
            })
            if(existingUser){
                logger.warn("User already exist")
                return res.status(411).json({
                    message:"user already exist"
                })
            }
            logger.info("No existing user found, creating new user")
        }catch(error){
            logger.error("Error while checking user existence or creating user", error);
            return res.status(500).json({
                message: "Internal server error",
                error: error.message
            });
        }
        try{
            //encrypting password
            encryptPassword=encrypt(req.body.password,ecncrypt_decrypt_key)
            if (!encryptPassword) {
                return res.status(500).json({
                    message: "Error while encrypting password",
                });
            }
            logger.info("Password encrypted successfully");
            
        }catch(error){
            logger.error("Error while encrypting password", error);
            return res.status(500).json({
                message: "Internal server error",
                error: error.message,
            });
        }
        
        try{
            // creating  user
            const newUser=await User.create({
            username:req.body.username,
            password:encryptPassword,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            privilege:false,
            })
             userId=newUser._id
             logger.info("Quiz user created successfully");
                
            
        }catch(error){
            logger.error("Error in creating new Quiz user ",error)
            return res.status(500).json({
                message: "Error in creating new Quiz user",
                error: error.message,
            });
        }
        try{//create token
            token=generateToken({userId},jwtKey)
            if (!token) {
                return res.status(500).json({
                    message: "Error generating token Quiz usre",
                });
            }
            logger.info("Token generated successfully");

        }catch(error){
            logger.error("Error in generating token", error);
            return res.status(500).json({
                message: "Error in generating token",
                error: error.message,
            });
            
        }
        logger.info("Quiz user created successful ")
        res.json({
            message : "Quiz user created succesfully",
            token:token
        })
        
  }catch(error){
    logger.error("Error in signing up Quiz user", error);
    return res.status(500).json({
        message: "Error in signing up Quiz user",
        error: error.message,
    });
  }
}
const adminSignUp= async(req,res)=>{
    let encryptPassword,userId,token
  try{
    
        try{ //input validation
            const validate=inputvalidate(req.body)
            if(!validate.success){
            
                logger.error("Error in validating input",validate.error)
                return res.status(411).json({
                    message:"Incorrect inputs"
                })
            }else{
                logger.info("Validation of input success")
                
            }
        }catch(error){
            logger.error("Error in  Input Validation",error)
            return res.status(500).json({
                message: "Error in input validation",
                error: error.message,
            });
        }
      
        try{ // checking if user exists in database
            const existingUser= await Admin.findOne({
                username:req.body.username
            })
            if(existingUser){
                logger.warn("User already exist")
                return res.status(411).json({
                    message:"user already exist"
                })
            }
            logger.info("No existing user found, creating new user")
        }catch(error){
            logger.error("Error while checking user existence or creating user", error);
            return res.status(500).json({
                message: "Internal server error",
                error: error.message
            });
        }
        try{
            //encrypting password
            encryptPassword=encrypt(req.body.password,ecncrypt_decrypt_key)
            if (!encryptPassword) {
                return res.status(500).json({
                    message: "Error while encrypting password",
                });
            }
            logger.info("Password encrypted successfully");
            
        }catch(error){
            logger.error("Error while encrypting password", error);
            return res.status(500).json({
                message: "Internal server error",
                error: error.message,
            });
        }
        
        try{
            // creating Admin user
            const newUser=await Admin.create({
            username:req.body.username,
            password:encryptPassword,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            privilege:true,
            })
             userId=newUser._id
             logger.info("Admin user created successfully");
                
            
        }catch(error){
            logger.error("Error in creating new admin",error)
            return res.status(500).json({
                message: "Error in creating new user",
                error: error.message,
            });
        }
        try{//create token
            token=generateToken({userId},jwtKey)
            if (!token) {
                return res.status(500).json({
                    message: "Error generating token",
                });
            }
            logger.info("Token generated successfully");

        }catch(error){
            logger.error("Error in generating token", error);
            return res.status(500).json({
                message: "Error in generating token",
                error: error.message,
            });
            
        }
        logger.info("Admin user created successful ")
        res.json({
            message : "Admin user created succesfully",
            token:token
        })
        
  }catch(error){
    logger.error("Error in signing up admin", error);
    return res.status(500).json({
        message: "Error in signing up admin",
        error: error.message,
    });
  }
}

module.exports={userSignUp,adminSignUp}