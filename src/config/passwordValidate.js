const logger= require('./logger')
const {User}=require('../model/user.models')
const {Admin}=require('../model/admin.models')
const {decrypt}=require('./crypt')



async function   validateUserPassword(inputPassword,id,key){
    try{const user=await User.findOne(id)
        const userPassword=decrypt(user.password,key)
        
        if(userPassword==inputPassword){
            logger.info("User password is valid")
            return true
        }
    }catch(error){
        logger.error("Error in validating password",error)
    }
   

}
async function   validateAdminPassword(inputPassword,id){
    try{const admin=await Admin.findOne(id)
        const adminPassword=decrypt(admin.password,key)
        
        if(adminPassword==inputPassword){
            logger.info("User password is valid")
            return true
        }
    }catch(error){
        logger.error("Error in validating password",error)
    }
}

module.exports={validateUserPassword,validateAdminPassword}