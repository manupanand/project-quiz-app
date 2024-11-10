const express=require('express')
const {userSignup}=require('../controllers/signupController')
const router=express.Router()
// const quizRouter=require('./quiz.router')



router.get('/signin',(req,res)=>{
    res.render('signin.ejs')
})
router.get('/signup',(req,res)=>{
    res.render('signup.ejs')
})
router.post('/signup',userSignup)
router.post('/signin',(req,res)=>{
    
})
// router.use('/question',quizRouter)
module.exports=router

