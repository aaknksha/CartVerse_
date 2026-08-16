import Product from "../models/Product.js";

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get single product
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get products by category
export const getProductsByCategory = async (req, res) => {
  try {
    const category = decodeURIComponent(req.params.category);

    const products = await Product.find({
      category: {
        $regex: `^${category}$`,
        $options: "i",
      },
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Search products
export const searchProducts = async (req, res) => {
  try {
    const keyword = req.query.keyword;

    if (!keyword) {
      return res.json([]);
    }

    const products = await Product.find({
      $or: [
        {
          name: {
            $regex: keyword,
            $options: "i",
          },
        },
        {
          brand: {
            $regex: keyword,
            $options: "i",
          },
        },
        {
          category: {
            $regex: keyword,
            $options: "i",
          },
        },
      ],
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};