const express=require('express')
const router=express.Router()
const quizRouter=require('./quiz.router')
const {adminSignUp}=require('../controllers/signupController')
const {adminSignIn}=require('../controllers/signinController')




//route for admin sign up
router.post('/signup',adminSignUp)
//route for admin sign in
router.post('/signin',adminSignIn)
//route for admin question
router.use('/question',quizRouter)
module.exports= router