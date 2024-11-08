const mongoose=require('mongoose')
//question schema
const questionSchema= new mongoose.Schema({
        question:{
            type:String,
            required:true,

        },
        answer:{
            type:[String],
            required:true

        },
        correctAnswer:{
            type:String,
            required:true
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Admin',
            required:true,
        },
        createdAt:{
            type:Date,
            default:Date.now,
        }
})

const Questions=mongoose.model('Questions',questionSchema)

module.exports=Questions