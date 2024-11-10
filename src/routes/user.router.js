const express=require('express')
const {userSignup}=require('../controllers/signupController')
const router=express.Router()


router.get('/testsign',(req,res)=>{
    res.json({message:"new user route got"})
})
router.get('/signin',(req,res)=>{
    res.render('signin.ejs')
})
router.get('/signup',(req,res)=>{
    res.render('signup.ejs')
})
router.post('/signup',userSignup)
router.post('/signin',(req,res)=>{
    
})
module.exports=router

