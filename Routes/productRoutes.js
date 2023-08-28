import express from "express";
import {createProduct, readAllProducts, readProductById, updateProduct, deleteProduct} from "../controllers/productController.js";

const router = express.Router();

router.post('/create', createProduct);

router.get('/read', readAllProducts);

router.get('/read/:id', readProductById);

router.put('/update/:id', updateProduct);

router.delete("/delete/:id", deleteProduct)

export default router;
