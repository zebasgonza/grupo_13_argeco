const express = require("express");
const path = require("path");
const router = express.Router();

//requerimos multer para que el usuario pueda subir archivos.
const multer = require("multer");
//requerimos para llamar a los controladores de products
const productsControllers = require('../controllers/productsControllers');


//metodos http / la ruta desde el url

//@get /products
router.get("../products",productsControllers.getproducts);
