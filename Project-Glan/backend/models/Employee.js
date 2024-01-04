const mongoose = require('mongoose');
const schema = mongoose.Schema;

const employeeSchema = new schema({
    empId: {
        type: String,
        unique: true,
        required: [true, 'Please enter a text value']
    },
    Name: String,
    nic: {
        type: Number,
        unique: true,
        required: [true, 'Please enter a numerical value']

    },
    dob: {
        type: Date,
        required: true
    },
    address: String,

    contactInfo: Number
},
{
    timestamps: true,
  }
  );

module.exports = mongoose.model('Employee', employeeSchema);