import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  const response = await axios.get(
    `${process.env.CART_SERVICE}/api/cart`
  );

  res.json(response.data);
});

router.post("/", async (req, res) => {
  const response = await axios.post(
    `${process.env.CART_SERVICE}/api/cart`,
    req.body
  );

  res.json(response.data);
});

router.put("/:id", async (req, res) => {
  const response = await axios.put(
    `${process.env.CART_SERVICE}/api/cart/${req.params.id}`,
    req.body
  );

  res.json(response.data);
});

router.delete("/:id", async (req, res) => {
  const response = await axios.delete(
    `${process.env.CART_SERVICE}/api/cart/${req.params.id}`
  );

  res.json(response.data);
});

export default router;