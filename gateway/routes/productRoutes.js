import express from "express";
import axios from "axios";

const router = express.Router();
console.log("Calling:", `${process.env.PRODUCT_SERVICE}/api/products`);
router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.PRODUCT_SERVICE}/api/products`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.PRODUCT_SERVICE}/api/products/${req.params.id}`
    );

    res.json(response.data);
  } catch (error) {
  console.error("Gateway Error:");

  console.error(error.message);

  if (error.response) {
    console.error("Status:", error.response.status);
    console.error("Data:", error.response.data);
  }

  res.status(500).json({
    message: error.message,
    details: error.response?.data || "No additional details"
  });
}
  }
);

export default router;