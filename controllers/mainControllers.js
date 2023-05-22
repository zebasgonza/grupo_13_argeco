const path = require('path');
const controllers = {

    /* controlador configurado para EJS */
    getIndex: (req, res) => {

         return res.render(path.join(__dirname, 'index'));
    },

    getproductDetail: (req, res) => {

        return res.render(path.join(__dirname, 'productDetail'));

     },

     /* se debe cambiar el de abajo controlador configurado para EJS */
    getRegister: (req, res) => {

        res.sendFile(path.join(__dirname, '../views/register.html'));
        

    },

};
module.exports = controllers;