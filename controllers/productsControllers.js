const productModel = require('../models/products');


const controllers = {

    // get /products 
    getProducts: (req, res) => {
        // buscamos todos los productos que tenemos en la base de datos.
        const productos = productModel.findAll();
        res.render('listProducts', {
            title: 'Lista de productos',
            productos
        });

    },

    getCreate: (req, res) => {
        res.render('creacionProductos', {
            title: 'Creación de productos'
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

    //get/products/:id/detail

    getProductDetail: (req, res) => {

        const id = Number(req.params.id);


        const productoAMostrar = productModel.findById(id);

        if (!productoAMostrar) {
            return res.send('error de id');
        }

        res.render('productDetail', { title: 'Detalle', product: productoAMostrar });
    },

    // // post/products

    postProduct: (req, res) => {

         let datos = req.body;

         productModel.createOne(datos);

         res.redirect('/');
     },
}

module.exports = controllers;