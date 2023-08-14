import mongoose from "mongoose";
import Product from "../model/ProductSchema.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const getProducts = asyncHandler(async (req, res) => {
  const product = await Product.find({});

  if (!product) {
    throw new Error("Product not found");
  }

  res.json({ product });
});

export const getProductDetails = asyncHandler(async (req, res) => {
  const productDetailsId = req.params.productId;

  const productDetails = await Product.findById(productDetailsId);

  if (productDetails) {
    return res.json(productDetails);
  }

  if (!productDetails) {
    throw new Error("Could not resolve product details");
  }
});
