const express=require('express')
const {question}=require('../controllers/questionController')
const { isAuthenticated } = require('../middleware/authentication.middleware')
const {isAdminAuthenticated}=require("../middleware/adminAuthenticator.middleware")

const router = express.Router();
const quizController = require("../controllers/questionController");

//get all question
router.get('/all',quizController.getQuestions)

//  Create question -only admin
router.post('/update',isAdminAuthenticated,quizController.createQuestion)

//delet a question -only admin
router.delete('/:id',isAdminAuthenticated,quizController.deleteQuestion)

//update a question -id only admin
router.put('/:id',isAdminAuthenticated,quizController.updateQuestion)

module.exports =router
