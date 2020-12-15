import express from 'express';
const app = express();
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

// connect to MongoDB
connectDB();

app.get('/', (req, res) => res.send('API is running'));

// defining routes
app.use('/api/products', productRoutes);

// handling not found and custom error
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) =>
  console.log(`Server running on port ${PORT}...`)
);
