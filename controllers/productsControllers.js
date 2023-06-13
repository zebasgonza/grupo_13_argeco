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
    //get/products/:id/detail

    getProductDetail: (req, res) => {

        const id = number(req.params.id);

        const productoAMostrar = productModel.findById(id);

        if (!productoAMostrar) {
            return res.send('error de id');
        }

        res.render('productDetail', { title: 'Detalle', product: productoAMostrar });
    },

    // post/products

    postProduct: (req, res) => {

        let datos = req.body;

        productModel.createOne(datos);

        res.redirect('/');
    },
}

module.exports = controllers;