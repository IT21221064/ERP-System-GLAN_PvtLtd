const mongoose = require('mongoose');
const schema = mongoose.Schema

const customerSchema = new schema({
    cusId: {
        type: String,
        unique: true,
        required: [true, 'Please enter a text value']
    },
    cusName: {
        type: String,
        required: [true, 'Please enter a text value']
    },
    email: {
        type: String,
        required: [true, 'Please enter a text value']
    },
    address: {
        type: String,
        required: [true, 'Please enter a text value']
    },
    dob: {
        type: Date,
        required: true
    },
    conInfo: {
        type: Number,
        required: [true, 'Please enter a numerical value']
    },
    user: {
        type: String,
        required: [true, 'Please enter a text value']
    },
    password: {
        type: String,
        required: [true, "Please enter password"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Customer', customerSchema);