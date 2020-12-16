import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js';

// Get all products
// GET /api/products
// Public
router.route('/').get(getProducts);

// Get a product by its id
// GET /api/products/:id
// Public
router.route('/:id').get(getProductById);

export default router;
