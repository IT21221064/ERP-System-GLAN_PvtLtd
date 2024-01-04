const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect('mongodb+srv://GlanInternational:sewaka1234@glandb.yluz4kb.mongodb.net/GlanDB?retryWrites=true&w=majority');
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB;