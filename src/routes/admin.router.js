const express=require('express')
const router=express.Router()
const {adminSignup}=require('../controllers/signupController')
const quizRouter=require('./quiz.router')




router.get('/signin',(req,res)=>{
    res.render('signin.ejs')
})
router.get('/signup',(req,res)=>{
    res.render('signup.ejs')
})
router.post('/signup',adminSignup)
router.post('/signin',(req,res)=>{
    
})
router.post('/update',(req,res)=>{
    
})
router.use('/question',quizRouter)
module.exports= router