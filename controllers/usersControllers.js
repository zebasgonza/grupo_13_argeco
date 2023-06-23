const usersModel = require('../models/users');


const controllers = {

    // @Get users/register
    getRegister: (req, res) => {
        res.render('register', {
            title: 'Registro'
        });
    },

    // @Post users/register
    postRegister: (req, res) => {
        let datos = req.body;
        datos.price = Number(datos.precio);
        datos.img = req.files.map(file => '/img/users/' + file.filename);
        productModel.create(datos);
        // Debe redirreccionar a la vista de perfil usuario.
        res.redirect('/products');
    }

}

module.exports = controllers;
