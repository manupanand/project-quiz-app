const express=require('express')
const router=express.Router()
const {adminSignup}=require('../controllers/signupController')


router.get('/testsign',(req,res)=>{
    res.json({message:"new admin route got"})
})
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
module.exports= router