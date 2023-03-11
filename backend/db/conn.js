const mongoose = require("mongoose")

const db = "mongodb://localhost:27017"

const connectdb = async() => {
    try{
        mongoose.set('strictQuery', true)
    await mongoose.connect(db, {
      useNewUrlParser: true,
    })
    console.log("Mongodb is Connected Successfully")
    }
    catch(err){
        console.arror(arr.message)
        process.exit(1)
    }
}

module.exports = connectdb