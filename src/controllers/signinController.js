// creating first database of user/admin /signin
const logger=require('../config/logger')
const inputValidate=require('../config/inputValidation')
const {User}=require('../model/user.models')
const {Admin}=require('../model/admin.models')
const {signInValidate} = require('../config/inputValidation')
const {encrypt}=require('../config/crypt')
const {generateToken}=require('../config/jwt')
const {connectRedis,getClient}=require('../config/redis')
const {validateUserPassword,validateAdminPassword}=require('../config/passwordValidate')
require('dotenv').config()


//variable
const ecncrypt_decrypt_key=process.env.ENCRYPT_SECRET_KEY
const jwtKey=process.env.JWT_SECRET_KEY



const userSignIn=async (req,res)=>{
    //variable
    let userId,token,key
  try{
        //redis connection
        // await connectRedis();
        // const client =getClient()
        try{ // Quiz User input validation
            const validate=signInValidate(req.body)
            if(!validate.success){
            
                logger.error("Error in validating input",validate.error)
                return res.status(411).json({
                    message:"Incorrect inputs",
                    error: validate.error,
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
            userId=existingUser.username
            if(existingUser){
                const id=existingUser._id
                const inputPassword=req.body.password
                  const isValid=validateUserPassword(inputPassword,id,ecncrypt_decrypt_key)
                  if(isValid){
                    try{//create token
                        token=generateToken({userId},jwtKey)
                        if (!token) {
                            return res.status(500).json({
                                message: "Error generating token Quiz user",
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
                    // try {
                    //     key = `authToken:${userId}`;
                        
                    //     redis= await client.set(key, token, { EX: 3600 }); // 1-hour expiration
                    //     logger.info("Token stored in Redis successfully");
                    // } catch (error) {
                    //     logger.error("Error in setting Redis token", error);
                    //     return res.status(500).json({
                    //         message: "Error storing token in Redis",
                    //         error: error.message,
                    //     });
                    // }
                    logger.info("Quiz user verified successful ")
                    res.json({
                        message : "Quiz user verified succesfully",
                        token:token
                    })


                  }
                
            }
            }catch(error){
                logger.error("Error in user verification",error)

            }

       
    
  }catch(error){
    logger.error("Error in signing in Quiz user", error);
    return res.status(500).json({
        message: "Error in signing in Quiz user",
        error: error.message,
    });
  }
}
const adminSignIn=async (req,res)=>{
    //variable
    let userId,token
  try{
        //redis connection
        // await connectRedis();
        // const client =getClient()
        try{ // Quiz User input validation
            const validate=signInValidate(req.body)
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
            const existingUser= await Admin.findOne({
                username:req.body.username
            })
            console.log(existingUser)
            if (!existingUser) {
                logger.error("Admin user not found");
                return res.status(404).json({
                    message: "Admin user not found",
                });
            }
            userId=existingUser.username

            if(existingUser){
                const id=existingUser._id
                const inputPassword=req.body.password
                  const isValid=validateAdminPassword(inputPassword,id,ecncrypt_decrypt_key)
                  if(isValid){
                    try{//create token
                        token=generateToken({userId},jwtKey)
                        if (!token) {
                            return res.status(500).json({
                                message: "Error generating token Quiz user",
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
                    // try{//redis set token
                    //     key=`authToken:${userId}`
                      
                    //     const redisToken=token
                    //     await client.set(key,redisToken,{EX:3600})//1hr 
                        
                    // }catch(error){
                    //     logger.error("Error in seting redis token",error)
                    // }
                    logger.info("Quiz adminuser verified successful ")
                    res.json({
                        message : "Quiz adminuser verified succesfully",
                        token:token
                    })


                  }
                
            }
            }catch(error){
                logger.error("Error in user verification",error)

            }

       
    
  }catch(error){
    logger.error("Error in signing in Quiz admin user", error);
    return res.status(500).json({
        message: "Error in signing in Quiz admin user",
        error: error.message,
    });
  }
}

module.exports={userSignIn,adminSignIn}