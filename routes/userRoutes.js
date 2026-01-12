const express = require("express")
const routes = express.Router()
routes.use(express.json())

const { createuser , getuser} = require("../controllers/usercontrollers")

routes.post("/",createuser)
routes.get("/",getuser)



module.exports = routes