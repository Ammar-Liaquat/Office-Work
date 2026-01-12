const express = require("express")
const { createcloths, getcloths, delcloths, patchcloths } = require("../controllers/clothsControllers")
const routes = express.Router()

routes.use = (express.json())


routes.post("/",createcloths)
routes.get("/",getcloths)
routes.delete("/:id",delcloths)
routes.patch("/:id",patchcloths)


module.exports = routes