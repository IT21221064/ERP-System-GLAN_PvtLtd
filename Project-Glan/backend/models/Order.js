const mongoose = require('mongoose')
const schema = mongoose.Schema;

const orderSchema = new schema({

    iCode:{
        type:Number,
        required : [true,'Please enter a text value']
    },

    itDes:{
        type:String,
        required : [true,'Please enter a text value']
    },

    qty:{
        type:Number,
        required : [true,'Please enter a text value']

    },

    deliDate :{
        type:Date,
        required : [true,'Please enter a text value']
    }
})

module.exports = mongoose.model('Order', orderSchema)