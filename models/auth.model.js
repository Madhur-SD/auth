const mongoose = require("mongoose")
const Schema = mongoose.Schema

const authSchema = new Schema({
    
    name: {
      type:String  
    },
    gender: {
        type: String,
    },
    country: {
        type:String
    },
    homeTown: {
        type:String
    },
    dob: {
        type: String
    }
})

const authModel = mongoose.model('auth', authSchema)
module.exports = authModel