const mongoose = require('mongoose')

const Answer = require('../model/useranswer.models')
const logger=require('../config/logger')


const submitAnswer=async(req,res)=>{
    const {userId,answers}=req.body;
    console.log(userId,answers)

    try{//submitting the answer from user
        await Answer.create({
            userId:userId,
            answers:answers
        })
        logger.info("Answer submitted successfully")
        res.send({message:"Answer submitted"});
    }catch(error){
        logger.error("Error in submitting the answer",error)
        res.status(500).json({
            message:"Error in submitting  the answer"
        })
    }
}

module.exports={submitAnswer}