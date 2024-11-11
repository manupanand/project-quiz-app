const express=require('express')
const {isAdminAuthenticated}=require("../middleware/adminAuthenticator.middleware")

const router = express.Router();
const quizController = require("../controllers/questionController");

//get all question admin/user
router.get('/all',quizController.getQuestions)

//  Create question -only admin
router.post('/create',isAdminAuthenticated,quizController.createQuestion)

//delet a question -only admin
 router.delete('/delete',isAdminAuthenticated,quizController.deleteQuestion)

//update a question -id only admin
 router.put('/update',isAdminAuthenticated,quizController.updateQuestion)



module.exports =router
