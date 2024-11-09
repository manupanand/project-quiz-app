const express=require('express')

const router=express.Router()


router.get('/testsign',(req,res)=>{
    res.json({message:"new user route got"})
})

module.exports=router