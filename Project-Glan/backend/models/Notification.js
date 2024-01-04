const mongoose = require('mongoose');
const schema = mongoose.Schema

const notificationSchema = new schema({
    nid: {
        type: String,
        required: [true, 'Please enter a text value'],
        unique: true
    },


    cusName: {
        type: String,
        required: [true, 'Please enter a text value']
    },

    date: {
        type: Date,
        required: true
    },

    noti: {
        type: String,
        required: [true, "Please enter a text value"]
    },


}, {
    timestamps: true
})

module.exports = mongoose.model('Notification', notificationSchema);