const express=require('express')
const router=express.Router()
const {adminSignUp}=require('../controllers/signupController')
const quizRouter=require('./quiz.router')




router.post('/signup',adminSignUp)
router.post('/signin',(req,res)=>{
    
})
// router.post('/update',isAdminAuthenticated,(req,res)=>{
    
// })
router.use('/question',quizRouter)
module.exports= router