
const {validateToken}=require('../config/jwt')
const logger=require('../config/logger')


require('dotenv').config()
const jwtKey=process.env.JWT_SECRET_KEY

const isAuthenticated=async (req,res,next)=>{
    const validHeader=req.headers.authorization
    try{

        // Check if the authorization header is present and starts with 'Bearer'
        if(!validHeader||!validHeader.startsWith('Bearer')){
            logger.error("Invalid user -Authorization header missing or incorrect")

            return res.status(403).json({
                message:"Not avalid user -Authorization header missing or incorrect"
            })
        }
        // Extract token (split with a space to correctly get the token part)
        const token=validHeader.split(' ')[1]
        //validate token
        try{
            const decoded=validateToken(token,jwtKey)
            req.userId=decoded.userId
            logger.info("User  access is granted")                                         
            return next()

        }catch(error){
            logger.error("Token validation failed", error)
            return res.status(403).json({
                message: "Invalid or expired token"
            })
        }
        
    }catch(error){
        logger.error("Error in authenticating user", error)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
      
}
module.exports={isAuthenticated}