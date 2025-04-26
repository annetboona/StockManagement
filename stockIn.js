const express = require("express");
const router = express.Router();
const Stock = require("../models/StockIn");
const StockOut = require("../models/StockOut");

router.post("/:id", async (req, res) => {
  const { productName, quantity } = req.body;
  const product = await Stock.findById({ productName });

  if (item) {
    product.quantity += quantity;
    await item.save();
  } else {
    product = await Stock.create({ productName, quantity });
  }

  res.json({ success: true, item });
});

router.post("/stock/out", async (req, res) => {
  const { productName, quantity } = req.body;
  const product = await Stock.findOne({ productName });

  if (!product || product.quantity < quantity) {
    return res.status(400).json({ error: "Not enough stock" });
  }

  product.quantity -= quantity;
  await item.save();

  res.json({ success: true, product });
});
module.exports = router;
