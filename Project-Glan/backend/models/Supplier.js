const mongoose = require("mongoose");
const router = require("../routes/supplierRouter");
const supplierSchema = new mongoose.Schema({
  supid: {
    type: String,
    unique: true,
    require: true,
  },
  supname: {
    type: String,
    required: true,
  },
  supaddress: {
    type: String,
    required: true,
  },
  supphone: {
    type: Number,
    length: 10,
    required: true,
  },
  supemail: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Supplier", supplierSchema);
