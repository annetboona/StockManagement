const mongoose = require("mongoose");
const { data } = require("react-router-dom");

const ProductSchema = new mongoose.Schema({
  product_name: String,
  quantity: String,
  date: { type: Date, default: Date.now },

});

module.exports = mongoose.model("Product", ProductSchema);
