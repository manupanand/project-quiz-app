const mongoose=require('mongoose')

const userAnswerSchema= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    answers:[{
        questionId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Questions',
            required:true,
        },
        selectedAnswer:{
            type:String,
            required:true,

        }
    }],
    submittedAt:{
        type:Date,
        default:Date.now,

    },
})

const Answer = mongoose.model('Answer',userAnswerSchema)

module.exports = Answer