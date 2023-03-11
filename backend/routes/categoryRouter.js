const express = require("express");
const router = express.Router();
const category = require("../models/category");

//Post a category
router.post('/category', (req, res) => {
    category.create(req.body)
    .then(category => res.status(201).json({success:true, category}))
    .catch(err => console.log(err))
})


//Get indivisual category
router.get("/category/get/:id", (req, res) => {
    category.findById(req.params.id)
    .then(category => res.status(201).json({category}))
})

module.exports  = router;
