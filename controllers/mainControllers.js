const path = require('path');
const controllers = {
    /* configuración para vista EJS */
    getIndex: (req, res) => {
         return res.render('index', { title: 'Home' });
    },
    getproductDetail: (req, res) => {
        return res.render('productDetail', { title: 'Detalle del producto' });
    },

    /* configuración antigua sin EJS */
    getRegister: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/register.html'));
    },
    getDetail: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/productDetail.html'));
    },
    getProductCard: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/productCard.html'));
    },
};
module.exports = controllers;