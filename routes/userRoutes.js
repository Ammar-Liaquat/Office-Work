const express = require("express")
const routes = express.Router()
routes.use(express.json())

const { createuser , getuser, patchuser, deluser} = require("../controllers/usercontrollers")

routes.post("/",createuser)
routes.get("/",getuser)
routes.patch("/:id",patchuser)
routes.delete("/",deluser)




module.exports = routes