const express = require("express")
const router = express.Router()

const userRoutes = require("../routes/routes")
const productRoutes = require("../routes/productRoutes")

router.use("/user", userRoutes)
router.use("/product", productRoutes)



module.exports = router