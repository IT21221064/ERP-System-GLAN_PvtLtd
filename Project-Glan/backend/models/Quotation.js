const mongoose = require('mongoose');
const schema = mongoose.Schema;

const quotationSchema = new schema({

    cusName:{
       type:String,
       required :[true,'Please enter a text value'] 
    },

    quotationNum:{
        type:Number,
        required:[true,'Please enter a text value']
    },

    iCode:{
        type:Number,
        required:[true,'Please enter a text value']
    },

    packSize:{
        type:Number,
        required:[true,'Please enter a text value']
    },

    qty:{
        type: Number,
        required:[true,'Please enter a text value']
    },

    unitP:{
        type:Number,
        required:[true,'please enter a text value']
    },

    issueDate:{
        type:Date,
        required:[true,'please enter a text value']
    },
    
    itemDes:{
        type:String,
        required:[true,'please enter a text value']
    },

})
module.exports = mongoose.model('Quotation', quotationSchema);