const express = require("express")
const Router = express.Router()

Router.use(express.json())

const { createuser , getuser} = require ("../controllers/controllers")

Router.post("/",createuser)
Router.get("/",getuser)



module.exports = Router