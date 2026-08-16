import Product from "../models/Product.js";

export const searchProducts = async (req, res) => {
  try {
    const keyword = req.query.keyword?.trim();

    if (!keyword) {
      return res.json([]);
    }

    const products = await Product.find({
      $or: [
        { name: { $regex: keyword, $options: "i" } },
        { category: { $regex: keyword, $options: "i" } },
        { brand: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } }
      ]
    });

    res.json(products);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message
    });

  }
};