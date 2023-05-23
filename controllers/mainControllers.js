const path = require('path');
const controllers = {

    getIndex: (req, res) => {
         return res.render('index');
    },
    getproductDetail: (req, res) => {
        return res.render('productDetail');
     },
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