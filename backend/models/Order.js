import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    pincode: {
      type: String,
      required: true,
    },

    paymentMethod: {
      type: String,
      required: true,
    },

    products: [
      {
        productId: String,
        name: String,
        quantity: Number,
        price: Number,
      },
    ],

    totalPrice: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);