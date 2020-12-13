import express from 'express';
const app = express();
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

// connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) =>
  console.log(`Server running on port ${PORT}...`)
);
