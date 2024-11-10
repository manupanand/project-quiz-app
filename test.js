
require('dotenv').config()
//  const {encrypt,decrypt}=require('./src/config/crypt')
// const password="newpassword"
// const key=process.env.ENCRYPT_SECRET_KEY

// const encry=encrypt(password,key)

// const decry=decrypt(encry,key)
// console.log(encry,":",decry)
// const head={userId:'mnuappa'}
// const key=process.env.JWT_SECRET_KEY
// const {validateToken,generateToken}=require('./src/config/jwt')

// const valitok=generateToken(head.userId,key)
// console.log(valitok)
// console.log(key)
// console.log(validateToken(valitok,key))
// const express=require('express')
// const app=express()
const { databaseConnection } = require('./src/config/db');
const Question = require('./src/model/question.models');
const mongoose = require('mongoose');
//database connection initialising
// Initialize database connection
databaseConnection();

async function addQuestion() {
    const questionData = {
        "question": "What is the capital of Israel?",
        "answer": ["London", "Washington", "Sydney", "Tel Aviv"],
        "correctAnswer": "Tel Aviv",
        "createdBy": new mongoose.Types.ObjectId("6730469b56b7541e4d418b4a") // Use actual Admin ObjectId here
    };

    try {
        await Question.create(questionData);
        console.log("Question added successfully!");
    } catch (error) {
        console.error("Error adding question:", error);
    }
}

addQuestion();
// const passport=require('passport')

// //local variable
// const user=[]
// app.use(express.urlencoded({extended:false}))
// app.set('view-engine','ejs')
// app.get('/',(req,res)=>{
//     res.render('index.ejs')
// })
// app.get('/signin',(req,res)=>{
//     res.render('signin.ejs')
// })
// app.get('/signup',(req,res)=>{
//     res.render('signup.ejs')
// })
// app.post('/signin',(req,res)=>{
    
// })
// app.post('/signup',async(req,res)=>{
//     try{
//         req.body.email
//         user.push({
//         id:Date(),
//         username:req.body.username,
//         password:req.body.password
//     })
//     res.redirect('/signin')
//     }catch{
//         res.redirect('/signup')
//     }
//     console.log(user)
    

// })
// app.length('/',(req,res)=>{
//     res.render('./src/views/signin.ejs')
// })
// app.listen(2500)

// {
//     "username":"testsdfsd",
//     "email":"test@vsdf.com",
//    "password":"nasdasdf",
//     "firstName":"adqwerqwdf",
//     "lastName":"weqwesdfdf"
// }