import Order from "../models/Order.js";

export const placeOrder = async (req, res) => {
  try {
    const order = await Order.create({
      ...req.body,
      orderNumber:
        "CV" +
        Date.now().toString().slice(-8),
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({
      createdAt: -1,
    });

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    res.json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};