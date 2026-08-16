import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "../models/Product.js";
import products from "./products.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

await Product.deleteMany();

await Product.insertMany(products);

console.log("Products Inserted Successfully!");

process.exit();