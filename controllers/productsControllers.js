const productModel = require('../models/products');


const controllers = {

    // get /products/Sebas
    getProducts: (req, res) => {
        // buscamos todos los productos que tenemos en la base de datos.
        const productos = productModel.findAll();
        res.render('listProducts', {
            title: 'Lista de productos',
            productos
        });

    },
   //get/Create/Sebas
    getCreate: (req, res) => {
        res.render('creacionProductos', {
            title: 'Creación de productos'
        });
    },


    // get /productscard/ Omar
    getCard: (req, res) => {
        const productos = productModel.findAll();
        res.render('productCard', {
            title: 'carrito',
            productos 
        });
        console.log(productos);
    },

    // get/products/Omar

    updateProducts: (req, res) => {

        const id = Number(req.params.id);

        const productoModificar = productos.find(productoActual => productoActual.id === id);

        if (!productoModificar){
            // Con el return detenemos la ejecución del controller, y con el res.send enviamos un mensaje de errar 
            // queremos detener la ejecución para que no se ejecute el otro res.render (la otra respuesta)
            return res.send('error de id');
        }
        res.render('updateproduct',{product: productoModificar});

    },
    //get/products/:id/detail/Mawe

    getProductDetail: (req, res) => {

        const id = Number(req.params.id);


        const productoAMostrar = productModel.findById(id);

        if (!productoAMostrar) {
            return res.send('error de id');
        }

        res.render('productDetail', { title: 'Detalle', product: productoAMostrar });
    },

    // // post/products/Mawe

    postProduct: (req, res) => {

         let datos = req.body;

         datos.price = Number(datos.precio);

         /* datos.img = '/imgs/products/' + req.file.filename; */
         datos.img = req.files.map(file => '/img' + file.filename);

         productModel.createOne(datos);

         res.redirect('/products');
     },
}
     
module.exports = controllers;

