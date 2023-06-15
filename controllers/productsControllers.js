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

    // get/products

    updateProducts: (req, res) => {

        const id = number(req.params.id);

        const productoModificar = productos.find(productoActual => productoActual.id === id);

        if (!productoModificar){
            // Con el return detenemos la ejecución del controller, y con el res.send enviamos un mensaje de errar 
            // queremos detener la ejecución para que no se ejecute el otro res.render (la otra respuesta)
            return res.send('error de id');
        }
        res.render('updateproduct',{product: productoModificar});
    }
}

module.exports = controllers;

