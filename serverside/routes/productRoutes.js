import express from "express";

const router = express.Router();

import {
  getProducts,
  getProductDetails,
} from "../controller/productController.js";

router.get("/", getProducts);
router.get("/:productId", getProductDetails);

export default router;
