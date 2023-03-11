const express = require("express");
const router = express.Router();
const user = require("../models/UserSchema");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const JWT_SECRET = 'OutletControl';

router.post("/register", async(req, res) => {
    let { name, email, password } = req.body
    const userExist = await user.findOne({email})
    if(userExist){
        success = false
        res.send({success, message:"Please provide valid email"})
    } else{
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt)
        user.create({name, email, password})
        .then(user => console.log(user))
        .catch(err => res.send(err))
        success = true
        const authtoken = jwt.sign(password, JWT_SECRET);
        res.send({success, "authtoken": authtoken})
    }
})

router.post('/login', async (req, res) => {
   const { email, password } = req.body
   const isUser = await user.findOne({email})
   if(isUser){
    const passwordCompare = await bcrypt.compare(password, isUser.password);
    if (!passwordCompare) {
        success = false
        res.send({ success, error: "Please try to login with correct credentials" });
    } else {
        success = true
        const authtoken = jwt.sign(isUser.password, JWT_SECRET);
        res.send({ success, "authtoken": authtoken });
      }
   } else {
    res.send("Invalid email")
   }
})

module.exports  = router; 
