const express = require("express");
const router = express.Router();
const dropdown = require("../models/dropdownSchema");

//Post a dropdwon data
router.post("/drop/post", (req, res) => {
    dropdown.create(req.body)
            .then(product => res.json({success:true, product}))
            .catch(err => console.log(err))
        })
        
//Get all dropdwon data        
router.get("/drop/getall", (req,res) => {
    dropdown.find()
            .then(product => res.json({success:true, product}))
            .catch(err => console.log(err))
})

//Get indivisual data by id
router.get("/drop/getone/:id", (req,res) => {
    dropdown.findById(req.params.id)
            .then(product => res.json(product))
            .catch(err => console.log(err))
})

module.exports  = router;
