const express = require("express");
const path = require("path");
const router = express.Router();

//requerimos multer para que el usuario pueda subir archivos.
const multer = require("multer");
//requerimos para llamar a los controladores de products
const productsControllers = require('../controllers/productsControllers');


//metodo http /la ruta desde el url

//products (GET) nos MUESTRA el listado de productos
router.get("../products",productsControllers.getproducts);

// products/create (GET) nos MUESTRA la vista para crear un producto
router.get('/create', productControllers.getCreate);

// products (POST) permite que el usuario pueda CREAR y ENVIAR la info al servidor
router.post('/', upload.any('img'), productControllers.postProducts);

// products/:id/detail (GET) nos MUESTRA la vista del detalle de un producto en especifico de acuerdo a su ID
router.get('/:id/detail', productControllers.getProductsDetail);

//products/:id/delete (DELETE) ELIMINA información del detalle de un producto en especifico de acuerdo a su ID
router.delete('/:id/delete', productControllers.deleteProducts);

//products/:id/update (GET) nos MUESTRA la vista para editar un producto ya existente de acuerdo a su ID
router.get('/:id/update', productControllers.getUpdate);

// @PUT /products/:id/update permite reemplazar un dato ya existente de un producto según su ID
router.put('/:id/update', productControllers.updateProducts);

// products/cart (GET) MUESTRA la vista del carrito de compras
router.get('/cart', productControllers.getCart);

module.exports = route;