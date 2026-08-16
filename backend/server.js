import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(process.env.PORT || 5000, () => {
      console.log(
        `Server running on port ${process.env.PORT || 5000}`
      );
    });
  })
  .catch((error) => {
    console.error(error);
  });