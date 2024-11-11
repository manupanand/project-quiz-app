
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
const express=require('express')
const app=express()

require('dotenv').config()
const jwtKey=process.env.JWT_SECRET_KEY
const {validateToken}=require('./src/config/jwt')
const { databaseConnection } = require('./src/config/db');
const Question = require('./src/model/question.models');
const Answer= require('./src/model/useranswer.models');

const {Admin}=require('./src/model/admin.models')
const {isAdminAuthenticated}=require("./src/middleware/adminAuthenticator.middleware")
const mongoose = require('mongoose');
const calculateResult=require('./src/config/result')
//redis test
const axios =require('axios')
const { createClient }=require('redis');


try{
    client.connect(console.log("redis connected"))
}catch(e){
    console.log(e)
}
app.get('/',async(req,res)=>{
   try{
    const key=`authToken:1545926userID`
    const token=1556655
    await client.set(key,token,{EX:3600})//1hr
   }catch(e){
    console.log("redis error",e)
   }
})
app.get('/token',async(req,res)=>{
    //get  token for userid
    const key=`authToken:1545926userID`
    const token= await client.get(key)
    console.log("token:",token)
})
//database connection initialising
// Initialize database connection
//  databaseConnection();
// async function getRes(){
//     let answer=null
//     let question=null
//     const ans =await Answer.find()
//     ans.map((e)=>{answer=e.answers}) 
//     console.log(answer)
//     let ques
//     for (anse of ans){
//          ques=await Question.findById(ans.userId)
        
//     }
//     // ques.map((e)=>{question=e.question})
//     console.log(ques)
    
    
// }
// getRes()

//  app.post('/admin',async (req,res)=>{
//     const header=req.headers.authorization
//     console.log(header)
//     const token=header.split(' ')[1]
//     const decoded=validateToken(token,jwtKey)
//     console.log(decoded)
//     const adminUser= await Admin.findOne({
//         _id :decoded.userId
//     })
//     console.log(adminUser)
//     if(adminUser.privilege){
//         console.log("User is admin")
//     }

//     res.json({
//         message:"Admin is authenticated",

//     })
//  })

// async function addQuestion() {
//     const questionData = {
//         "question": "What is the capital of Thailand?",
//         "answer": ["Tokyo", "Bangkok", "Manila", "Juba "],
//         "correctAnswer": "Bangkok ",
//         "createdBy": new mongoose.Types.ObjectId("6730bebab77f5c5ef06e483d") // Use actual Admin ObjectId here
//     };

//     try {
//         await Question.create(questionData);
//         console.log("Question added successfully!");
//     } catch (error) {
//         console.error("Error adding question:", error);
//     }
// }

// addQuestion();

// async function findQuestion(){
//     const allquestion= await Question.find()
//     answer=allquestion[2].answer
//     console.log(allquestion,answer)

// }
// findQuestion();

// async function createAnswerDocument() {
//     try {
//         // Assume we are working with a user with _id 'userId' and some questions with _id
//         const userId = new mongoose.Types.ObjectId("6730be97b77f5c5ef06e483a"); // Replace with actual userId

//         // Prepare the answers for the user (you should have existing question Ids)
//         const answers = [
//             {
//                 questionId:new  mongoose.Types.ObjectId("6730900b37636904363432f8"), // Replace with an actual questionId
//                 selectedAnswer: "Paris"
//             },
//             {
//                 questionId: new mongoose.Types.ObjectId("6730928a6988404d8aa1c982"), // Replace with another questionId
//                 selectedAnswer: "Madrid"
//             },
//             {
//                 questionId: new mongoose.Types.ObjectId("673092b44e7c9ee02b50f1d3"), // Replace with another questionId
//                 selectedAnswer: "Moscow"
//             },
//             {
//                 questionId: new mongoose.Types.ObjectId("6730935c19c44f36c5b029f6"), // Replace with another questionId
//                 selectedAnswer: "Sydney"
//             },
//             {
//                 questionId:new  mongoose.Types.ObjectId("6730948f0f0dec0577e34ce8"), // Replace with another questionId
//                 selectedAnswer: "Tel Aviv"
//             }
//         ];

//         // Create the answer document
//         const answerDocument = new Answer({
//             userId: userId,
//             answers: answers
//         });

//         // Save the document to the database
//         const savedAnswer = await answerDocument.save();
//         console.log("Answer document created:", savedAnswer);
//     } catch (error) {
//         console.error("Error creating answer document:", error);
//     }
// }

// createAnswerDocument();


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
app.listen(2500)

// {
//     "username":"testsdfsd",
//     "email":"test@vsdf.com",
//    "password":"nasdasdf",
//     "firstName":"adqwerqwdf",
//     "lastName":"weqwesdfdf"
// }