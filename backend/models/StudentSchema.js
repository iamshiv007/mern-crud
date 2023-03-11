const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
   name:{
      type:String,
        required:[true, "please fill the name"]
      },
      email:{
         type:String,
         required:[true, "please fill the email"],
         unique:true
      },
      subject:{
         type:String,
         required:[true, "please fill the subject"]
      },
      country:{
         type:String,
         required:[true, "please fill the country"]
      },
      state:{
         type:String,
         required:[true, "please fill the country"]
      },
      age:{
         type:Number,
         required:[true, "please fill the age"]
      },
      gender:{
         type:String,
         required:[true, "please fill the gender"]
      },
      languages:{
         type:Array,
         required:[true, "please fill the languages"]
      }
})

module.exports = student = mongoose.model('students',StudentSchema);

