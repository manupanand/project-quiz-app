const express=require('express')
const router=express.Router()
const quizRouter=require('./quiz.router')
const answerRouter=require('./answer.router')
const resultRouter=require('./result.router')
const {isAuthenticated}=require('../middleware/authentication.middleware')
const {userSignUp}=require('../controllers/signupController')
const {userSignIn}=require('../controllers/signinController')




// route for user sign up 
router.post('/signup',userSignUp)
//route for user signin
router.post('/signin',userSignIn)
// route for user questions
router.use('/question',isAuthenticated,quizRouter)
// route for user answers
router.use('/answer',isAuthenticated,answerRouter)
//route to get result
router.use('/',isAuthenticated,resultRouter)
module.exports=router

