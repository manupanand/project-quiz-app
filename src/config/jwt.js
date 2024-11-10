// function to generate and validate json web token
const logger=require('./logger')
const jwtToken=require('jsonwebtoken')

const generateToken=(header,secretKey)=>{
    try{
        const token=jwtToken.sign(header,secretKey)
        logger.info(" Token generated success")
        return token
    }catch(error){
        logger.error("Error in generating token",error)
        return null
    }
    
}
const validateToken=(token,secretKey)=>{
    try{
        const verify=jwtToken.verify(token,secretKey)
        logger.info("Token validated success")
        return verify
    }catch(error){
        logger.error("Error in verifying token",error)
        return null
    }
    
}

module.exports={generateToken,validateToken}