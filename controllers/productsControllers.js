
const path = require("path");

const productModel = require('../models/products');

const controllers = {
    
    // get /products 
    getProducts: (req, res) => {
        const productos = productModel.findAll();
        res.render('index', {
            title: 'Productos',
            productos
        });
    },



}

module.exports = controllers;