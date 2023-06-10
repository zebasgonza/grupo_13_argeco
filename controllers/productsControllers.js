
const path = require("path");

const productModel = require('../models/product');

const controllers = {
    
    // get /products 
    getProducts: (req, res) => {
        const productos = productModel.findAll();
        res.render('productList', {
            title: 'Productos',
            productos
        });
    },



}

module.exports = controllers;