import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";

import Product from "./models/Product.js";

dotenv.config();

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");

    const products = JSON.parse(
      fs.readFileSync("./data/products.json", "utf8")
    );

    await Product.deleteMany();

    console.log("🗑️ Existing products removed");

    await Product.insertMany(products);

    console.log(`✅ ${products.length} products inserted successfully`);

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedProducts();