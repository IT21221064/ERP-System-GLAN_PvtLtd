const mongoose = require('mongoose');
const schema = mongoose.Schema;

const creditSchema = new schema({

    CusName:{
        type:String,
        required : [true, 'Please enter a text value']
    },
   
    PayName:{
        type:String,
        required : [true, 'Please enter a text value']
    },

    IssueDate:{
        type:Date,
        required : [true, 'Please enter a text value']
    },

    ComDate:{
       type:Date,
       required : [true, 'Please enter a text value']
    },

    OrNum:{
        type:Number,
        required : [true, 'Please enter a text value']
    },
    
    Sperson:{
        type:String,
        required : [true, 'Please enter a text value']
    },
    CusOrder:{
        type:String,
        required : [true, 'Please enter a text value']
    },

    Icode:{
        type:Number,
        required : [true, 'Please enter a text value']
    },
    
})
 
module.exports = mongoose.model('Credit', creditSchema);