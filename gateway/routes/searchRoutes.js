import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const response = await axios.get(
      `${process.env.SEARCH_SERVICE}/api/search`,
      {
        params: {
          keyword,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Search Gateway Error:", error.message);

    if (error.response) {
      console.error(error.response.data);
    }

    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;