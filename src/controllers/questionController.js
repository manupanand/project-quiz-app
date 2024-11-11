const mongoose = require('mongoose')

const Question = require('../model/question.models')
const logger=require('../config/logger')


//creating question -only admin can access
const createQuestion = async(req, res) => {
    let userId=req.userId
   
    const questionData={
        question:req.body.question,
        answer:req.body.answer,
        correctAnswer:req.body.correctAnswer,
        createdBy: new mongoose.Types.ObjectId(userId)
    }
    try{
         await Question.create(questionData)
         logger.info("New question created successfully")
         res.send({message:"Question created"});

    }catch(error){
        logger.error("Error in creating new question",error)
        res.status(500).json({ message: "Failed to create question" });
    }
  
};
  // Logic for fetching all questions-user and admin
const getQuestions = async (req, res) => {
  
    try{
        const allquestion= await Question.find()
        const data=allquestion.map((question)=>({
            question:question.question,
            answer:question.answer
        }))
        logger.info("All questions fetched successfully")
        console.log(data)
        res.json(data)
    }catch(error){
        logger.error("Error in getting question from database",error)
        res.status(500).json({ message: "Failed to fetch questions" });
    }
    
}
// Logic for updating a question by ID
const updateQuestion = async (req, res) => {
    const id=req.body.id
    const update=req.body.update
    console.log(req.body)
   try{
        const updateQuestion=await Question.findByIdAndUpdate(id,update,{new:true,runValidators:true})
        if(!updateQuestion){
            return res.status(404).json({ message: "Question not found" }) 
        }
    logger.info("Question updated successfully")
     res.status(200).json({ message: "Question updated successfully" })
   }catch(error){
    logger.error("Error in updating a question",error)
    res.status(500).json({ message: "Error updating question", error })
   }
    

};
// Logic for deleting a question by ID
const deleteQuestion = async (req, res) => {
    const id=req.body.id
  
   try{
        const deleteQuestion=await Question.findByIdAndDelete(id)
       
        if(!deleteQuestion){
            logger.error(" Question not found")
            return res.status(404).json({ message: "Question not found" }) 
        }
    logger.info("Question deletedd successfully")
     res.status(200).json({ message: "Question deleted successfully" })
   }catch(error){
    logger.error("Error in deleting a question",error)
    res.status(500).json({ message: "Error deleting question" })
   }
}

module.exports = {
    createQuestion,
    getQuestions,
    updateQuestion,
    deleteQuestion
}