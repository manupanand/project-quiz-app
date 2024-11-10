// function to generate and validate json web token
const logger=require('./logger')
const jwtToken=require('jsonwebtoken')

const generateToken=(header,secretKey)=>{
    try{
        if(!header.userId){
            logger.error("Missing userId in token Header")
        }
        const token=jwtToken.sign(header,secretKey)
        logger.info(" Token generated successfully")
        return token
    }catch(error){
        logger.error("Error in generating token",error)
        return null
    }
    
}
const validateToken=(token,secretKey)=>{
    try{
        const verify=jwtToken.verify(token,secretKey)
        logger.info("Token validated successfully")
        return verify
    }catch(error){
        logger.error("Error in verifying token",error)
        return null
    }
    
}

module.exports={generateToken,validateToken}