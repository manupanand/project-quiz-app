//router for all routes
const express=require('express')

const userRouter=require('./user.router')
const adminRouter=require('./admin.router')


const router=express.Router()

router.use('/user',userRouter)
router.use('/admin',adminRouter)


module.exports=router