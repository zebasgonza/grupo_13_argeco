const productModel = require('../models/products');
const DB = require('../database/models');
/* const stock = require('../database/models/stock');  */

const controllers = {

    // get /products/Sebas
    getProducts: async (req, res) => {

        /* se asigna que busque todos los datos desde la tabla Stock */
        const Stock = await DB.Stock.findAll()

        /* const productos = productModel.findAll(); */
        /* Mostramos en la vista todos los productos de la tabla Stock */
        const productos = await DB.Stock.findAll()
        res.render('listProducts', {
            title: 'Lista de productos',
            productos
        });

    },
   //get/Create/Sebas
   
    getCreate: async (req, res) => {
        
        const nuevoProducto = {
            id_producto: req.body.id,
            nombre: req.body.nombre,
            imagen: req.body.imagen,
            categoria: req.body.categoria,
            descripcion: req.body.descripcion,
            cantidad: req.body.cantidad,
            precio: req.body.precio,
        };

        try {
            const datos = await DB.Stock.create(nuevoProducto);
            console.log(datos);
        } catch (error) {
            console.log(error);

        }


        res.render('creacionProductos', {
            title: 'Crear producto',
            nuevoProducto
        });

/*         res.render('creacionProductos', { errors: [], values: {} });  */
        },
    

    
    deleteProducts: (req, res) => {
        const id = Number(req.params.id);
    
        productModel.deleteById(id);
    
        res.redirect('/products');
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

    updateProducts: async (req, res) => { 

        /* NEW CODE */
        console.log(req.params);
        
        const id = req.params.id;
        const updateValues = req.body;

        try {

            const stockProduct = await DB.Stock.findByPk(id);

            if (!stockProduct) {
                return res.status(404).send('El producto no existe :(');
            }

            if (req.file) {
                // Actualiza una imagen si el usuario decide cambiarla
                console.log('Imagen antes de la actualización:', stockProduct.imagen);
                stockProduct.imagen = '/img/' + req.file.filename;
                console.log('Imagen después de la actualización:', stockProduct.imagen);
    
                
            }

            await stockProduct.update(updateValues);
            
            console.log(req.body);
            res.redirect('/products');
        } catch (error) {
            res.send('No se pudo actualizar')
            console.log(error);
        }

        /* OLD CODE */
/*         const id = Number (req.params.id); 
        const nuevosDatos = req.body;

        productModel.updateById(id, nuevosDatos)
        
        res.redirect('/products'); */
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


    // @GET /products/:id/update

    getUpdate: async (req, res) => {
        const id = req.params.id;
        const productsToModify = await DB.Stock.findByPk(id)
        if (!productsToModify) {
            return res.send('El producto que desea buscar no se encuentra disponible :( ');
        }
        res.render('edicionProductos', {
            title: 'Edición Productos',
            product: productsToModify
        });
    },

    // // post/products

    postProduct: async (req, res) => {
        try {
            let datos = req.body;
            datos.price = Number(datos.precio);
            /* datos.img = '/imgs/products/' + req.file.filename; */
            datos.imagen = '/img/' + req.files[0].filename;
/*             datos.img = req.files.map(file => '/img/' + file.filename); */
             // Utiliza Sequelize para crear un nuevo producto en la base de datos
            const newProduct = await DB.Stock.create(datos);
/*             productModel.create(datos); */
            res.redirect('/products');
        } catch (error) {
            console.error('Se produjo un error al crearel producto:', error),
            res.status(400).send('Se produjo un error al crear el producto :(');

        }
     }

}
     
module.exports = controllers;

