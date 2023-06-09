const express = require("express");
const path = require("path");
const router = express.Router();

const multer = require("multer");

//@get /products

router.get("../products",productsControllers.getproducts);
