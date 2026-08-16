import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import productRoutes from "./routes/productRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";
dotenv.config();
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Gateway running on port ${PORT}`);
});