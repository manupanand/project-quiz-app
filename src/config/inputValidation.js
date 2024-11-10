const zod =require("zod")
const logger=require('./logger')

const signupBody=zod.object({
    username:zod.string().email(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string()
})
const inputvalidate=(input)=>{

    try{
        const validate=signupBody.safeParse(input)
        logger.info("Input valid is returned")
        return validate
     }catch(error){
        logger.error(" Error in input validation",error)
    }
    
}
module.exports=inputvalidate