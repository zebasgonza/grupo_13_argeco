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

    // @GET /products/:id/update

    getUpdate: (req, res) => {
        const id = Number (req.params.id);
        const productsToModify = productModel.findById(id)
        if (!productsToModify) {
            return res.send('El producto que desea buscar no se encuentra disponible :( ');
        }
        res.render('edicionProductos', {
            title: 'Edición Productos',
            product: productsToModify
        });
    },

    // // post/products

    postProduct: (req, res) => {

         let datos = req.body;

         productModel.createOne(datos);

         res.redirect('/');
     }
}

module.exports = controllers;

