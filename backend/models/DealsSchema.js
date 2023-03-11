const mongoose = require("mongoose")
const { Schema } = mongoose

const dealsSchema = new Schema({
     dealType:{
        type:'String',
        require:true
    },
    name:{
        type:"String",
        require:true
    },
    description:{
        type:"String",
     },
     services:{
        type:"Array",
    },
    products:{
        type:"Array",
    },
    memberships:{
        type:"Array",
    },
    vouchers:{
        type:"Array",
    },
    startDate:{
        type:"String",
        required:true
    },
    endDate:{
        type:"String",
        required:true
    },
    promotionValue:{
        type:"String",
        required:true
    },
    useLimit:{
        type:"String",
    },
    minPurchaseValue:{
        type:"String"
    },
    applyPromotion:{
        type:"Object",
        required:true
    }
})

module.exports = deal = mongoose.model('deals', dealsSchema);
