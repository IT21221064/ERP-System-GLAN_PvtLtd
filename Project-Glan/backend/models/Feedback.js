const { response } = require('express');
const mongoose = require('mongoose');
const schema = mongoose.Schema

const feedbackSchema = new schema({
    fid: {
        type: String,
        required: [true, 'Please enter a text value'],
        unique: true
    },


    cusName: {
        type: String,
        required: [true, 'Please enter a text value'],
    },
    date: {
        type: Date,
        required: true
    },
    feed: {
        type: String,
        required: [true, "Please enter text"]
    },
    response: {
        type: String,
        //required: [true, "Please enter text"]
    },
    status: {
        type: String,
        //required: [true, "Please enter text"]
    },
    assign: {
        type: String,
        //required: [true, "Please enter text"]
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Feedback', feedbackSchema);