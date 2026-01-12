const express = require("express")
const router = express.Router()
router.use(express.json())

const { createProduct, getProducts , patchProducts ,delProducts } = require("../controllers/productController")

router.post("/", createProduct)
router.get("/", getProducts)
router.patch("/", patchProducts)
router.delete("/", delProducts)

module.exports = router