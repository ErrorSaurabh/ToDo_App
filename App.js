import express from "express";
import productRoutes from "./Routes/productRoutes.js";
import dotenv from "dotenv";
import connect from "./config/database.js";
// Initialize app
const app = express();

// Load environment variables
dotenv.config();

// Connect to database
connect();

// Middleware
app.use(express.json());

// Routes
app.use("/api/product", productRoutes);

// Error handling middleware


export default app;