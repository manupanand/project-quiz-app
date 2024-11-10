
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
const Answer=require('./src/model/useranswer.models');
const {Admin}=require('./src/model/admin.models')
const {isAdminAuthenticated}=require("./src/middleware/adminAuthenticator.middleware")
const mongoose = require('mongoose');
//database connection initialising
// Initialize database connection
 databaseConnection();

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

async function addQuestion() {
    const questionData = {
        "question": "What is the capital of Thailand?",
        "answer": ["Tokyo", "Bangkok", "Manila", "Juba "],
        "correctAnswer": "Bangkok ",
        "createdBy": new mongoose.Types.ObjectId("6730bebab77f5c5ef06e483d") // Use actual Admin ObjectId here
    };

    try {
        await Question.create(questionData);
        console.log("Question added successfully!");
    } catch (error) {
        console.error("Error adding question:", error);
    }
}

addQuestion();

async function findQuestion(){
    const allquestion= await Question.find()
    answer=allquestion[2].answer
    console.log(allquestion,answer)

}
findQuestion();

// async function createAnswerDocument() {
//     try {
//         // Assume we are working with a user with _id 'userId' and some questions with _id
//         const userId = new mongoose.Types.ObjectId("67306af482bf7e71c0409b81"); // Replace with actual userId

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