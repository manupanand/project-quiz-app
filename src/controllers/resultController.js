const logger=require('../config/logger')

const {calculateResult}=require('../config/result')



//creating logic to get result of user
const resultUser=async(req,res)=>{
    const userId=req.body.userId
  
    try{// calcilating user result
       let {score,totalAttempts,totalQuestions}= await calculateResult(userId)
       
        logger.info("User result calculated")
        res.status(200).json({
            message:"Result calculated",
            score:`${score}`,
            totalAttempts:`${totalAttempts}`,
            totalQuestions:`${totalQuestions}`
            
        })

    }catch{
        logger.error("Error in calculating result of user",error)
        res.status(500).json({
            message :"Error in calculating result of user"
        })
    }

}


module.exports={resultUser}