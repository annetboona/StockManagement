const mongoose = require("mongoose");

const StockInSchema = new mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("StockIn", StockInSchema);
