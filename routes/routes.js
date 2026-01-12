const express = require("express")
const router = express.Router()

const clothRoutes = require("./clothsRoutes")
const userRoutes = require("./userRoutes")
const productRoutes = require("./productRoutes")


router.use("/user", userRoutes)
router.use("/product", productRoutes)
router.use("/cloth", clothRoutes)


module.exports = router