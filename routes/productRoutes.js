const express = require("express")
const router = express.Router()
router.use(express.json())

const { createProduct, getProducts } = require("../controllers/productController")

router.post("/", createProduct)
router.get("/", getProducts)

module.exports = router