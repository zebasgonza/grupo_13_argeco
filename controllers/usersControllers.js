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
        usersModel.create(datos);
        // Debe redirreccionar a la vista de perfil usuario.
        res.redirect('/products');
    },

    getLogin : (req, res) => {
        res.render('login'); // Nombre de la vista para la página de inicio de sesión
        const data = {
            title: "Login" // Establece el valor deseado para el título
        };
    
        res.render('login', data);
      },
    

}

module.exports = controllers;
