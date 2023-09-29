const mongoose = require('mongoose');
const schema = mongoose.Schema;

const invoiceSchema = new schema({

    inCode:{
        type:String,
        required : [true, 'Please enter a text value']
    },
   
    iName:{
        type:String,
        required : [true, 'Please enter a text value']
    },

    Qty:{
        type:Number,
        required : [true, 'Please enter a text value']
    },

    unitP:{
       type:String,
       required : [true, 'Please enter a text value']
    },

    itDis:{
        type:Number,
        required : [true, 'Please enter a text value']
    },
    
    Tot:{
        type:Number,
        required : [true, 'Please enter a text value']
    },
    subTot:{
        type:Number,
        required : [true, 'Please enter a text value']
    },

    inDis:{
        type:Number,
        required : [true, 'Please enter a text value']
    },

    netTot:{
        type:Number,
        required : [true, 'Please enter a text value']
    },

    crDate:{
        type: Date,
        required :[true,'Please enter a date']
    }

    
})
 
module.exports = mongoose.model('Invoice', invoiceSchema);
