const mongoose = require('mongoose');
const schema = mongoose.Schema

const privilegeSchema = new schema({
    priId: {
        type: String,
        unique: true,
        required: [true, 'Please enter a text value']
    },
    cusName: {
        type: String,
        required: [true, 'Please enter text value']
    },
    offerDes: {
        type: String,
        required: [true, 'Please enter text value']
    },
    points: {
        type: Number,
        required: [true, 'Please enter a numerical value']
    },
    start_date: {
        type: Date,
        required: true
    },
    other: {
        type: String,
        required: [true, "Please enter text"]
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Privilege', privilegeSchema);