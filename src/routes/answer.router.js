const express=require('express')
const answerController=require('../controllers/answerController')
const router = express.Router();


router.post('/submit',answerController.submitAnswer)
module.exports =router