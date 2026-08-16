import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  const response = await axios.get(
    `${process.env.ORDER_SERVICE}/api/orders`
  );

  res.json(response.data);
});

router.get("/:id", async (req, res) => {
  const response = await axios.get(
    `${process.env.ORDER_SERVICE}/api/orders/${req.params.id}`
  );

  res.json(response.data);
});

router.post("/", async (req, res) => {
  const response = await axios.post(
    `${process.env.ORDER_SERVICE}/api/orders`,
    req.body
  );

  res.json(response.data);
});

export default router;