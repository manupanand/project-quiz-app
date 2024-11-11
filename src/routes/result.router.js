const express= require('express')

const router=express.Router()
const resulController=require('../controllers/resultController')



//get result only for user
router.get('/result',resulController.resultUser)

//get result for all , admin only
router.get('/allresult',resulController.resultUser)


module.exports=router