const mongoose = require("mongoose");
const router = require("../routes/rawMatRouter");

const rawmatSchema = new mongoose.Schema({
  rawmatcode: {
    type: String,
    unique: true,
    required: true,
  },
  rawmatname: {
    type: String,
    unique: true,
    required: true,
  },
  rawmatquant: {
    type: Number,
    required: true,
  },
  rawmatprice: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("RawMaterial", rawmatSchema);
