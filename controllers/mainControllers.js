const path = require('path');
const controllers = {
    getIndex: (req, res) => {

        res.sendFile(path.join(__dirname, '../views/index.html'));
        

    },
    getRegister: (req, res) => {

        res.sendFile(path.join(__dirname, '../views/register.html'));
        

    },
    getDetail: (req, res) => {

        res.sendFile(path.join(__dirname, '../views/productDetail.html'));
        

    },
};
module.exports = controllers;