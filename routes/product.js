const express = require("express");
const server = express();
const productsController = require("../controller/product");
const router=express.Router()



router
// create POST /products

.post("/", productsController.createProdcuts)

// Read GET /products
.get("/", productsController.readProducts)

// Read GET /products/:id
.get("/:id", productsController.readById)

// Update PUT /products/:id
.put("/:id", productsController.updateproducts)

// Update PATCH /products/:id
.patch("/:id", productsController.readProducts)

// Delete DELETE /products/:id
.delete("/:id", productsController.deleteProducts)

exports.router=router