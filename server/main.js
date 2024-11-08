const express=require("express")
const app=express()
const cors=require('cors')

app.use(cors())
app.get('/',(req,res)=>{
    res.json({
        message:"new update test"
    })
})

app.listen('2500','0.0.0.0',()=>{
    console.log("app listening to port 2500")
})