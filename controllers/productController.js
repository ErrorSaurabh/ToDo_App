import express from 'express';
import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import Product from '../model/Product.js';


// Create a new product
export const createProduct = asyncHandler(async (req, res) => {
        const { name } = req.body;
    
        // Check if 'name' is provided and is a non-empty string
        if (!name || typeof name !== 'string' || name.trim() === '') {
            return res.status(400).json({
                msg: "Invalid 'name' field. It must be a non-empty string."
            });
        }
    
        // Check if 'name' contains only numeric characters
        if (/^\d+$/.test(name)) {
            return res.status(400).json({
                msg: "Invalid 'name' field. It cannot consist only of numeric characters."
            });
        }
    
        const product = await Product.create({ name });
    
        return res.status(201).json({
            msg: "Product created successfully",
            data: product
        });
    });
    


// Read all products
export const readAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({}, 'name');
    res.json(products);
});

// Read product by ID
export const readProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id, 'name');
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Update product
export const updateProduct = asyncHandler(async (req, res) => {
    const { name } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { name },
        { new: true }
    );
    res.json(updatedProduct);
});


// Delete product
export const deleteProduct = asyncHandler(async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (deletedProduct) {
        res.json({ message: 'Product deleted successfully' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});


