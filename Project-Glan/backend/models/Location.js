const mongoose = require("mongoose");
//const schema = mongoose.Schema;

const locationSchema = new mongoose.Schema({
    itemID:{
        type:Number,
        unique:true,
        required : [true,'please enter a numerical value']
    },

    itemName:{
        type:String,
        required:[true,'please enter a text value']
    },
    area: {
      type: String,
      required: [true, 'Please enter a text value']
    },
    Qty:{
      type:String,
      required: [true, 'please enter a text value']
    },

    Category:{
      type:String,
      required: [true, 'please enter a text value']
    },

    Description:{
      type:String,
      required: [true, 'please enter a text value']
    },


})
module.exports = mongoose.model('Location', locationSchema)