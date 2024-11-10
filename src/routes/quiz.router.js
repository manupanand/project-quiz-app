const express=require('express')
const {question}=require('../controllers/questionController')
const { isAuthenticated } = require('../middleware/authentication.middleware')
const router = express.Router();
const quizController = require("../controllers/questionController");

router.get('/',(req,res)=>{
res.json({
    message:"got question from db"
})
})



// Define routes and attach controller functions
router.post("/question", quizController.createQuestion); // Create a question
router.get("/question", quizController.getQuestions); // Get all questions
router.put("/question/:id", quizController.updateQuestion); // Update question by ID
router.delete("/question/:id", quizController.deleteQuestion); // Delete question by ID

module.exports = router;

module.exports =router
// Set Up Routes:

//     POST /questions: For adding a new question.
//     GET /questions: For listing all questions.
//     GET /questions/:id: For fetching a specific question by ID.
//     PUT /questions/:id: For updating a question.
//     DELETE /questions/:id: For deleting a question.