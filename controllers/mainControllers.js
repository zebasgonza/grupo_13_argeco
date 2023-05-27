const path = require('path');
const controllers = {
    /* configuración para vista EJS */
    getIndex: (req, res) => {
         return res.render('index', { title: 'Home' });
    },
    getproductDetail: (req, res) => {
        return res.render('productDetail', { title: 'Detalle del producto' });
    },

    getproductCard: (req, res) => {
        return res.render('productCard', { title: 'Carrito de Compras' });
    },

    /* configuración antigua sin EJS */
    getRegister: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/register.html'));
    },

};
module.exports = controllers;