const path = require('path');
const controllers = {
    
   
    /* configuración para vista EJS */
    getIndex: (req, res) => {
         return res.render('index', { title: 'Home' });
    },
    getproductDetail: (req, res) => {
        return res.render('productDetail', { title: 'Detalle del producto' });
    },

    getcreacionProductos: (req, res) => {
        return res.render('creacionProductos', { title: 'creacionProductos' });
    },
    getedicionProductos: (req, res) => {
        return res.render('edicionProductos', { title: 'edicionProductos' });
    },  
  
    getproductCard: (req, res) => {
        return res.render('productCard', { title: 'Carrito de Compras' });
    },

    getLogin: (req, res) => {
        return res.render('login', { title: 'Iniciar Sesión' });
    },
    getRegister: (req, res) => {
        return res.render('register', { title: 'register' });
    },

    
};
module.exports = controllers;
