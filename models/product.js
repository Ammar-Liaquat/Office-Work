const mongoose = require("mongoose")

const prodcutSchema = new mongoose.Schema({

    name: String,
    price: Number

}, { timestamps: true })

module.exports = mongoose.model("product", prodcutSchema)