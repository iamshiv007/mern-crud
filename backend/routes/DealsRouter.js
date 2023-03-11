const express = require("express")
const router = express.Router()
const deal = require("../models/DealsSchema")

//Post a new deal
router.post("/deals/post", (req, res) => {

    const { dealType, name, description, services, products, memberships, vouchers, startDate, endDate, promotionValue, useLimit, minPurchaseValue, applyPromotion } = req.body

    if( !dealType || !name || !startDate || !endDate || !promotionValue || !applyPromotion ){
        return res.status(404).send("plz fill the all required fields")

    }else {
        deal.create(req.body)
        .then(deal => {
            res.json("deal added successfully")
            console.log(deal)
        })
        .catch(err => res.status(404).json("deal not added"))
    }
})

//Get all deals
router.get("/deals/get", (req, res) => {
    deal.find()
    .then(deals => res.json(deals))
    .catch(err => res.status(404).json({noStudentFound:"No deal found"}))
})

//Delete a deal
router.delete("/deals/delete/:id", (req, res) =>{
       deal.findByIdAndDelete(req.params.id)
        .then(deal => {
            res.json("Deleted Successfully")
            console.log(deal)
        })
        .catch(err => res.json(arr))
})

//Update a  deal
router.patch("/deals/patch/:id", (req, res) => {
    deal.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })
    .then(deal => {
        res.json("Updated Successfully")
      console.log(deal)
    })
    .catch(err => res.json(err)) 
})

//gey indivisual deal
router.get("/deals/getIndivisual/:id", (req, res) => {
    deal.findById(req.params.id)
    .then(deal => res.json(deal))
    .catch(err => res.status(404).json('deal not found'))
})

module.exports = router