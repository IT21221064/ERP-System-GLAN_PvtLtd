const mongoose = require('mongoose');
const schema = mongoose.Schema;

const vehicleSchema = new schema({
    vType:{
        type:String,
        required : [true, 'Please enter a text value']      
    },
    numPlate:{
        type:String,
        unique:true,
        required : [true, 'Please enter a text value']
    },
    insurance:{
        type:String,
        required : true 
    },
    capacity:{
        type:String,
        uniqu:true,
        required : [true, 'Please enter a text value']
    },
    vStatus:{
        type:String,
        
    }
})

module.exports = mongoose.model('Vehicle', vehicleSchema);