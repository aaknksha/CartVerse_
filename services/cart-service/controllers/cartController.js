import Cart from "../models/Cart.js";

// Get all cart items
export const getCart = async (req, res) => {
  try {
    const items = await Cart.find();

    res.json(items);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Add item to cart
export const addToCart = async (req, res) => {
  try {
    const { productId, name, image, price } = req.body;

    const existing = await Cart.findOne({ productId });

    if (existing) {
      existing.quantity += 1;

      await existing.save();

      return res.json(existing);
    }

    const item = await Cart.create({
      productId,
      name,
      image,
      price,
      quantity: 1,
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete cart item
export const removeFromCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.json({
      message: "Removed",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update quantity
export const updateQuantity = async (req, res) => {
  try {
    const item = await Cart.findById(req.params.id);

    item.quantity = req.body.quantity;

    await item.save();

    res.json(item);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};