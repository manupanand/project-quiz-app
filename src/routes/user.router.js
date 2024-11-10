const express=require('express')
const {userSignUp}=require('../controllers/signupController')
const router=express.Router()
const quizRouter=require('./quiz.router')
const {isAuthenticated}=require('../middleware/authentication.middleware')



// user sign up route
router.post('/signup',userSignUp)
//user sif=gn in route
router.post('/signin',(req,res)=>{
    
})
// route for questions
 router.use('/question',isAuthenticated,quizRouter)
module.exports=router

