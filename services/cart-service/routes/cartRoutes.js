import express from "express";

import {
  getCart,
  addToCart,
  removeFromCart,
  updateQuantity,
} from "../controllers/cartController.js";

const router = express.Router();

router.get("/", getCart);
router.post("/", addToCart);
router.put("/:id", updateQuantity);
router.delete("/:id", removeFromCart);

export default router;