const productModel = require('../models/products');


const controllers = {
    
    // get /products 
    getProducts: (req, res) => {
        const productos = productModel.findAll();
        res.render('index', {
            name: 'Productos',
            productos
        });
    },

    // get /productscard 
    getCard: (req, res) => {
        const productos = productModel.findAll();
        res.render('productCard', {
            title: 'carrito',
            productos
        });
        console.log(productos);
    },

}

module.exports = controllers;