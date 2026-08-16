import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderNumber: {
      type: String,
      required: true,
      unique: true,
    },

    customerName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: String,

    address: {
      type: String,
      required: true,
    },

    items: [
      {
        productId: String,
        name: String,
        image: String,
        price: Number,
        quantity: Number,
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);