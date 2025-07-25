const mongodb = require('mongoose')

//mongodb database schema for authenticate user's login and signup

const userScheme = mongodb.Schema({

    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        requrie: true,

    },
    confirmpassword: {
        type: String,
        require: true
    },



}, { timestamp: true })


module.exports = mongodb.model('User', userScheme)

