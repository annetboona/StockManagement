const express = require("express");
const router = express.Router();
const product = require("../models/product");
const stockIn = require("../models/StockIn");
const stockOut = require("../models/StockOut");
router.post("/report", async (req, res) => {
  try {
    const product = await product.find();
    const report = await Promise.all(
      product.map(async (product) => {
        const stockInTotal = await stockIn.aggregate([
          { $match: { product_id: product._id } },
          { $group: { id: null, total: { $sum: "$quantity" } } },
        ]);
        const stockOutTotal = await stockOut.aggregate([
          { $match: { product_id: product._id } },
          { $group: { id: null, total: { $sum: "$quantity" } } },
        ]);
        const inQty = stockInTotal[0]?.total || 0;
        const outqty = stockOut[0]?.total || 0;
        if (!inQty || !outqty) {
          return {
            product_id: product.product_name,
            stock_in: inQty,
            stock_out: outqty,
            balance: inQty - outqty,
          };
          res.json(Report);
        }
      })
    );
  } catch (error) {
    res.status(500).json("server error:", Message.error);
  }
});
module.exports = router;
