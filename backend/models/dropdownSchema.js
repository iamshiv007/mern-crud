const mongoose = require("mongoose");

const dropdownSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    option1:{
        type:String,
    },
    option2:{
        type:String,
    },
    option3:{
        type:String,
    },
    option4:{
        type:String,
    }
});

module.exports = dropdown = mongoose.model("Dropdown", dropdownSchema);