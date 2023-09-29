const mongoose = require('mongoose');

const taskSchema  = mongoose.Schema({
    /*user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },*/
    tId : {
        type : String,
        required : [true, 'Please enter a text value'],
        unique : true
    }, 
    iName : {
        type : String,
        required : [true, 'Please enter a text value']
    },
    iQty : {
        type : Number,
        required : [true, 'Please enter a numerical value']
    },
    prodSupe : {
        type : String,
        required : [true, 'Please enter a text value']
    },
    sDate : {
        type : Date,
        required : [true, 'Start date is rquired']
    },
    eDate : Date,
    tState : {
        type : String,
        required : [true, 'Start date is rquired']
    },
}
);

module.exports = mongoose.model('Task', taskSchema);
