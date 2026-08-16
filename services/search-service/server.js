import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import searchRoutes from "./routes/searchRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/search", searchRoutes);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`🔍 Search Service running on ${PORT}`);
});