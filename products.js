const express = require("express");
const Product = require("../models/product");
const router = express.Router();

//getting products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res
    .status(200)
    .json({ message: "Products retrieved successfully", products });
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product ID not found" });
    }

    res
      .status(200)
      .json({ message: "Product retrieved successfully", product });
  } catch (error) {
    console.error("Error retrieving product details:", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    if (!req.body.product_name || !req.body.quantity || req.body.date) {
      return res.status(400).json({ error: "Product name is required" });
    }
    const newProduct = await Product.create(req.body);
    res
      .status(201)
      .json({ message: "Product created successfully", newProduct });
    console.log("Received Request Body:", req.body);
  } catch (error) {
    console.error("Error adding a product:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product ID not found" });
    }

    res
      .status(200)
      .json({ message: "Product updated successfully", updatedProduct });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product ID not found" });
    }

    res
      .status(200)
      .json({ message: "Product deleted successfully", deletedProduct });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

module.exports = router;
