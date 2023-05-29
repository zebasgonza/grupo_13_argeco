const path = require('path');
const controllers = {
    
   
    /* configuración para vista EJS */
    Index: (req, res) => {
         return res.render('index', { title: 'Home' });
    },
    productDetail: (req, res) => {
        return res.render('productDetail', { title: 'Detalle del producto' });
    },

    creacionProductos: (req, res) => {
        return res.render('creacionProductos', { title: 'creacionProductos' });
    },
    edicionProductos: (req, res) => {
        return res.render('edicionProductos', { title: 'edicionProductos' });
    },
        
        
    /* configuración antigua sin EJS */   
    Register: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/register.html'));
    },
    Detail: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/productDetail.html'));
    },
    ProductCard: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/productCard.html'));
    },
    
};
module.exports = controllers;
