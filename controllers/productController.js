const Products = require("../models/productModels");

const createProduct = async (req, res) => {
    try {
        const { name, price , category } = req.body
        const product = await Products.create({ name,price,category })
        res.status(201).json({ message: "Product created successfully", code: 201, data: product })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", code: 500, error: error.message })
    }
}


const getProducts = async (req, res) => {
    try {
   
        const products = await Products.find();
        if (products.length === 0) return res.status(200).json({ message: "There is no any product", code: 200 })
        // if (!products) return res.status(404).json({ message: "Product not found", code: 404 })
        res.status(200).json({ message: "Products retrieved successfully", code: 200, data: products })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", code: 500, error: error.message })
    }
    
}
module.exports = {
    createProduct,
    getProducts
}