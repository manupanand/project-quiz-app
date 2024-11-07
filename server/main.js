const express=require("express")
const app=express()


app.get('/',(req,res)=>{
    res.json({
        message:"got main route"
    })
})

app.listen('1500',()=>{
    console.log("app listening to port 1500")
})