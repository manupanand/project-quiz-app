const mongoose=require('mongoose')


//schema for user

const userSchema=new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        maxlength: 50,
        minlength: 6,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'] // Regex for email validation
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        maxlength: 2000
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    privilege: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true  // Adds createdAt and updatedAt timestamps automatically
})

const User= mongoose.model('User',userSchema)

module.exports={User}