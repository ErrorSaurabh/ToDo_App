import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        // You can add more fields here as needed
    },
    {
        timestamps: true // Add timestamps for createdAt and updatedAt
    }
);

const Product = mongoose.model('Product', productSchema);

export default Product;


