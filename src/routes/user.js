const express=require('express')

const router=express.Router()

router.post('/signup',(req,res)=>{
    res.json({
        message:"got sign up"
    })
})
router.post('/signin',(req,res)=>{
    res.json({
        message:"sign in test"
    })
})
router.get('/testsign',(req,res)=>{
    res.json({message:"new user route got"})
})

module.exports=router