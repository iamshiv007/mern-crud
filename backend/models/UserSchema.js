const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type:String
    },
    email:{
       type:String
    },
    password:{
        type:String
    }
})

module.exports = student = mongoose.model('Users',UserSchema);
