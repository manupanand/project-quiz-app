
const logger=require('./logger')
const Question = require('../model/question.models');
const Answer=require('../model/useranswer.models')



async function calculateResult(userId){
    let questions=await Question.find()
    let score=0
    let totalQuestions=questions.length
    let totalAttempts=0
    //calculating result
    try{
        const allAnswerData= await Answer.find()
        
        for (const user of allAnswerData){
            if(user.userId==userId){
                const userAnswer= await Answer.findById(user._id)
                
                 
                 let attempt=userAnswer.answers
                 totalAttempts=attempt.length
                for(const eachAnswer of userAnswer.answers){
                    
                     let questionId=eachAnswer.questionId
                    
                     const checkAnswer= await Question.findById(questionId)
                      if(checkAnswer.correctAnswer==eachAnswer.selectedAnswer){
                        score++
                      }
                    
                        
                }
            }
        }
        logger.info("result caluclted successfully")
        return {score,totalAttempts,totalQuestions}
      
    }catch(error){
        logger.error("Error in calculating the result")

    }
    

}

module.exports={calculateResult}